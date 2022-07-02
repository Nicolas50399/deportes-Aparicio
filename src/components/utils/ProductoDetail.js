import React, { useContext } from 'react'
import ProductoCount from '../ProductoCount';
import "../ProductoDetailContainerStyle.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../App';
import productos from './productos';


export function ProductoDetail({nombre, descripcion, imagen, precio, stock, id}) {
  const { cart, addProduct } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false)
  const [cant, setCant] = useState(0);
  let navigate = useNavigate();
  return (
    <div className={"producto"}>
            <h2 className="nombreProducto">{nombre}</h2>
            <p className="descripcionProducto">{descripcion}</p>
            <img src={imagen} alt="IMG"/>
            <h4 className="precioProducto">$ {precio}</h4>



            {agregado? <button className='button1' onClick={() => {
              navigate("/cart")
              console.log(cart)
            }}>Ir al carrito</button> : 
            <>
            <ProductoCount stock={stock} precio={precio} setCant={setCant} />
            <button className='button2' onClick={
              () => {
                console.log("agregado")
                setAgregado(true)
                addProduct(productos[id-1], cant)
              }
            }>Agregar al carrito</button>
            </>}
            
            
        </div>
  )
}

export default ProductoDetail;