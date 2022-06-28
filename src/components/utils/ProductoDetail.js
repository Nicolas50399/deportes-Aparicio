import React from 'react'
import ProductoCount from '../ProductoCount';
import "../ProductoDetailContainerStyle.css";

function ProductoDetail({nombre, descripcion, imagen, precio, stock}) {

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