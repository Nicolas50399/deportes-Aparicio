import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../App'

function ProductoCart({nombre, precio, imagen, id, cantidad}) {
    const { removeProduct, cart } = useContext(CartContext);

  return (
    <div className={"producto" + id}>
        <h2 className="nombreProducto">{nombre} X {cantidad}</h2>
        <img src={imagen} alt="IMG"/>
        <h4>$ {precio*cantidad}</h4>
        <button onClick = {() => removeProduct(id)}>Quitar producto</button>
    </div>
  )
}

export default ProductoCart