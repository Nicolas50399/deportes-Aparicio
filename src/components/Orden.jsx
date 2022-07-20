import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../AppContext';
import { Footer, Header } from './ArchivoContainer';
import { addDoc, collection, getFirestore, updateDoc, doc } from 'firebase/firestore';
import { useState } from 'react';

const SendOrder = (nombre, email, telefono, crearOrdenPedido, price, cart) => {
    const order = {
      buyer: { name: nombre, phone: telefono, email: email},
      items: cart,
      total: price
    };
    const db = getFirestore();
  
    const ordersCollection = collection(db, "orders");
  
    addDoc(ordersCollection, order).then(({ id }) => crearOrdenPedido(id));
  }

  const UpdateOrder = (cart) => {
    const db = getFirestore();

            for(let i = 0; i < cart.length; i++){
                const orderDoc = doc(db, "productos", `${cart[i].id}`);
                updateDoc(orderDoc, { stock: (cart[i].stock) });
            }
  }

  const InputComponent = ( { valor, changeValue }) => {
    return (
        <input 
            type="text" 
            value={valor} 
            onChange={(e) => changeValue(e.target.value)}
        />
    );
};

function Orden() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    let navigate = useNavigate();
    const { clear, cart, crearOrdenPedido, price } = useContext(CartContext);
  return (
    <>
    <Header />
    <main>
        <h1>ÚLTIMOS DETALLES</h1>
        <h2>Nombre</h2>
        <InputComponent valor={nombre} changeValue={setNombre} />
        <h2>Email</h2>
        <InputComponent valor={email} changeValue={setEmail} />
        <h2>Telefono</h2>
        <InputComponent valor={telefono} changeValue={setTelefono} />
        <br />
        <br />
        <button onClick={() => {
            SendOrder(nombre, email, telefono, crearOrdenPedido, price, cart)
            UpdateOrder(cart)
            
            navigate("/finish")
            clear();
            }}> FINALIZAR COMPRA </button>
        <button onClick={() => navigate("/")}> Volver al inicio </button>
    </main>
    <Footer />
    </>
  )
}

export default Orden