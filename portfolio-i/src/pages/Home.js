
// pages
import Me from "./Me"
import Services from "./Services"
import Skills from "./Skills"
import Projects from "./Projects"

const Home = () => {
  return (
    <div className="home-container">
      <div className="sub-container home-con">
        <Me />
        <Services />
        <Skills />
        <Projects />
      </div>
    </div>
  )
}

export default Home
