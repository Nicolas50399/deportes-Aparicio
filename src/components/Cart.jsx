import React from 'react'
import { useNavigate /*,useParams*/ } from "react-router-dom"
import { Header, Footer } from './ArchivoContainer';
import "./CartStyle.css"
import { useContext } from 'react';
import ProductoCart from './ProductoCart';
import { CartContext } from '../App';


export function Cart() {
  //const {id} = useParams();
  const { cart, price, clear } = useContext(CartContext)
  //const { cart, price, addProduct, isInCart } = useContext(CartContext);
  let navigate = useNavigate();
  return (
    <>
    <Header />
    <main className='mainCart'>
      <h1>CARRITO</h1>
        {cart.map(p => 
          <ProductoCart key={p.id} {...p} />
        )}
        <h2>PRECIO TOTAL: ${price}</h2>
        <button onClick={() => clear()}>Vaciar carrito</button>
        <button onClick={() => {
          clear();
          navigate("/finish")
          }}>Finalizar compra</button>
        <button onClick={() => navigate("/")}> Volver al inicio </button>
    </main>
    <Footer />
    </>
  )
}
