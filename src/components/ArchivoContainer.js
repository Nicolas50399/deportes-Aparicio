import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./archivoContainerStyle.css"
import { Card } from "./Card/Card"
import { List } from "./List/List"
import iconoFutbol from "../assets/iconoFutbol.jpg";
import iconoBasquet from "../assets/iconoBasquet.jpg";
import iconoTenis from '../assets/iconoTenis.png';
import seccionTenis1 from '../assets/seccionTenis1.jpg';
import seccionFutbol1 from '../assets/seccionFutbol1.jpg';
import seccionBasquet1 from '../assets/seccionBasquet1.jpg';
import { useNavigate, Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import { SiInstagram, SiWhatsapp, SiFacebook, SiGmail } from "react-icons/si";
import { createContext, useState } from 'react';



export const ArchivoContainer = () => {

    
    return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
    );
}

export const Header = () => {
    return (
        <header>
            <div className='headerNavLogo'>
            <Card titulo = "Deportes" />
                <Navbar className='navBar' bg="" variant="dark">
                    <Container>
                    
                    <Nav className="linksHeader">
                    <Link className="link" to={`/`}>Inicio</Link>
                    <Link className="link" to={``}>Nosotros</Link>
                    <Link className="link" to={`/productos`}>Productos</Link>
                    <Link className="link" to={``}>Contacto</Link>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
            <BsCart3 className='carritoCompras' />
        </header>
    );
}

const Main = () => {
    let navigate = useNavigate();
    return (
        <main>
            <h1 className='tituloPrincipal'>TIENDA DEPORTIVA</h1>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt repellendus</h5>
            <section className="deportes">
                <UnDeporte 
                    tituloDeporte={"FÚTBOL"}
                    descripcion={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"}
                    icono={iconoFutbol}
                    imagen={seccionFutbol1}
                />
                <UnDeporte 
                    tituloDeporte={"BASQUET"}
                    descripcion={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"}
                    icono={iconoBasquet}
                    imagen={seccionBasquet1}
                />
                <UnDeporte 
                    tituloDeporte={"TENIS"}
                    descripcion={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"}
                    icono={iconoTenis}
                    imagen={seccionTenis1}
                />
            </section>
            <List />
            <h2 className='tituloProductosDestacados'>PRODUCTOS DESTACADOS</h2>
            <button onClick={() => navigate("/productos")}> Ir a la lista de productos </button>
        </main>
    );
}

const UnDeporte = (props) => {
    const { tituloDeporte = "Un deporte", descripcion, imagen, icono} = props;
    return (
        <div className="cartaDeportesPrimarios">
            <h2 className="tituloDeporte">{tituloDeporte}</h2>
            <div className='iconoDeporte'>
                <img src={icono} alt="IMG"/>
            </div>
            <p className="descripcionDeporte">{descripcion}</p>
            <img className="imagenDeporte" src={imagen} alt="IMG"/>
            
        </div>
    );
}

export const Footer = () => {
    return (
        <footer>
            <p>@2022 Todos los derechos reservados</p>
            <div className="linksFooter">
                <Link className="link" to={`/`}>Inicio</Link>
                <Link className="link" to={``}>Nosotros</Link>
                <Link className="link" to={`/productos`}>Productos</Link>
                <Link className="link" to={``}>Contacto</Link>
            </div>
            <div className='redesFooter'>
                <SiFacebook className='red' />
                <SiInstagram className='red' />
                <SiGmail className='red' />
                <SiWhatsapp className='red' />
            </div>
        </footer>
    );
}
