import { HiMiniMoon } from "react-icons/hi2"
import { BsFillSunFill } from "react-icons/bs"

import {useSelector,useDispatch} from 'react-redux'
import {selectTheme,selectIsLightTheme,themeSwitcher} from '../../../features/theme/themeSlice'

const ThemeSwitcher = () => {
  const theme = useSelector(selectTheme)
  const isLightTheme = useSelector(selectIsLightTheme)
  const {light,dark} = theme
  const pageTheme = isLightTheme ? light : dark 

  const dispatch = useDispatch()

  return (
    <div className="skill theme-con">
        <h4>Theme Swithcer</h4>
        <div className="template">
            <div className="template-header" style={{background: pageTheme.hbgc,transition: '1s'}}>
                <div className="site-logo" style={{color: pageTheme.htc,transition: '1s'}}>addisPictures</div>
                <div className="controllers">
                  <span style={{color: pageTheme.htc,transition: '1s'}}>{isLightTheme ? <>light mode</> : <>dark mode</>}</span>
                <button onClick={()=>dispatch(themeSwitcher())} style={{color: pageTheme.htc,transition: '1s'}}>{ isLightTheme ? <HiMiniMoon /> : <BsFillSunFill />}</button>
                </div>
            </div>
            <div className="template-content" style={{background: pageTheme.bbgc,transition: '1s'}}>
                <div className="left cont-lr" style={{background: pageTheme.hbgc,transition: '1s'}}>
                  <h5 style={{color: pageTheme.htc,transition: '1s'}}>Frontend</h5>
                  <p style={{color: pageTheme.htc,transition: '1s'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur voluptatem quas magnam ut dignissimos vitae! Ullam nobis perferendis deserunt id iure dolore quas vero expedita nisi reiciendis? Voluptates, quod. Dicta, architecto!
                  </p>
                </div>
                <div className="right cont-lr" style={{background: pageTheme.hbgc,transition: '1s'}}>
                  <h5 style={{color: pageTheme.htc,transition: '1s'}}>Backend</h5>
                  <p style={{color: pageTheme.htc,transition: '1s'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur voluptatem quas magnam ut dignissimos vitae! Ullam nobis perferendis deserunt id iure dolore quas vero expedita nisi reiciendis? Voluptates, quod. Dicta, architecto!
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThemeSwitcher
