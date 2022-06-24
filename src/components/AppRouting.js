import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom"
import { ArchivoContainer } from "./ArchivoContainer"
import ProductoDetailContainer from "./ProductoDetailContainer";
import ProductoListContainer from "./ProductoListContainer";

const HomeContainer = () => {
    return (<>
        <h2>Soy la home</h2>
        <Link to="/about">Ir al about</Link>
    </>);
};
const AboutContainer = () => {
    const id = 5;
    return (<>
        <h2>Soy el about</h2>
        <Link to={`/personal/${id}`}>Ir a personal 5</Link>
    </>);
};

const Personal = () => {
    const {id} = useParams();
    let navigate =useNavigate();
    return <>
        <h2>{`Soy personal con id ${id}`}</h2>
        <button onClick={() => navigate("/about")}> + </button>
    </>
    
}

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