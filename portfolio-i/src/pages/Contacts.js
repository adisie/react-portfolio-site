import {NavLink} from 'react-router-dom'
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"

const Contacts = () => {
  return (
    <div className="contacts-con">
      <h3>Contacts</h3>
      <div className="contacts-list">
        <ul>
            <li>
                <NavLink className='link'><FaPhone className='icon'/>Phone: +251923996736</NavLink>
            </li>
            <li>
                <NavLink className='link'><MdEmail className='icon'/>Email: adisiefenta23@gmail.com</NavLink>
            </li>
        </ul>
        <div className="links">
        <NavLink className='social-link'><FaGithubSquare className='icon'/></NavLink>
        <NavLink className='social-link'><FaLinkedin className='icon'/></NavLink>
        <NavLink className='social-link'><FaTelegram className='icon'/></NavLink>
        <NavLink className='social-link'><FaFacebook className='icon'/></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Contacts
