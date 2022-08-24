import React, { useContext, useEffect } from 'react'
import ProductoCount from '../ProductoCount';
import "../ProductoDetailContainerStyle.css";
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from '../../AppContext';
import { doc, getDoc, getFirestore } from "firebase/firestore";


export function ProductoDetail({item, loading}) {
  const { cart, addProduct, productQuantity } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false);
  const [cant, setCant] = useState(0);
  const [stk, setStk] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      setStk(item.stock - productQuantity(item.id));
  }
}, [stk, item.stock, item.id, loading, productQuantity]);

  return (
    <div className={"producto"}>
            <button onClick={() => console.log(productQuantity(item.id))}>acumulado</button>
            <h2 className="nombreProducto">{item.nombre}</h2>
            <p className="descripcionProducto">{item.descripcion}</p>
            <img className='imagenProducto' src={item.imagen} alt="IMG"/>
            <h4 className="precioProducto">$ {item.precio}</h4>



            {agregado? <button className='button1' onClick={() => {
              navigate("/cart")
              console.log(cart)
            }}>Ir al carrito</button> : 
            <>
            <ProductoCount stock={stk} precio={item.precio} setCant={setCant} />
            <button className='button2' onClick={
              () => {
                setAgregado(true)
                addProduct(item, cant)
                setStk(item.stock - cant)
              }
            }>Agregar al carrito</button>
            </>}
            
            
        </div>
  )
}

export default ProductoDetail;