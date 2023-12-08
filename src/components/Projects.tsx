import { useState } from "react";
import "../styles/_projects.scss";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiMore2Fill } from "react-icons/ri";
import { AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";
import bugImage from "../assets/bug-tracker-img.png";
import chatImage from "../assets/login.png";
import typingImage from "../assets/geckotype.png";
import discord from "../assets/discord.png";

export default function Projects() {
  const [toggle] = useState(false);
  const [toggleChat, setToggleChat] = useState(false);

  const [projectItems, setProjectItems] = useState([
    {
      index: 0,
      show: false,
      title: "Bug Tracker",
      description:
        "A bug tracker app that allows users to create, edit, and delete bugs. Users can also assign bugs to other users and change the status of the bug. The app uses React, Typescript, Tailwind, Node, Express, and MongoDB.",
      link: "https://bug-frontend-oj63.onrender.com",
      youtube: "https://youtu.be/5pqGUTb2sDg",
      github: "https://github.com/Ayomide4/bug-tracker",
      image: bugImage,
    },

    {
      index: 1,
      show: false,
      title: "geckotype",
      description:
        "a speed typing website that allows you to track your stats over time.",
      link: "https://ayomide4.github.io/geckotype/",
      youtube: "",
      github: "https://github.com/Ayomide4/geckotype",
      image: typingImage,
    },

    {
      index: 2,
      show: false,
      title: "Discord Clone",
      description:
        "Full stack discord clone with voice/video chat using React, TypeScript, Vite and spring boot",
      link: "",
      github: "https://github.com/Ayomide4/discord-clone",
      youtube: "",
      image: discord,
    },
  ]);

  console.log(projectItems);

  const toggleOverlay = (projectIndex: number) => {
    setProjectItems((prevItems) => {
      return prevItems.map((prevItem) => {
        if (prevItem.index === projectIndex) {
          return {
            ...prevItem,
            show: !prevItem.show,
          };
        }
        return prevItem;
      });
    });
  };

  const toggleChatOverlay = () => {
    setToggleChat((prev) => !prev);
  };

  const chatDescription =
    "A chat app that allows users to create an account, login, and chat with other users. The app uses React Native, Expo, and Firebase.";

  const projectItem = projectItems.map((item, projectIndex) => {
    return (
      <div className="project-item" key={projectIndex}>
        <div className="project ">
          {item.index === projectIndex && item.show ? (
            <div className="overlay">
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          ) : null}

          <div className={`${toggle ? "noHoverBugTracker" : "bug-tracker"}`}>
            <img src={item.image} alt="bug-tracker" />
          </div>
        </div>
        <div className="subtitle">
          <div className="subtitle-left">
            <a href={item.link}>
              <h3>{item.title}</h3>
              <BsBoxArrowUpRight className="box" size={20} color="white" />
            </a>
            <a href={item.github}>
              <AiOutlineGithub className="github" size={24} color="white" />
            </a>
            <a href={item.youtube}>
              <AiOutlineYoutube className="youtube" size={24} color="white" />
            </a>
          </div>
          <RiMore2Fill
            className="more"
            size={20}
            color="white"
            onClick={() => toggleOverlay(projectIndex)}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="project-page" id="projects">
      <div className="project-width">
        <h1>
          <span>02.</span>Projects
        </h1>

        <div className="project-grid">
          {projectItem}
          <div className="project-item ">
            <div className="project ">
              {toggleChat && (
                <div className="overlay">
                  <div>
                    <p>{chatDescription}</p>
                  </div>
                </div>
              )}
              <div className={`${toggleChat ? "noHoverLogin" : "login"}`}>
                <img src={chatImage} alt="chat" />
              </div>
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
