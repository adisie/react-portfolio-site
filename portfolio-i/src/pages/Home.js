
// pages
import Me from "./Me"
import Services from "./Services"
import Skills from "./Skills"

const Home = () => {
  return (
    <div className="home-container">
      <div className="sub-container home-con">
        <Me />
        <Services />
        <Skills />
      </div>
    </div>
  )
}

export default Home
