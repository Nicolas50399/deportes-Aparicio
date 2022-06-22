import React from 'react'
import ProductoCount from '../ProductoCount';
import "../ProductoDetailContainerStyle.css"
import camisetaArgentinaMessi from '../../assets/camisetaArgentinaMessi.jpg';

function ProductoDetail({nombre = "Camiseta Argentina (Messi)",
   descripcion="Una camiseta de Argentina con estampado de Messi", 
   imagen = camisetaArgentinaMessi, 
   precio = 10000, 
   stock = 25}) {

  return (
    <div className={"producto"}>
            <h2 className="nombreProducto">{nombre}</h2>
            <p className="descripcionProducto">{descripcion}</p>
            <img src={imagen} alt="IMG"/>
            <h4 className="precioProducto">$ {precio}</h4>
            <ProductoCount stock={stock} />
        </div>
  )
}

export default ProductoDetail;