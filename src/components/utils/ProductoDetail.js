import React, { createContext, useContext } from 'react'
import ProductoCount from '../ProductoCount';
import "../ProductoDetailContainerStyle.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../ProductoDetailContainer';

export const CountContext = createContext();

const CountProvider = ({children}) => {
  const [count, setCount] = useState(0)
  const cambiarCount = (nuevoCount) => setCount(nuevoCount)
  return(
    <CountContext.Provider value={ {count, cambiarCount} }>
      {children}
    </CountContext.Provider>
  );
}

export function ProductoDetail({nombre, descripcion, imagen, precio, stock}) {
  const { cart, price, addProduct, isInCart } = useContext(CartContext);
  //const { count } = useContext(CountContext);
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
            <CountProvider>
              <ProductoCount stock={stock} precio={precio} />
            </CountProvider>
            <button onClick={
              () => {
                console.log("agregado")
                //console.log({count})
                setAgregado(true)
              }
            }>Agregar al carrito</button>
            </>}
            
            
        </div>
  )
}

export default ProductoDetail;