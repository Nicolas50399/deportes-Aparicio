import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppContext from './AppContext';
import FirebaseInicialize from './FirebaseInicialize';



//-------------------SEPARAR EN OTRO ARCHIVO-------------------------------------------------------


//-------------------------------------------------------------------------------------------------

/*
import { doc, getDoc, getFirestore } from "firebase/firestore";

useEffect(() => {
  const db = getFirestore();

  const biciRef = doc(db, "productos", "");
  getDoc(biciRef).then((snapshot) => {
    if(snapshot.exists()){
      setProduct({ id: snapshot.id, ...snapshot.data()});
    }
  });
}, []);


import { collection, getDocs, getFirestore } from "firebase/firestore";

useEffect(() => {
  const db = getFirestore();

  const itemsCollection = collection(db, "productos");
  getDocs(itemsCollection).then((snapshot) => {
    if(snapshot.size == 0){
      console.log("No results");
    }
    setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });
}, []);
usar el where para traer los productos que necesitemos, NO traer todo y despues filtrar


-----------------------------------------------

CREAR DOCUMENTO

import { addDoc, collection, getFirestore } from 'firebase/firestore';

const sendOrder = () => {
  const order = {
    buyer: { name: "", phone: "", email: "@gmail.com"},
    items: [{ name: "", price: 0}],
    total: 0
  };
  const db = getFirestore();

  const ordersCollection = collection(db, "orders");

  addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
}


ACTUALIZAR DOCUMENTO
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const updateOrder = () => {
  const db = getFirestore();

  const orderDoc = doc(db, "orders", "id");
  updateDoc(orderDoc, { total: 0 });
}

ACTUALIZAR MUCHOS DOCUMENTOS

import { getFirestore, writeBatch } from 'firebase/firestore';

const updateOrder = () => {
  const db = getFirestore();

  const batch = writeBatch(db);

  batch.update(doc1, { total: 0 });
  batch.set(doc2, { field: "new field value" });

  batch.commit();
}
*/


//-------------------------------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseInicialize />
    <AppContext />
  </React.StrictMode>
);

reportWebVitals();
