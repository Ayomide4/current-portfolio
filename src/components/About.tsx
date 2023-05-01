import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { FaNodeJs, FaCss3 } from "react-icons/fa";

export default function about() {
  return (
    <div className="about-container">
      <div className="content-container">
        <div className="left-content">
          <h1>
            <span>01.</span> About Me
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            est in ipsa quidem vero facere alias cum laborum earum cupiditate
            pariatur nulla asperiores nemo voluptate temporibus, non ullam
            itaque quas!
          </p>
          <h2>Technologies I know:</h2>
          <ul className="grid-container">
            <div className='grid-item'>
              <AiOutlineHtml5 size={36} />
              <li>HTML</li>
            </div>
            <div className='grid-item'>
              <FaCss3 size={36} />
              <li>CSS</li>
            </div>
            <div className='grid-item'>
              <SiJavascript size={36} />
              <li>Javascript</li>
            </div>
            <div className='grid-item'>
              <SiTypescript size={36} />
              <li>Typescript</li>
            </div>
            <div className='grid-item'>
              <SiMongodb size={36} />
              <li>MongoDB</li>
            </div>
            <div className='grid-item'>
              <FaNodeJs size={36} />
              <li>Node</li>
            </div>
            <div className='grid-item'>
              <SiExpress size={36} />
              <li>Express</li>
            </div>
            <div className='grid-item'>
              <SiReact size={36} />
              <li>React</li>
            </div>
            <div className='grid-item'>
              <SiSass size={36} />
              <li>SASS</li>
            </div>
            <div className='grid-item'>
              <SiTailwindcss size={36} />
              <li>Tailwind</li>
            </div>
          </ul>
        </div>
        <div className="right-content">
          <img src="https://images.unsplash.com/photo-1682821890455-044ea43d8b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
        </div>
      </div>
    </div>
  );
}
