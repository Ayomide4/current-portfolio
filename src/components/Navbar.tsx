import "../styles/_navbar.scss";
import { Link, animateScroll as scroll } from "react-scroll";
export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
        <div className="elements">
          <h2 className="home" onClick={() => scroll.scrollToTop()}>
            Home
          </h2>
          <ul className="nav-items">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className="nav-element">
                <span>01.</span> About
              </li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className="nav-element">
                <span>02.</span> Projects
              </li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            ></Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
