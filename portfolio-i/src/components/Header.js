import {NavLink} from 'react-router-dom'

// my image
import myProfileImage from '../assets/images/haddis_23.jpg'

const Header = () => {
  // functions
  const styleActiveLink = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }

  return (
    <header>
      <div className="sub-container header">
        <div className="site-logo">
          <NavLink to='/' className='home-link'>addisPictures</NavLink>
        </div>
        <nav className="navigations">
          <ul>
            <li>
              <NavLink to='/' className='link' style={styleActiveLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/skills' className='link' style={styleActiveLink}>Skills</NavLink>
            </li>
            <li>
              <NavLink to='/projects' className='link' style={styleActiveLink}>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className='link' style={styleActiveLink}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="user-container">
          <span className='username-spane'><span className='first-name'>Addis</span> <span className='last-name'>Fanta</span></span>
          <img src={myProfileImage} alt="my-profile" className='profile-img'/>
        </div>
      </div>
    </header>
  )
}

export default Header
