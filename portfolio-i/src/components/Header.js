
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
            <a className='home-link' href ='#home' style={{color: pageTheme.htc,transition: '1s'}}><span>addis</span><span>pictures</span></a>
          </div>
          <nav className="navigations">
            <ul>
              <li>
                <a className='link' href ='#home' style={{color: pageTheme.htc,transition: '1s'}}><MdHome className='icon'/>Home</a>
              </li>
              <li>
                <a className='link' href ='#skills' style={{color: pageTheme.htc,transition: '1s'}}><GiSkills className='icon'/>Skiless</a>
              </li>
              <li>
                <a className='link' href ='#projects' style={{color: pageTheme.htc,transition: '1s',}}><AiOutlineFundProjectionScreen className='icon'/>Projects</a>
              </li>
              <li>
                <a className='link' href ='#contact' style={{color: pageTheme.htc,transition: '1s',}}><MdContactPhone className='icon'/>Contact</a>
              </li>
            </ul>
          </nav>
          <div className="swithcer">
            <button onClick={themeSwitcher} style={{color: pageTheme.htc,transition: '1s'}}>{isLightMode ? <MdNightlight /> : <MdOutlineWbTwilight />}</button>
            <a className='contact-link' style={{color: pageTheme.htc,transition: '1s',border: `.15em solid ${pageTheme.hbordc}`}}>Contact</a>
          </div>
        </div>
    </header>
  )
}

export default Header
