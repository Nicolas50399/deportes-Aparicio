import React, { useEffect, useState } from 'react'
import customFetch from "../utils/customFetch"
import productos from './utils/productos'
import './ProductoListContainerStyle.css'
import ProductoList from './ProductoList'
import Loader from './Loader'
import { Footer, Header } from './ArchivoContainer'
import { useNavigate } from "react-router-dom"

function ProductoListContainer() {
    const [products, setProducts] = useState([])
    const [filtrado, setFiltrado] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        customFetch(3000, productos)
        .then(resultado => setProducts(resultado))
    },[])

    const filtrarPor = (seccion) => {
      setProducts(productos.filter(producto => producto.seccion === seccion))
    }

  return (
    <>
      <Header />
      <main>
       <div className="secciones">
       <button onClick={() => filtrarPor("futbol")}> Futbol </button>
       <button onClick={() => filtrarPor("basquet")}> Basquet </button>
       <button onClick={() => filtrarPor("tenis")}> Tenis </button>
       </div>
        <h2 className='tituloProductosDestacados'>PRODUCTOS DESTACADOS</h2>
        <div className="contenedor">
            {
                products?.length <= 0 ? <Loader /> : <ProductoList productos={products}/>
            }
        </div>
       <button onClick={() => navigate("/")}> Volver al inicio </button>
      </main>
      <Footer />
    </>
    
  )
}

export default ProductoListContainer;