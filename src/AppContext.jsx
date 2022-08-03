import React from 'react'
import { createContext, useState } from 'react';
import App from './App';

export const CartContext = createContext();

let registrado = false;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);
    const [orderId, setOrderId] = useState([]);

    const registrarProductos = (products) => {
        if(!registrado){
          setItems(products);
      }
      registrado = true
    }

    const crearOrdenPedido = (id) => {
        setOrderId(orderId.concat(id))
    }


    const precioTotalCart = () => {
        return (cart.map(p => (p.precio * p.cantidad))).reduce((acumulador, precio) => acumulador+precio, 0);
    }

    const cantidadTotalItems = () => {
        return (cart.map(p => p.cantidad)).reduce((acumulador, cantidad) => acumulador + cantidad, 0);
    }
    

    const addProduct = (product, quantity) => {
        const itemAAgregar = items.find((prod) => prod.id === product.id)
        itemAAgregar.cantidad += quantity //Cantidad en el carrito aumentada
        itemAAgregar.stock -= quantity //Stock del producto reducido
        console.log(itemAAgregar)
        setItems(items);
        if(!cart.includes(product)){
            setCart(cart.concat(product));//Agrega a la lista de productos, si no es repetido
        }
        
    }
    const removeProduct = (id) => {
        const productoASacar = cart.find((product) => product.id === id);
        const itemASacar = items.find((product) => product.id === id);
        itemASacar.stock += productoASacar.cantidad//Stock del producto reestablecido
        itemASacar.cantidad -= productoASacar.cantidad//Stock del producto reestablecido
        productoASacar.cantidad = 0; //Cantidad en el carrito nula
        setCart(cart.filter(p => p.id !== productoASacar.id)); //Quita de la lista de productos

    }
    const clear = () => {
        cart.forEach(p => {
            items[p.id - 1].stock += items[p.id - 1].cantidad;
            items[p.id - 1].cantidad=0;
        });//Cantidad de todos los productos en el carrito
        setItems(items);
        setCart([]);//Carrito vacio
    }
    function isInCart(product){
        return cart.includes(product); //El producto esta en el carrito?
    }

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, clear, isInCart, registrarProductos, items, crearOrdenPedido, orderId, precioTotalCart, cantidadTotalItems }} >
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