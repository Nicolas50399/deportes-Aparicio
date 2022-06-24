import React from "react";
import ProductoCount from "./ProductoCount";
import style from './ProductoStyle.css';
import { useNavigate, Link } from "react-router-dom";

function Producto({nombre, descripcion, precio, imagen, stock, id}){
    const navigate = useNavigate();
    return (
        <div className={"producto" + id}>
            <h2 className="nombreProducto">{nombre}</h2>
            <img src={imagen} alt="IMG"/>
            <h4 className={style.price}>$ {precio}</h4>
            <Link to={`/productos/${id}`}>Ver detalles</Link>
        </div>
    );
}

export default Producto;