import React, { useEffect, useState } from 'react'
import customFetch from "../utils/customFetch"
import productos from './utils/productos'
import './ProductoListContainerStyle.css'
import ProductoList from './ProductoList'
import Loader from './Loader'

function ProductoListContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        customFetch(3000, productos)
        .then(resultado => setProducts(resultado))
    }, [products])

  return (
    <div className="contenedor">
        {
            products?.length <= 0 ? <Loader /> : <ProductoList productos={products}/>
        }
    </div>
  )
}

export default ProductoListContainer;