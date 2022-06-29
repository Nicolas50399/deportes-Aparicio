import React from 'react'
import ProductoCount from '../ProductoCount';
import "../ProductoDetailContainerStyle.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

function ProductoDetail({nombre, descripcion, imagen, precio, stock}) {
  const [agregado, setAgregado] = useState(false)
  let navigate = useNavigate();
  return (
    <div className={"producto"}>
            <h2 className="nombreProducto">{nombre}</h2>
            <p className="descripcionProducto">{descripcion}</p>
            <img src={imagen} alt="IMG"/>
            <h4 className="precioProducto">$ {precio}</h4>



            {agregado? <button onClick={() => navigate("./cart")}>Terminar mi compra</button> : 
            <>
            <ProductoCount stock={stock} precio={precio} />
            <button onClick={
              () => {
                console.log("agregado")
                setAgregado(true)
              }
            }>Agregar al carrito</button>
            </>}
            
            
        </div>
  )
}

export default ProductoDetail;