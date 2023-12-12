import { GoGear } from "react-icons/go"

const Skills = () => {
    return ( 
        <div className="skills-con">
            <h3><GoGear className="case-icon"/>Show Cases</h3>
            <div className="skill-list">
                <div className="skill spinner-con">
                    <h4>Spinner</h4>
                    <div className="spinner">
                        <div className="ring">
                        </div>
                        <div className="ring-2">    
                        </div>
                        <div className="ring-3">  
                        </div>
                        <span>loading...</span>
                    </div>
                </div>
                <div className="skill">
                    <h4>Form  Validation</h4>
                    <div className="spinner">
                        <div className="ring">
                            loading
                        </div>
                    </div>
                </div>
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