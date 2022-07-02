import './App.css';
import { AppRouting } from './components/AppRouting';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);


    const addProduct = (product, quantity) => {
        product.cantidad += quantity //Cantidad en el carrito aumentada
        product.stock -= quantity //Stock del producto reducido
        setPrice(price + (product.precio * product.cantidad)); //Precio total aumentado
        if(!cart.includes(product)){
            setCart(cart.concat(product));//Agrega a la lista de productos, si no es repetido
        }
        
    }
    const removeProduct = (id) => {
        const productoASacar = cart.find((product) => product.id === id);
        productoASacar.stock += productoASacar.cantidad//Stock del producto reestablecido
        setPrice(price - (productoASacar.precio * productoASacar.cantidad)) //Precio total reducido
        productoASacar.cantidad = 0; //Cantidad en el carrito nula
        setCart(cart.filter(p => p.id !== productoASacar.id)); //Quita de la lista de productos

    }
    const clear = () => {
        cart.forEach(p => {
          p.stock += p.cantidad;
          p.cantidad=0;
        });//Cantidad de todos los productos en el carrito
        setPrice(0);//Precio total nulo
        setCart([]);//Carrito vacio
    }
    function isInCart(product){
        return cart.includes(product); //El producto esta en el carrito?
    }

    return (
        <CartContext.Provider value={{ cart, price, addProduct, removeProduct, clear, isInCart }} >
            {children}
        </CartContext.Provider>
    );
}

function App() {
  return (
    <CartProvider>
      <AppRouting /> 
    </CartProvider>
  );
}

export default App;
