import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-me",
        title: "intro.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Akash. I am a Btech student at the Computer Science and
              Engineering department of MBM University.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "MERN Stack / Open Source Contribution  / full stack developement"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm looking for a SDE internship. I'm open to collaboration on full stack projects."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:aakash6263264@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                aakash6263264@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/aakashsharma003"
                target="_blank"
                rel="noreferrer"
              >
                @aakashsharma
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/aakashsharma003"
                target="_blank"
                rel="noreferrer"
              >
                akash-sharma
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://aakash-sharma.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                https://aakash-sharma.vercel.app
              </a>
            </li>
            <li>
              X:{" "}
              <a
                className="text-blue-300"
                href="https://x.com/aakashsharma003"
                target="_blank"
                rel="noreferrer"
              >
               find me on x.com
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
