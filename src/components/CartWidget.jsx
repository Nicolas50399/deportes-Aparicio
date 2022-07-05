import React from 'react';
import { useContext } from 'react';
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../AppContext';
import "./CartWidget.css"

function CartWidget() {
    const { cant } = useContext(CartContext);
    let navigate = useNavigate();
  return (
    <div className='countCarrito'>
        <BsCart3 className='carritoCompras' onClick={() => {navigate("/cart")}} />
        {(cant > 0) ? <h2>{cant}</h2> : <></>}
        
    </div>
  )
}

export default CartWidget