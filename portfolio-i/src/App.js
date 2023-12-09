import {Routes,Route} from 'react-router-dom'

// components
import Header from "./components/Header"

// pages
import Home from "./pages/Home"

// css
import './assets/css/index.css'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
