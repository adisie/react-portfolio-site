import {Routes,Route} from 'react-router-dom'

// pages
import Home from './pages/Home'

// components
import Header from './components/Header'

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
