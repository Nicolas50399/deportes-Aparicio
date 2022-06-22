import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch'
import Loader from './Loader'
import ProductoDetail from './utils/ProductoDetail';
import productos, { CallProductos } from './utils/productos';
import "./ProductoDetailContainerStyle.css"

function ProductoDetailContainer() {
    const [products, setProducts] = useState([productos])
    const [product, setProduct] = useState();

    useEffect(() => {
        CallProductos()
            .then(() => {

                //setProduct(products.find(p => p.id === 2))
                console.log(product);
                console.log(products[3])
                //console.log("ok");
            }, )
            .catch(() => {
                console.log("ERROR");
            })
            .finally(() => {
                setProduct(product)
            });

            customFetch(1000, productos)
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