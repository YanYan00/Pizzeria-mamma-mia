import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import CardPizza from '../CardPizza/CardPizza'

const Home = () => {
  return (
    <>
        <Header></Header>
        <div  className='cards'>
          <CardPizza 
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            tipo_pizza="Napolitana" 
            ingredientes={["mozzarella,", "tomates,", "jamón,", "orégano."]}
            precio={5950}
          ></CardPizza>
          <CardPizza 
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
            tipo_pizza="Española" 
            ingredientes={["mozzarella,", "gorgonzola,", "parmesano,", "provolone."]}
            precio={6950}
          ></CardPizza>
          <CardPizza 
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
            tipo_pizza="Pepperoni" 
            ingredientes={["mozzarella,", "pepperoni,", "orégano."]}
            precio={6950}
          ></CardPizza>
        </div>
    </>
  )
}

export default Home