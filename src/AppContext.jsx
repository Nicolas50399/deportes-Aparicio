import React from 'react'
import { createContext, useState } from 'react';
import App from './App';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    

    const cartSize = () => {
        return cart.length; //Devuelve la cantidad de productos diferentes del cart
    }

    const productQuantity = (id) => {//Devuelve la cantidad de un mismo producto que hay en el carrito
        let cant = 0;
        if (isInCart(id)) {
            cant = cart.find(itemCart => itemCart.product.id === id).quantity;//Si el producto esta en el cart, se busca el producto dentro de el para hallar su cantidad
        }
        //Si no esta en el cart, por logica devuelve 0
        return cant;
    }
    

    const addProduct = (product, quantity) => {//Agrega un producto al carrito con la cantidad correspondiente
        if (cartSize() === 0) {
            setCart([{ product, quantity }]);//Si el cart esta vacio, se actualiza con el producto a agregar
        } else {
            if (isInCart(product.id)) {//Si el producto ya esta en el cart, se actualiza la cantidad
                increment(product.id, quantity);
            } else { //Si el producto no esta, se actualiza con el producto a agregar
                setCart([...cart, { product, quantity }]);
            }
        }
    }

    const removeProduct = (id) => {//Quita un producto especifico, por su id
        if (isInCart(id)) {//Si el producto esta en el cart, se actualiza ya sin este producto.
            let itemInCartCopy = [...cart];
            let itemCart = itemInCartCopy.find((itemCart) => (
                itemCart.product.id === id
            ))
            itemInCartCopy.splice(itemInCartCopy.indexOf(itemCart), 1);
            setCart(itemInCartCopy);
        }
    }

    const clear = () => {
        setCart([]);//Carrito vacio
    }

    function isInCart(id){//Devuelve true si el producto esta en el cart
        return cart.some((itemCart) => itemCart.product.id === id)
    }

    const increment = (id, quantity) => {
        const itemsInCartCopy = [...cart];
        const itemCant = itemsInCartCopy.find(itemCant => itemCant.product.id === id);//cantidad del producto a incrementar
        itemCant.quantity += quantity;
        setCart(itemsInCartCopy);
    }

    const totalPlus = () => {//devuelve la cantidad total de productos del cart
        let plus = 0;
        cart.forEach(itemCant => {
            plus += itemCant.quantity;
        });
        return plus;
    }
    
    const totalPlusPrice = () => {//devuelve el precio total de productos del cart
        let total = 0;
        cart.forEach(itemCant => {
            total += itemCant.quantity * itemCant.product.precio;
        });
        return total;
    }

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, clear, cartSize, productQuantity, totalPlus, totalPlusPrice, increment }} >
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