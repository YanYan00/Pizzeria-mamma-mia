import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Home from './componentes/Home/Home'
import Footer from './componentes/Footer/Footer'
import RegisterPage from './componentes/RegisterPage/RegisterPage'
import LoginPage from './componentes/LoginPage/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='cont'>
      <Navbar></Navbar>
      {/*<Home></Home>*/}
      <RegisterPage></RegisterPage>
      {/*<LoginPage></LoginPage>*/}
      <Footer></Footer>
    </div>
  )
}

export default App
