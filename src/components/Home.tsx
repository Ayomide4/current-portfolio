import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BiFileBlank } from "react-icons/bi";
import { IconContext } from "react-icons";
import pdf from "../assets/Resume 2023.pdf";

export default function Home() {
  return (
    <div className="home-container" id="home">
      <div className="text-container">
        <h2>
          I'm a software engineer who is passionate about creating great
          products and loves learning new things.
        </h2>
        <div className="hero-title">
          <h1>
            My name is <span>Ayo Omotosho</span>
          </h1>
          <h1> Front End Developer</h1>
        </div>
      </div>
      <h2 className="email">aomotosho4@gmail.com</h2>
      <IconContext.Provider
        value={{ color: "white", className: "global-class-name" }}
      >
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/ayomide-omotosho-2069b7198/">
            <AiOutlineLinkedin size={40} className="linkedin" />
          </a>
          <a href="https://github.com/Ayomide4">
            <AiOutlineGithub size={40} className="github" />
          </a>
          <a href={pdf}>
            <BiFileBlank size={40} className="resume" />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
}
