import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { IconContext } from "react-icons";


export default function Home() {
  return (
    <div className="home-container">
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
          <AiOutlineLinkedin size={40} className="linkedin"/>
          <AiOutlineGithub size={40} className="github"/>
        </div>
      </IconContext.Provider>
    </div>
  );
}
