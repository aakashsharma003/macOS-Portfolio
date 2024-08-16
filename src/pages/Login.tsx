import React from "react";
import { wallpapers, user } from "~/configs";
import type { MacActions } from "~/types";
import moment from "moment"

export default function Login(props: MacActions) {
  const [password, setPassword] = useState("");
  const [sign, setSign] = useState("Press enter to login");
  const dark = useStore((state) => state.dark);
  const [isloginOpen, setIsLoginOpen] = useState(false);
   const [time, setTime] = useState(moment().format('h:mm A'));
  const [date, setDate] = useState(moment().format('dddd, MMMM D'));

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(moment().format("h:mm A"));
        setDate(moment().format('dddd, MMMM D'));
      }, 1000);

      return () => clearInterval(interval);
    }, []);

  const keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key;
    if (keyCode === "Enter" || keyCode === "Space" || keyCode === "Tab") props.setLogin(true);
  
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  // const loginHandle = () => {
  //   if (user.password === password) {
  //     // not set password or password correct
  //     props.setLogin(true);
  //   } else {
  //     // password not null and incorrect
  //     setSign("Incorrect password");
  //   }
  // };

  return (
    <div
      className="size-full login text-center "
      style={{
        background: `url(${
          dark ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`,
      }}
      onClick={() => setIsLoginOpen(true)}
    >
      {isloginOpen && (
        <div
          className="size-full absolute bg-gray-900/20 backdrop-blur-2xl"
          onKeyDown={keyPress}
        >
          <div className="inline-block w-auto relative top-1/2 -mt-40 ">
            {/* Avatar */}
            <img
              className="rounded-full size-24 my-0 mx-auto"
              src={user.avatar}
              alt="img"
            />
            <div className="font-semibold mt-2 text-xl text-white">
              {user.name}
            </div>

            {/* Password Input */}
            <div className="flex justify-center item-center">
              <button
                className="text-sm text-white no-outline bg-transparent flex justify-center items-center rounded-md backdrop-blur-2xl bg-gray-300/50 p-2 mt-2"
                onClick={(e) => {e.stopPropagation();props.setLogin(true);}}
                onKeyDown={keyPress}
              >
                login
              </button>
            </div>
          </div>

          {/* buttons */}
          <div className="text-sm fixed bottom-16 inset-x-0 mx-auto flex flex-row space-x-4 w-max">
            <div
              className="hstack flex-col text-white w-24 cursor-pointer"
              onClick={(e) => props.sleepMac(e)}
            >
              <div className="flex-center size-10 bg-gray-700 rounded-full">
                <span className="i-gg:sleep text-[40px]" />
              </div>
              <span>Sleep</span>
            </div>
            <div
              className="hstack flex-col text-white w-24 cursor-pointer"
              onClick={(e) => props.restartMac(e)}
            >
              <div className="flex-center size-10 bg-gray-700 rounded-full">
                <span className="i-ri:restart-line text-4xl" />
              </div>
              <span>Restart</span>
            </div>
            <div
              className="hstack flex-col text-white w-24 cursor-pointer"
              onClick={(e) => props.shutMac(e)}
            >
              <div className="flex-center size-10 bg-gray-700 rounded-full">
                <span className="i-ri:shut-down-line text-4xl" />
              </div>
              <span>Shut Down</span>
            </div>
          </div>
        </div>
      )}
      {!isloginOpen && (
        <div className="size-full flex flex-col justify-between items-center p-5 font-sans font-bold">
          <div className="text-white text-8xl font-thin">{time}</div>
          <div mt-2 cursor-pointer text="sm gray-200">
            Click to start
          </div>
        </div>
      )}
    </div>
  );
}
