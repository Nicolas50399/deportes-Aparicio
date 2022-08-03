import React from 'react';
import { useContext } from 'react';
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../AppContext';
import "./CartWidget.css"

function CartWidget() {
    const { cantidadTotalItems } = useContext(CartContext);
    let navigate = useNavigate();
  return (
    <div className='countCarrito'>
        <BsCart3 className='carritoCompras' onClick={() => {navigate("/cart")}} />
        {(cantidadTotalItems() > 0) ? <h2>{cantidadTotalItems()}</h2> : <></>}
        
    </div>
  )
}

export default CartWidget