import React from 'react'
import { useNavigate } from "react-router-dom"
import { Header, Footer } from './ArchivoContainer';


export function Cart() {

  let navigate = useNavigate();
  return (
    <>
    <Header />
    <main>
        <h1>¡GRACIAS POR SU COMPRA!</h1>
        <button onClick={() => navigate("/")}> Volver al inicio </button>
    </main>
    <Footer />
    </>
  )
}
