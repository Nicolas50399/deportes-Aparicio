import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ArchivoContainer } from "./ArchivoContainer"
import ProductoDetailContainer from "./ProductoDetailContainer";
import ProductoListContainer from "./ProductoListContainer";
import { Cart } from "./Cart";
import Finish from "./Finish";
import Orden from "./Orden";
import Nosotros from "./Nosotros";

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
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/finish" element={<Finish />} />
            <Route path="/orden" element={<Orden />} />
        </Routes>
    </BrowserRouter>);
}