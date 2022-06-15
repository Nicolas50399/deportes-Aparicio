import React, { useEffect, useState } from 'react'
import customFetch from "../utils/customFetch"
import productos from './utils/productos'
import './ProductoListContainerStyle.css'
import ProductoList from './ProductoList'

function ProductoListContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        customFetch(3000, productos)
        .then(resultado => setProducts(resultado))
    }, [products])

  return (
    <div className="container">
        {
            products?.length <= 0 ? <h1>Cargando...</h1> : <ProductoList productos={products}/>
        }
    </div>
  )
}

export default ProductoListContainer;