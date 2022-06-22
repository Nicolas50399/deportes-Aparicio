import React from "react";
import ProductoCount from "./ProductoCount";
import style from './ProductoStyle.css';

function Producto({nombre, descripcion, precio, imagen, stock, id}){
    return (
        <div className={"producto" + id}>
            <h2 className="nombreProducto">{nombre}</h2>
            <p className="descripcionProducto">{descripcion}</p>
            <img src={imagen} alt="IMG"/>
            <h4 className={style.price}>$ {precio}</h4>
            <ProductoCount stock={stock} />
        </div>
    );
}

export default Producto;