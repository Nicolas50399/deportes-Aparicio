import React, { useEffect, useState } from 'react'
import './ProductoListContainerStyle.css'
import ProductoList from './ProductoList'
import Loader from './Loader'
import { Footer, Header } from './ArchivoContainer'
import { useNavigate } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useContext } from 'react'
import { CartContext } from '../AppContext'



function ProductoListContainer() {
  
    //const { registrarProductos } = useContext(CartContext);
    const [products, setProducts] = useState([])
    let navigate = useNavigate();

    useEffect(() => {
      const db = getFirestore();

      const q = query(
        collection(db, "productos"),
        where("id", ">", 0)
      );
      getDocs(q).then((snapshot) => {
        if(snapshot.size === 0){
          console.log("No results");
        }
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        //registrarProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }, []);

    
    
    

    
    const filtrarPor = (seccion) => {
      const db = getFirestore();
      const q = query(
        collection(db, "productos"),
        where("seccion", "==", seccion)
      );
      getDocs(q).then((snapshot) => {
        if(snapshot.size === 0){
          console.log("No results");
        }
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
    

  return (
    <>
      <Header />
      <main className='productoListMain'>
       <div className="secciones">
       <button className='button2' onClick={() => filtrarPor("futbol")}> Futbol </button>
       <button className='button2' onClick={() => filtrarPor("basquet")}> Basquet </button>
       <button className='button2' onClick={() => filtrarPor("tenis")}> Tenis </button>
       </div>
        <h2 className='tituloProductosDestacados'>PRODUCTOS DESTACADOS</h2>
        <div className="contenedor">
            {
                products?.length <= 0 ? <Loader /> : <ProductoList productos={products}/>
            }
        </div>
       <button className='button5' onClick={() => navigate("/")}> Volver al inicio </button>
      </main>
      <Footer />
    </>
    
  )
}

export default ProductoListContainer;