import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import ProductoDetail from './utils/ProductoDetail';
import productos, { CallProductos } from './utils/productos';
import "./ProductoDetailContainerStyle.css"
import { useParams, useNavigate } from "react-router-dom"
import { Footer, Header } from './ArchivoContainer';
import { createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);


    const addProduct = (product, quantity) => {
        product.cantidad += quantity //Cantidad en el carrito
        setPrice(price + (product.precio * product.cantidad)); //Precio total aumentado
        if(!isInCart(product.id)){
            setCart(cart.concat([product]));//Agrega a la lista de productos, si no es repetido
        }
        
    }
    const removeProduct = (id) => {
        const productoASacar = cart.find((product) => product.id === id);
        productoASacar.cantidad = 0; //Cantidad en el carrito
        setPrice(price - (productoASacar.precio * productoASacar.cantidad)) //Precio total reducido
        setCart(cart.filter(p => p.id !== productoASacar.id)); //Quita de la lista de productos

    }
    const clear = () => {
        cart.forEach(p => p.cantidad=0);//Cantidad de todos los productos en el carrito
        setPrice(0);//Precio total nulo
        setCart([]);//Carrito vacio
    }
    const isInCart = (id) => {
        return cart.some(p => p.id === id); //El producto esta en el carrito?
    }

    return (
        <CartContext.Provider value={{ cart, price, addProduct, removeProduct, clear, isInCart }} >
            {children}
        </CartContext.Provider>
    );
}


function ProductoDetailContainer() {
    const {id} = useParams();
    const [products] = useState([productos])
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
        
    <CartProvider>
        <div className='contenedor'>
            {
                products.length? <ProductoDetail key={product.id} {...product} /> : <Loader />
            }
        </div>
    </CartProvider>
        
        <button onClick={() => navigate("/productos")}> Volver atrás </button>
    </main>
    <Footer />
    </>
    
  )
}

export default ProductoDetailContainer;