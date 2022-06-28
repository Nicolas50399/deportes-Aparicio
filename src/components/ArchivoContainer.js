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
import { useNavigate } from "react-router-dom"

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
            <Card titulo = "Deportes" />
            <Navbar className='navBar' bg="" variant="dark">
                <Container>
                
                <Nav className="me-auto">
                <Nav.Link href="#inicio">Inicio</Nav.Link>
                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                <Nav.Link href="#productos">Productos</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
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
                />
                <UnDeporte 
                    tituloDeporte={"BASQUET"}
                    descripcion={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"}
                    icono={iconoBasquet}
                />
                <UnDeporte 
                    tituloDeporte={"TENIS"}
                    descripcion={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"}
                    icono={iconoTenis}
                />
            </section>
            <List />
            <h2 className='tituloProductosDestacados'>PRODUCTOS DESTACADOS</h2>
            <button onClick={() => navigate("/productos")}> Ir a la lista de productos </button>
        </main>
    );
}

const UnDeporte = (props) => {
    const { tituloDeporte = "Un deporte", descripcion, imagen = "IMG", icono} = props;
    return (
        <div className="cartaDeportesPrimarios">
            <h2 className="tituloDeporte">{tituloDeporte}</h2>
            <div className='iconoDeporte'>
                <img src={icono} alt="IMG"/>
            </div>
            <p className="descripcionDeporte">{descripcion}</p>
            <div className="imagenDeporte">
                {imagen}
            </div>
        </div>
    );
}

export const Footer = () => {
    return (
        <footer>
            <p>@2022 Todos los derechos reservados</p>
            <div className="linksFooter">
                <a href="#">Inicio</a>
                <a href="#">Nosotros</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
            </div>
        </footer>
    );
}
