import React, { useState } from 'react'
import './Home.css'
import Header from '../Header/Header'
import CardPizza from '../CardPizza/CardPizza'
import { pizzaCart } from "../../pizzas.js"

const Home = () => {
  const [pizzas, setPizzas] = useState(pizzaCart);
  return (
    <>
      <Header />
      <div className='cards'>
        {pizzas.map((pizza, index) => (
          <CardPizza pizza={pizza} key={index} />
        ))}
      </div>
    </>
  )
}

export default Home