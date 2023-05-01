import './styles/App.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
function App() {


  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Projects/>
    </>
  )
}

export default App
