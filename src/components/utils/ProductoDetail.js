import React, { useContext, useEffect } from 'react'
import ProductoCount from '../ProductoCount';
import "../ProductoDetailContainerStyle.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../AppContext';
import productos from './productos';
import { doc, getDoc, getFirestore } from "firebase/firestore";


export function ProductoDetail({nombre, descripcion, imagen, precio, stock, id}) {
  const { cart, addProduct } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false)
  const [cant, setCant] = useState(0);
  const [product, setProduct] = useState([])
  let navigate = useNavigate();

  useEffect(() => {
    const db = getFirestore();

    const biciRef = doc(db, "productos", `${id}`);
    getDoc(biciRef).then((snapshot) => {
        if(snapshot.exists()){
        setProduct({ id: snapshot.id, ...snapshot.data()});
        }
    });
}, []);

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
                addProduct(product, cant)
              }
            }>Agregar al carrito</button>
            </>}
            
            
        </div>
  )
}

export default ProductoDetail;