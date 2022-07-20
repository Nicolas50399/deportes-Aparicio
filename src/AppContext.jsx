import React from 'react'
import { createContext, useState } from 'react';
import App from './App';

export const CartContext = createContext();

let registrado = false;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [cant, setCant] = useState(0);
    const [ids, setIds] = useState([]);
    const [items, setItems] = useState([]);
    const [orderId, setOrderId] = useState({});

    const registrarProductos = (products) => {
        if(!registrado){
          setItems(products);
      }
      registrado = true
    }
    

    const addProduct = (product, quantity) => {
        const itemAAgregar = items.find((prod) => prod.id === product.id)
        itemAAgregar.cantidad += quantity //Cantidad en el carrito aumentada
        itemAAgregar.stock -= quantity //Stock del producto reducido
        console.log(itemAAgregar)
        setItems(items);
        setCant(cant + quantity); // Cantidad total aumentada
        setPrice(price + (product.precio * product.cantidad)); //Precio total aumentado
        if(!cart.includes(product)){
            setIds(ids.concat(product.id));
            setCart(cart.concat(product));//Agrega a la lista de productos, si no es repetido
        }
        
    }
    const removeProduct = (id) => {
        const productoASacar = cart.find((product) => product.id === id);
        const itemASacar = items.find((product) => product.id === id);
        itemASacar.stock += productoASacar.cantidad//Stock del producto reestablecido
        setPrice(price - (itemASacar.precio * itemASacar.cantidad)) //Precio total reducido
        setCant(cant - productoASacar.cantidad); // Cantidad total disminuida
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

        setPrice(0);//Precio total nulo
        setCant(0);//Cantidad total nula
        setCart([]);//Carrito vacio
    }
    function isInCart(product){
        return cart.includes(product); //El producto esta en el carrito?
    }

    return (
        <CartContext.Provider value={{ cart, price, setPrice, addProduct, removeProduct, clear, isInCart, cant, registrarProductos, items }} >
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