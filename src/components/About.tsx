import { AiOutlineHtml5 } from "react-icons/ai";
import profile from "../assets/selfie2.jpg";
import {
  SiJavascript,
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
          <p>
            I’m Ayomide Omotosho, a Nigerian American software developer. When
            I’m not coding, I play bass and play/watch video games and anime. I
            also love reading books and would appreciate any recommendations you
            have! I’m passionate about learning and use a “learn by doing”
            approach for most of my projects.
          </p>
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
          </ul>
        </div>
        <div className="right-content">
          {/* <img src="src/assets/selfie.jpg" /> */}
          <img src={profile} />
        </div>
      </div>
    </div>
  );
}
