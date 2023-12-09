import { useSelector } from "react-redux"

// actions from slices
import {selectIsLightMode,selecteTheme} from '../features/nav/navSlice'

// my image
import lightImage from '../assets/images/addis-1.jpg'
import darkImage from '../assets/images/addis-2.jpg'


import { GiSkills } from "react-icons/gi"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { MdContactPhone } from "react-icons/md"

const Home = () => {
  // sates from slices
  const isLightMode = useSelector(selectIsLightMode)
  const theme = useSelector(selecteTheme)

  const {light,dark} = theme

  const pageTheme = isLightMode ? light : dark 
  
  return (
    <div className="main-home-container" style={{transition: '1s',background: pageTheme.bbc}}>
      <div className="sub-container home">
        <div className="home-con">
          <div className="about-me">
            <h3>Hi, I'm</h3>
            <h1>Haddis Fanta</h1>
            <h3>Frontend and Backend Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae cum saepe nesciunt distinctio iure libero ullam fugit eos ad, vel quis laboriosam! Quos a omnis vitae vero facilis quam sapiente placeat quibusdam ullam quia maxime dicta doloribus illum esse magnam quo deserunt quod repellendus asperiores, voluptatibus facere aut quas ipsa temporibus! Recusandae, sapiente molestiae veniam eaque eligendi minima quidem eveniet autem voluptatibus atque laborum distinctio cum itaque numquam iure commodi, ex nemo ipsum aperiam et delectus libero perferendis nam? Minima esse veniam harum, error debitis tenetur iste quos atque placeat cupiditate excepturi fugiat saepe quidem odit molestiae inventore deserunt.</p>
          </div>
          <div className="image-con">
              <div></div>
              {
                true
                ?
                <img src={lightImage} alt="" />
                :
                <img src={darkImage} alt="" />
              } 
            
          </div>
        </div>
        <div className="skills-container">
          <h3><GiSkills className="icon"/>SKills</h3>
          <div className="skill-list">
            <div className="frontend">
              <h4>Frotend</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eos nemo beatae ea voluptatem magni, deserunt assumenda similique porro dicta dolorem nesciunt non et magnam animi in excepturi quos explicabo eligendi voluptatum dolor incidunt aliquid maiores possimus. Maiores optio similique perspiciatis ad, veniam tempora unde id dolore dignissimos cupiditate vero!
              </p>
            </div>
            <div className="frontend">
              <h4>Backed</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eos nemo beatae ea voluptatem magni, deserunt assumenda similique porro dicta dolorem nesciunt non et magnam animi in excepturi quos explicabo eligendi voluptatum dolor incidunt aliquid maiores possimus. Maiores optio similique perspiciatis ad, veniam tempora unde id dolore dignissimos cupiditate vero!
              </p>
            </div>
            <div className="frontend">
              <h4>UI/UX Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eos nemo beatae ea voluptatem magni, deserunt assumenda similique porro dicta dolorem nesciunt non et magnam animi in excepturi quos explicabo eligendi voluptatum dolor incidunt aliquid maiores possimus. Maiores optio similique perspiciatis ad, veniam tempora unde id dolore dignissimos cupiditate vero!
              </p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <h3><AiOutlineFundProjectionScreen className="icon"/>Projects</h3>
          <div className="project-list">
            <div className="con-1">
              <h3>ishare</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis iusto voluptatibus, unde illo libero dicta, vel voluptatum beatae mollitia, architecto nam a dolor sapiente. Repudiandae qui aliquid quidem, hic vel, animi ipsum quam eveniet dolorum voluptate amet dolore quis laborum corporis officia quae voluptatem placeat optio cumque magni! Sapiente cum ea nobis saepe quaerat. Ipsa animi rerum perspiciatis. Sapiente aliquam optio maiores veritatis laborum, modi sint odit voluptas. Aperiam in, esse quo architecto enim possimus! Dignissimos pariatur aut voluptatem aspernatur? Labore tempore placeat esse totam doloribus reiciendis impedit molestiae dolor quibusdam, nobis, tempora maiores excepturi deleniti. Dolore, dolores ipsa.
              </p>
            </div>
            <div className="con-1">
              <h3>gabiSTORE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis iusto voluptatibus, unde illo libero dicta, vel voluptatum beatae mollitia, architecto nam a dolor sapiente. Repudiandae qui aliquid quidem, hic vel, animi ipsum quam eveniet dolorum voluptate amet dolore quis laborum corporis officia quae voluptatem placeat optio cumque magni! Sapiente cum ea nobis saepe quaerat. Ipsa animi rerum perspiciatis. Sapiente aliquam optio maiores veritatis laborum, modi sint odit voluptas. Aperiam in, esse quo architecto enim possimus! Dignissimos pariatur aut voluptatem aspernatur? Labore tempore placeat esse totam doloribus reiciendis impedit molestiae dolor quibusdam, nobis, tempora maiores excepturi deleniti. Dolore, dolores ipsa.
              </p>
            </div>
          </div>
        </div>
        <div className="contact-container">
          <h3><MdContactPhone className="icon"/>Contact Me</h3>
          <ul className="contact-link">
            <li>
              <a href="">Email</a>
            </li>
            <li>
              <a href="">Phone</a>
            </li>
            <li>
              <a href="">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
