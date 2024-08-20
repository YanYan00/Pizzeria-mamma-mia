import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/Footer'
import CartPizza from './componentes/CartPizza/CartPizza'
//import Home from './componentes/Home/Home'
//import RegisterPage from './componentes/RegisterPage/RegisterPage'
//import LoginPage from './componentes/LoginPage/LoginPage'

function App() { 
  return (
    <div className='cont'>
      <Navbar></Navbar>
      {/*<Home></Home>*/}
      {/*<RegisterPage></RegisterPage>*/}
      {/*<LoginPage></LoginPage>*/}
      <CartPizza></CartPizza>
      <Footer></Footer>
    </div>
  )
}

export default App
