import { useEffect, useRef, useState } from "react";
import { useAudioContext } from "~/context/AudioContext";

// Ensure type compatibility for SpeechRecognition
interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionResultList extends Array<SpeechRecognitionResult> {}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
}

export default function Siri() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const {controls} = useAudioContext();
  useEffect(() => {
    // Initialize Speech Recognition
    const SpeechRecognition = window.SpeechRecognition  || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error(
        "Web Speech API is not supported in this browser. Please use Google Chrome."
      );
    } else {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.lang = "en-US";
      recognitionInstance.interimResults = false;
      recognitionInstance.maxAlternatives = 1;

      recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        console.log("You said:", speechResult);
        if (speechResult.includes("hey siri play faded song")) {
          playFadedSong();
        }
        else if (
          speechResult.includes("hey siri pause faded song") ||
          speechResult.includes("hey siri pause song") ||
          speechResult.includes("hey siri pause the song")
        ) {
          pauseFadedSong();
        }
        // Stop recognition after getting the result
        setIsPlaying(false);
        recognitionInstance.stop();
      };

      recognitionInstance.onspeechend = () => {
        recognitionInstance.stop();
        setIsPlaying(false);
        console.log("Speech recognition stopped.");
      };

      recognitionInstance.onerror = (event: any) => {
        console.error("Speech recognition error detected:", event.error);
        setIsPlaying(false);
        if (event.error === "not-allowed") {
          console.error(
            "Microphone access was denied. Please allow microphone access and try again."
          );
        } else if (event.error === "network") {
          console.error("Network error. Please check your internet connection.");
        } else {
          console.error("An unknown error occurred:", event);
        }
      };

      setRecognition(recognitionInstance);
    }

    // Clean up on component unmount
    return () => {
      recognition?.stop();
    };
  }, []);

  const playFadedSong = () => {
     controls.play();
  };
  const pauseFadedSong = () => {
    controls.pause();
  }

  const handlePlayPause = () => {
    if (recognition && !isPlaying) {
      setIsPlaying(true);
      recognition.start();
      console.log("Speech recognition started. Please speak.");
    }
  };

  return (
    <div className="size-full bg-[#180C3F] flex flex-col justify-center items-center">
      <Image isPlaying={isPlaying} onClick={handlePlayPause} />
      <div className="text-white text-center italic">
        {isPlaying ? "listening..." : ""}
      </div>
      <div className="mt-4 px-4 py-2 bg-white text-[#1d0e49] rounded-xl italic">
        Do you wanna try? Say "Hey Siri Play faded song" or "Hey Siri Pause the song"
      </div>
      <audio ref={audioRef} src="/music/siri.mp3" />
    </div>
  );
}

interface ImageProps {
  isPlaying: boolean;
  onClick: () => void;
}

export function Image({ isPlaying, onClick }: ImageProps) {
  return (
    <img
      src={isPlaying ? "/img/ui/siri-motion.gif" : "/img/ui/siri-still.jpeg"}
      className="w-[50%] max-w-[200px] h-auto"
      alt="Siri"
      onClick={onClick}
    />
  );
}
