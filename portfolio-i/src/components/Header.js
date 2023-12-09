import {NavLink} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'

// actions from slices
import {
  selectIsLightMode,
  selecteTheme,
  switchTheme,
} from '../features/nav/navSlice'

// icons
import { MdHome } from "react-icons/md"
import { GiSkills } from "react-icons/gi"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { MdContactPhone } from "react-icons/md"

// light
import { MdOutlineWbTwilight } from "react-icons/md"
import { MdNightlight } from "react-icons/md"

const Header = () => {
  // sates from slices
  const isLightMode = useSelector(selectIsLightMode)
  const theme = useSelector(selecteTheme)

  const {light,dark} = theme

  const pageTheme = isLightMode ? light : dark 
  
  // dispatch
  const dispatch = useDispatch()

  // theme switcher
  const themeSwitcher = () => {
    dispatch(switchTheme())
  }
  
  return (
    <header style={{background: pageTheme.hbgc,color: pageTheme.htc,transition: '1s', borderBottom: `.15em solid ${pageTheme.hbordc}`}}>
        <div className="sub-container header">
          <div className="site-logo">
            <NavLink className='home-link' to ='#home' style={{color: pageTheme.htc,transition: '1s'}}><span>addis</span><span>pictures</span></NavLink>
          </div>
          {/* <nav className="navigations">
            <ul>
              <li>
                <NavLink className='link' to ='#home' style={{color: pageTheme.htc,transition: '1s'}}><MdHome className='icon'/>Home</NavLink>
              </li>
              <li>
                <NavLink className='link' to ='#skills' style={{color: pageTheme.htc,transition: '1s'}}><GiSkills className='icon'/>Skiless</NavLink>
              </li>
              <li>
                <NavLink className='link' to ='#projects' style={{color: pageTheme.htc,transition: '1s',}}><AiOutlineFundProjectionScreen className='icon'/>Projects</NavLink>
              </li>
              <li>
                <NavLink className='link' to ='#contact' style={{color: pageTheme.htc,transition: '1s',}}><MdContactPhone className='icon'/>Contact</NavLink>
              </li>
            </ul>
          </nav> */}
          <div className="swithcer">
            <button onClick={themeSwitcher} style={{color: pageTheme.htc,transition: '1s'}}>{isLightMode ? <MdNightlight /> : <MdOutlineWbTwilight />}</button>
            <NavLink className='contact-link' style={{color: pageTheme.htc,transition: '1s',border: `.15em solid ${pageTheme.hbordc}`}}>Contact</NavLink>
          </div>
        </div>
    </header>
  )
}

export default Header
