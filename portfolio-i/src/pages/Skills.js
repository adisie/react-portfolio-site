import { GoGear } from "react-icons/go"

// skills
import Spinner from "./sub-pages/skills/Spinner"
import FormValidation from "./sub-pages/skills/FormValidation"

const Skills = () => {
    return ( 
        <div className="skills-con">
            <h3><GoGear className="case-icon"/>Show Cases</h3>
            <div className="skill-list">
                <Spinner />
                <FormValidation />
                <div className="skill">
                    <h4>Theme Swithcer</h4>
                    <div className="spinner">
                        <div className="ring">
                            ring
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <h4>Responsive Design</h4>
                    <div className="spinner">
                        <div className="ring">
                            ring
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;