import {NavLink} from 'react-router-dom'

// my image
import myProfileImage from '../assets/images/haddis_23.jpg'

const Header = () => {
  return (
    <header>
      <div className="sub-container header">
        <div className="site-logo">
          <NavLink to='/'>addisPictures</NavLink>
        </div>
        <nav className="navigations">
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/'>Services</NavLink>
            </li>
            <li>
              <NavLink to='/'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/'>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="user-container">
          <span>username</span>
          <img src={myProfileImage} alt="my-profile" style={{width: '38px'}}/>
        </div>
      </div>
    </header>
  )
}

export default Header
