import React from "react";
import Producto from "./Producto";

function ProductoList({productos}){
    return (
        productos.map(p => 
            <Producto key={p.id} {...p}/>
        )
    );
}

export default ProductoList;