import React from 'react'
import './CardPizza.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const CardPizza = ({imagen,tipo_pizza,ingredientes,precio}) => {
  return (
    <>
      <div className='cardPizza'>
        <img src={imagen} alt="imagen de pizza"/>
        <h5>Pizza {tipo_pizza}</h5>
        <div className='info-pizza'>
          <h6>Ingredientes:</h6>
          <p>🍕 {ingredientes}</p>
          <h3>Precio: ${precio.toLocaleString()}</h3>
          <div className='botones'>
            <Button id='boton1'>Ver Más 👀</Button>
            <Button id='boton2'>Añadir 🛒</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPizza