import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import ProductoDetail from './utils/ProductoDetail';
import "./ProductoDetailContainerStyle.css"
import { useParams, useNavigate } from "react-router-dom"
import { Footer, Header } from './ArchivoContainer';
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ProductoDetailContainer() {
    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true);
    let navigate =useNavigate();

    

    useEffect(() => {
        const db = getFirestore();

        const biciRef = doc(db, "productos", `${id}`);
        getDoc(biciRef).then((snapshot) => {
            if(snapshot.exists()){
            setProduct({ id: snapshot.id, ...snapshot.data()});
            setLoading(false);
            }
        });
    }, );

  return (
    <>
    <Header />
    <main className='productoDetailMain'>
        <div className='contenedor'>
            {
                <ProductoDetail item={product} loading={loading} />
            }
        </div>
        <button className='button5' onClick={() => navigate("/productos")}> Volver atrás </button>
    </main>
    <Footer />
    </>
    
  )
}

export default ProductoDetailContainer;