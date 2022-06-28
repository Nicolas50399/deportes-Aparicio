import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ArchivoContainer } from "./ArchivoContainer"
import ProductoDetailContainer from "./ProductoDetailContainer";
import ProductoListContainer from "./ProductoListContainer";


export const AppRouting = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<ArchivoContainer />}/> {/* localhost:3000 */}
            <Route path="/productos" element={<ProductoListContainer/>} />
            {/* localhost:3000/productos */}
            <Route path="productos/:id" element={<ProductoDetailContainer />}/>{/*
            localhost:3000/productos/5
            localhost:3000/productos/4
    */}
        </Routes>
    </BrowserRouter>);
}