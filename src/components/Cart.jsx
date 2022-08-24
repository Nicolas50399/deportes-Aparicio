import React from 'react'
import { useNavigate /*,useParams*/ } from "react-router-dom"
import { Header, Footer } from './ArchivoContainer';
import "./CartStyle.css"
import { useContext } from 'react';
import ProductoCart from './ProductoCart';
import { CartContext } from '../AppContext';


export function Cart() {
  const { cart, totalPlusPrice, clear } = useContext(CartContext)
  let navigate = useNavigate();
  return (
    <>
    <Header />
    <main className='mainCart'>
      <h1>CARRITO</h1>
        {(cart.length > 0) ? 
        <>
        {cart.map(p => 
                  <ProductoCart key={p.product.id} {...p.product} />
                ) }
        <h2>PRECIO TOTAL: ${totalPlusPrice()}</h2>
        <button className='button3' onClick={() => clear()}>Vaciar carrito</button>
        <button className='button1' onClick={() => {
          navigate("/orden")
          }}>Finalizar compra</button>
        </>
        : 
        <h2>No hay items</h2>}
        
        
        <button className='button5' onClick={() => navigate("/")}> Volver al inicio </button>
    </main>
    <Footer />
    </>
  )
}
