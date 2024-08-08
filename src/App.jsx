import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Home from './componentes/Home/Home'
import Footer from './componentes/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='cont'>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default App
