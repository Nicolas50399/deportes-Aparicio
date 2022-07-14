import React from 'react'
import { createContext, useState } from 'react';
import App from './App';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [cant, setCant] = useState(0);
    const [ids, setIds] = useState([]);

    const addProduct = (product, quantity) => {
        product.cantidad += quantity //Cantidad en el carrito aumentada
        product.stock -= quantity //Stock del producto reducido
        setCant(cant + quantity); // Cantidad total aumentada
        setPrice(price + (product.precio * product.cantidad)); //Precio total aumentado
        if(!ids.includes(product.id)){
            setIds(ids.concat(product.id));
            setCart(cart.concat(product));//Agrega a la lista de productos, si no es repetido
        }
        
    }
    const removeProduct = (id) => {
        const productoASacar = cart.find((product) => product.id === id);
        productoASacar.stock += productoASacar.cantidad//Stock del producto reestablecido
        setPrice(price - (productoASacar.precio * productoASacar.cantidad)) //Precio total reducido
        setCant(cant - productoASacar.cantidad); // Cantidad total disminuida
        productoASacar.cantidad = 0; //Cantidad en el carrito nula
        setCart(cart.filter(p => p.id !== productoASacar.id)); //Quita de la lista de productos

    }
    const clear = () => {
        cart.forEach(p => {
          p.stock += p.cantidad;
          p.cantidad=0;
        });//Cantidad de todos los productos en el carrito
        setPrice(0);//Precio total nulo
        setCant(0);//Cantidad total nula
        setCart([]);//Carrito vacio
    }
    function isInCart(product){
        return cart.includes(product); //El producto esta en el carrito?
    }

    return (
        <CartContext.Provider value={{ cart, price, addProduct, removeProduct, clear, isInCart, cant }} >
            {children}
        </CartContext.Provider>
    );
}

function AppContext() {
  return (
    <CartProvider>
        <App />
    </CartProvider>
  )
}

export default AppContext