import '../styles/_projects.scss'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {VscGithubAlt} from 'react-icons/vsc'

export default function Projects() {
  return (
    <div className='project-page'>
      <div className="project-width">
        <h1><span>02.</span>Projects</h1>

        <div className='project-grid'>
          
          <div className="project-item">
            <div className='project '>
              <div className='bug-tracker'></div>
            </div>
            <div className='subtitle'>
              <h3>Bug Tracker</h3>
              <BsBoxArrowUpRight className="box" size={20} color="white"/>
            </div>
          </div>
          <div className="project-item">
            <div className='project'></div>
            <h3></h3>
          </div>
          <div className="project-item">
            <div className='project'></div>
            <h3></h3>
          </div>
          <div className="project-item">
            <div className='project'></div>
            <h3></h3>
          </div>

        </div>
      </div>
    </div>
  )
}
