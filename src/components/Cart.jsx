import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Header, Footer } from './ArchivoContainer';
import productos from './utils/productos';
import "./CartStyle.css"


export function Cart() {
  const {id} = useParams();
  let navigate = useNavigate();
  return (
    <>
    <Header />
    <main className='mainCart'>
        <h1>¡GRACIAS POR SU COMPRA!</h1>
        <h2 className="nombreProducto">{productos[id-1].nombre}</h2>
        <img className='imgCart' src={productos[id-1].imagen} alt="IMG"/>
        <button onClick={() => navigate("/")}> Volver al inicio </button>
    </main>
    <Footer />
    </>
  )
}
