import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./archivoContainerStyle.css"
import { Card } from "./Card/Card"
import { List } from "./List/List"
import iconoFutbol from "../assets/iconoFutbol.png";
import iconoBasquet from "../assets/iconoBasquet.png";
import iconoTenis from '../assets/iconoTenis.png';
import seccionTenis1 from '../assets/seccionTenis1.jpg';
import seccionFutbol1 from '../assets/seccionFutbol1.jpg';
import seccionBasquet1 from '../assets/seccionBasquet1.jpg';
import seccionTenis2 from "../assets/seccionTenis2.jpg";
import seccionFutbol2 from '../assets/seccionFutbol2.jpg';
import seccionBasquet2 from '../assets/seccionBasquet2.jpg';
import { useNavigate, Link } from "react-router-dom"
import { SiInstagram, SiWhatsapp, SiFacebook, SiGmail } from "react-icons/si";
import CartWidget from './CartWidget';



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
            <CartWidget />
        </header>
    );
}

const Main = () => {
    let navigate = useNavigate();
    return (
        <main>
            <h1 className='tituloPrincipal'>TIENDA DEPORTIVA</h1>
            <h5>¿Te interesa tener articulos para entrenar? ¡Este es tu sitio!</h5>
            <section className="deportes">
                <UnDeporte 
                    tituloDeporte={"FÚTBOL"}
                    descripcion={"Los mejores botines, pelotas y camisetas para jugar al fútbol justo acá"}
                    icono={iconoFutbol}
                    imagen={seccionFutbol1}
                    imagen2={seccionFutbol2}
                />
                <UnDeporte 
                    tituloDeporte={"BASQUET"}
                    descripcion={"Te invitamos a mirar nuestra variedad de vestimentas y pelotas de basquet"}
                    icono={iconoBasquet}
                    imagen={seccionBasquet1}
                    imagen2={seccionBasquet2}
                />
                <UnDeporte 
                    tituloDeporte={"TENIS"}
                    descripcion={"El lugar ideal para tener la raqueta de tenis que buscás, ademas de prendas y pelotas"}
                    icono={iconoTenis}
                    imagen={seccionTenis1}
                    imagen2={seccionTenis2}
                />
            </section>
            <List />
            <h2 className='tituloProductosDestacados'>PRODUCTOS DESTACADOS</h2>
            <button className='button2' onClick={() => navigate("/productos")}> Ir a la lista de productos </button>
        </main>
    );
}

const UnDeporte = (props) => {
    const { tituloDeporte = "Un deporte", descripcion, imagen, imagen2, icono} = props;
    return (
        <div className="cartaDeportesPrimarios">
            <h2 className="tituloDeporte">{tituloDeporte}</h2>
            <div className='iconoDeporte'>
                <img className='imgIcono' src={icono} alt="IMG"/>
            </div>
            <p className="descripcionDeporte">{descripcion}</p>
            <img className="imagenDeporte" src={imagen} alt="IMG"/>
            <img className="imagenDeporte2" src={imagen2} alt="IMG"/>
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
