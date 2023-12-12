import { FaCode } from "react-icons/fa"
import {NavLink} from 'react-router-dom'

const Projects = () => {
  return (
    <div className="projects-con">
      <h3> <FaCode className="project-icon" />Projects</h3>
      <div className="project-list">
        <div className="project ishare">
            <h4>ISHARE</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis laboriosam expedita voluptatum eos quibusdam maiores ratione voluptatem dignissimos illo exercitationem a dolorum ex, provident assumenda explicabo neque aut tempore excepturi voluptate?</p>
            <div className="btn-container">
                <NavLink className='project-link'><span></span>View Project</NavLink>
            </div>
        </div>
        <div className="project gabi-store">
            <h4>GABI-STORE</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis laboriosam expedita voluptatum eos quibusdam maiores ratione voluptatem dignissimos illo exercitationem a dolorum ex, provident assumenda explicabo neque aut tempore excepturi voluptate?</p>
            <button>on going project</button>
        </div>
      </div>
    </div>
  )
}

export default Projects
