import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Blog />
              </>
            }
          />
          <Route path="/blog/1" element={<BlogPost />} />
        </Routes>
      </Router>{" "}
    </>
  );
}

export default App;
