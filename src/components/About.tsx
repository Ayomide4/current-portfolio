import { AiOutlineHtml5 } from "react-icons/ai";
import profile from "../assets/profile-image.jpg";
import {
  SiJavascript,
  SiMysql,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaNodeJs, FaCss3 } from "react-icons/fa";
import "../styles/_about.scss";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="content-container">
        <div className="left-content">
          <h1>
            <span>01.</span> About Me
          </h1>

          <div className="text-container">
            <p>
              My name is Ayomide Omotosho and I'm a Nigerian-American software
              developer with a passion for coding and learning by doing.
            </p>
            <br />
            <p>
              Outside of programming, I enjoy playing bass, gaming, and diving
              into a good book. I’m always open to new book recommendations!
            </p>
            <br />
          </div>

          <h2>Technologies I know:</h2>
          <ul className="grid-container">
            <div className="grid-item">
              <AiOutlineHtml5 size={36} />
              <li>HTML</li>
            </div>
            <div className="grid-item">
              <FaCss3 size={36} />
              <li>CSS</li>
            </div>
            <div className="grid-item">
              <SiJavascript size={36} />
              <li>Javascript</li>
            </div>
            <div className="grid-item">
              {" "}
              <SiTypescript size={36} />
              <li>Typescript</li>
            </div>
            <div className="grid-item">
              <SiMongodb size={36} />
              <li>MongoDB</li>
            </div>
            <div className="grid-item">
              <FaNodeJs size={36} />
              <li>Node</li>
            </div>
            <div className="grid-item">
              <SiExpress size={36} />
              <li>Express</li>
            </div>
            <div className="grid-item">
              <SiReact size={36} />
              <li>React</li>
            </div>
            <div className="grid-item">
              <SiSass size={36} />
              <li>SASS</li>
            </div>
            <div className="grid-item">
              <SiTailwindcss size={36} />
              <li>Tailwind</li>
            </div>
            <div className="grid-item">
              <SiReact size={36} />
              <li className="native-text">React Native</li>
            </div>
            <div className="grid-item">
              <DiJava size={36} />
              <li>Java</li>
            </div>
            <div className="grid-item">
              <SiPython size={36} />
              <li>Python</li>
            </div>
            <div className="grid-item">
              <SiMysql size={36} />
              <li>MySql</li>
            </div>
          </ul>
        </div>
        <div className="right-content">
          {/* <img src="src/assets/selfie.jpg" /> */}
          <img className="profile-image" src={profile} />
        </div>
      </div>
    </div>
  );
}
