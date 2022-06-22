import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch'
import Loader from './Loader'
import ProductoDetail from './utils/ProductoDetail';
import productos, { CallProductos } from './utils/productos';
import "./ProductoDetailContainerStyle.css"

function ProductoDetailContainer() {
    const [products, setProducts] = useState([productos])
    const [product, setProduct] = useState(productos.find(p => p.id === 0))

    useEffect(() => {
        CallProductos()
            .then(() => {
                setProduct(productos.find(p => p.id === 4))
                console.log(product);
                //console.log("ok");
            }, )
            .catch(() => {
                console.log("ERROR");
            })
            .finally(() => {
                setProduct(product)
            });

            customFetch(3000, productos)
                .then(resultado => setProducts(resultado))

    }, );

  return (
    <div className='contenedor'>
        {
            products?.length <= 0 ? <Loader /> : <ProductoDetail detalles={product} />
        }
    </div>
  )
}

export default ProductoDetailContainer;