import '../styles/_navbar.scss'
import  {Routes, Route, useNavigate} from 'react-router-dom';
export default function Navbar() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/')
  }


  return (
    <div className="navbar-container">
      <nav>
        <div className="elements">
          <h2 className="home">Home</h2>
          <ul className="nav-items">
            <li className="nav-element"><span>01.</span> About</li>
            <li className="nav-element"><span>02.</span> Projects</li>
            <li className="nav-element"><span>03.</span> Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}