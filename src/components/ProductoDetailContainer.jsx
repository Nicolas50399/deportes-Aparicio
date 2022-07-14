import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import ProductoDetail from './utils/ProductoDetail';
import productos from './utils/productos';
import "./ProductoDetailContainerStyle.css"
import { useParams, useNavigate } from "react-router-dom"
import { Footer, Header } from './ArchivoContainer';
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ProductoDetailContainer() {
    const {id} = useParams();
    const [products] = useState([productos])
    const [product, setProduct] = useState([])
    let navigate =useNavigate();

    

    useEffect(() => {
        const db = getFirestore();

        const biciRef = doc(db, "productos", `${id}`);
        getDoc(biciRef).then((snapshot) => {
            if(snapshot.exists()){
            setProduct({ id: snapshot.id, ...snapshot.data()});
            }
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
        <button className='button5' onClick={() => navigate("/productos")}> Volver atrás </button>
    </main>
    <Footer />
    </>
    
  )
}

export default ProductoDetailContainer;