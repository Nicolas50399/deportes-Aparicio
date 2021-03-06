import React from 'react'
import { Footer, Header } from './ArchivoContainer'
import { useNavigate } from "react-router-dom"
import finish from "../assets/finish.jpg"
import "./Finish.css"
import { useContext } from 'react'
import { CartContext } from '../AppContext'

function Finish() {
    const { orderId } = useContext(CartContext)
    let navigate = useNavigate();
  return (
    <>
    <Header />
    <main>
        <h1>SU COMPRA FUE REALIZADA CON EXITO</h1>
        <img className='imgFin' src={finish} alt="IMG" />
        <h2>¡GRACIAS POR ELEGIRNOS!</h2>
        <h3>Id de orden: {orderId}</h3>
        <button onClick={() => navigate("/")}> Volver al inicio </button>
    </main>
    <Footer />
    </>
  )
}

export default Finish