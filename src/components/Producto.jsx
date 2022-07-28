import React from "react";
import style from './ProductoStyle.css';
import { Link } from "react-router-dom";

function Producto({nombre, precio, imagen, id}){
    return (
        <div className="producto">
            <h2 className="nombreProducto">{nombre}</h2>
            <img className="imagenProducto" src={imagen} alt="IMG"/>
            <h4 className={style.price}>$ {precio}</h4>
            <Link to={`/productos/${id}`}>Ver detalles</Link>
        </div>
    );
}

export default Producto;