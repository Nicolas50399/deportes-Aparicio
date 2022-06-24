import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch'
import Loader from './Loader'
import ProductoDetail from './utils/ProductoDetail';
import productos, { CallProductos } from './utils/productos';
import "./ProductoDetailContainerStyle.css"
import { useParams, useNavigate } from "react-router-dom"
import { Footer, Header } from './ArchivoContainer';


function ProductoDetailContainer() {
    const {id} = useParams();
    const [products, setProducts] = useState([productos])
    const [product, setProduct] = useState(productos[id-1])
    let navigate =useNavigate();

    useEffect(() => {
        CallProductos()
            .then(() => {
                setProduct(productos.find(p => p.id === id))
                console.log(product);
                //console.log("ok");
            }, )
            .catch(() => {
                console.log("ERROR");
            })
            .finally(() => {
                setProduct(product)
            });

    }, );

  return (
    <>
    <Header />
    <main>
        <div className='contenedor'>
            {
                products.length? <ProductoDetail key={product.id} {...product} /> : <Loader />
            }
        </div>
        <button onClick={() => navigate("/productos")}> Volver atrás </button>
    </main>
    <Footer />
    </>
    
  )
}

export default ProductoDetailContainer;