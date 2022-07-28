import React from 'react'
import { Footer, Header } from './ArchivoContainer'
import "./NosotrosStyle.css"

function Nosotros() {
  return (
    <>
    <Header />
    <main className='nosotrosMain'>
        <h1>ACERCA DE NOSOTROS</h1>
        <p className='nosotrosText'>Somos un grupo de jovenes emprendedores y apasionados por el deporte, nos intereso mucho la idea de abrir un negocio con nuestra tematica preferida, y lo logramos con mucho esfuerzo. Tenemos relacion con muchos proveedores confiables para que nos proporcionen gran variedad de productos para nuestra tienda. Nuestro objetivo real es darle la oportunidad a todos los que deseen un buen equipo de entrenamiento para nuestros deportes seleccionados, ofrecerles nuestros productos a un precio menor al que ofrecen las grandes empresas. Esto se lleva a cabo tanto para el beneficio de nuestros clientes como el nuestro, porque cada venta nos ayuda a crecer y a expandirnos en un futuro.</p>
    </main> 
    <Footer />
    </>
  )
}

export default Nosotros