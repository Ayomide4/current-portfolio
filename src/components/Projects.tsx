import { useState } from "react";
import "../styles/_projects.scss";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiMore2Fill } from "react-icons/ri";
import { AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";

export default function Projects() {
  const [toggle, setToggle] = useState(false);
  const [toggleChat, setToggleChat] = useState(false);
  const toggleOverlay = () => {
    setToggle((prev) => !prev);
  };

  const toggleChatOverlay = () => {
    setToggleChat((prev) => !prev);
  };

  const bugDescription =
    "A bug tracker app that allows users to create, edit, and delete bugs. Users can also assign bugs to other users and change the status of the bug. The app uses React, Typescript, Tailwind, Node, Express, and MongoDB.";

  const chatDescription =
    "A chat app that allows users to create an account, login, and chat with other users. The app uses React Native, Expo, and Firebase.";
  return (
    <div className="project-page" id="projects">
      <div className="project-width">
        <h1>
          <span>02.</span>Projects
        </h1>

        <div className="project-grid">
          <div className="project-item">
            <div className="project ">
              {toggle && (
                <div className="overlay">
                  <div>
                    <p>{bugDescription}</p>
                  </div>
                </div>
              )}

              <div
                className={`${toggle ? "noHoverBugTracker" : "bug-tracker"}`}
              ></div>
            </div>
            <div className="subtitle">
              <div className="subtitle-left">
                <a>
                  <h3>Bug Tracker</h3>
                  <BsBoxArrowUpRight className="box" size={20} color="white" />
                </a>
                <a href="https://github.com/Ayomide4/bug-tracker">
                  <AiOutlineGithub className="github" size={24} color="white" />
                </a>
                <a href="https://youtu.be/5pqGUTb2sDg">
                  <AiOutlineYoutube
                    className="youtube"
                    size={24}
                    color="white"
                  />
                </a>
              </div>
              <RiMore2Fill
                className="more"
                size={20}
                color="white"
                onClick={toggleOverlay}
              />
            </div>
          </div>
          <div className="project-item ">
            <div className="project ">
              {toggleChat && (
                <div className="overlay">
                  <div>
                    <p>{chatDescription}</p>
                  </div>
                </div>
              )}
              <div className={`${toggleChat ? "noHoverLogin" : "login"}`}></div>
            </div>

            <div className="subtitle">
              <div className="subtitle-left">
                <a href="https://expo.dev/@ayo44/messaging-app">
                  <h3>Chat App</h3>
                  <BsBoxArrowUpRight className="box" size={20} color="white" />
                </a>
                <a href="https://github.com/Ayomide4/current-portfolio">
                  <AiOutlineGithub className="github" size={24} color="white" />
                </a>
                <a href="https://youtu.be/LpTWzOdj_rM">
                  <AiOutlineYoutube
                    className="youtube"
                    size={24}
                    color="white"
                  />
                </a>
              </div>
              <RiMore2Fill
                className="more"
                size={20}
                color="white"
                onClick={toggleChatOverlay}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
