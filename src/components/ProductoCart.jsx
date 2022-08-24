import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../AppContext'

function ProductoCart({nombre, precio, imagen, id}) {
    const { removeProduct, productQuantity } = useContext(CartContext);

  return (
    <div className={"producto" + id}>
        <h2 className="nombreProducto">{nombre} X {productQuantity(id)}</h2>
        <img className='imagenProducto' src={imagen} alt="IMG"/>
        <h4>$ {precio*productQuantity(id)}</h4>
        <button className='button3' onClick = {
          () => {
            removeProduct(id)
          }
          }>Quitar producto</button>
    </div>
  )
}

export default ProductoCart