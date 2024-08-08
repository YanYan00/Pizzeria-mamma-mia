import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Navbar.css'

const Navbar = () => {
    const total = 25000;
    const token = false;
    return (
      <div className='navbar'>
        <div className='nav-left'>
          <h4>Pizzería Mamma Mia!</h4>
          <Button className='botonNav'>🍕 Home</Button>
          {token ? (
            <>
              <Button className='botonNav'>🔓 Profile</Button>
              <Button className='botonNav'>🔒 Logout</Button>
            </>
          ) : (
            <>
              <Button className='botonNav'>🔐 Login</Button>
              <Button className='botonNav'>🔐 Register</Button>
            </>
          )}
        </div>
        <Button className='botonNav carro'>🛒 Total: ${total.toLocaleString()}</Button>
      </div>
    );
}

export default Navbar