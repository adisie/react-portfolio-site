import { GoGear } from "react-icons/go"

// skills
import Spinner from "./sub-pages/skills/Spinner"
import FormValidation from "./sub-pages/skills/FormValidation"
import ThemeSwitcher from "./sub-pages/skills/ThemeSwitcher"

const Skills = () => {
    return ( 
        <div className="skills-con">
            <h3><GoGear className="case-icon"/>Show Cases</h3>
            <div className="skill-list">
                <Spinner />
                <FormValidation />
                <ThemeSwitcher />
            </div>
        </div>
     );
}
 
export default Skills;