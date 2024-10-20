import "../styles/_navbar.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as Redirect, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isBlogPostPage = location.pathname.startsWith("/blog/");

  return (
    <div className="navbar-container">
      <nav>
        <div className="elements">
          <Redirect to="/">
            <h2 className="home" onClick={() => scroll.scrollToTop()}>
              Home
            </h2>
          </Redirect>
          <ul className="nav-items">
            {!isBlogPostPage && (
              <>
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
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <li className="nav-element">
                    <span>03.</span> Blog
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
