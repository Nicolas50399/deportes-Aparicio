import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./archivoContainerStyle.css"

export const ArchivoContainer = () => {
    return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
    );
}

const Header = () => {
    return (
        <header>
            <NavBootstrap />
        </header>
    );
}

const NavBootstrap = () => {
    return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Deportes</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
        <Nav.Link href="#productos">Productos</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
        </>
    );
}

const Main = () => {
    return (
        <main>
            <Deportes />
        </main>
    );
}

const Deportes = () => {
    return (
        <section className="deportes">
            <UnDeporte 
                tituloDeporte={"FÚTBOL"}
                descripcion={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"}
                
            />
            <UnDeporte 
                tituloDeporte={"BASQUET"}
                descripcion={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"}
                
            />
            <UnDeporte 
                tituloDeporte={"TENIS"}
                descripcion={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"}
                
            />
        </section>
    );
}

const UnDeporte = (props) => {
    const { tituloDeporte = "Un deporte", descripcion, imagen = "IMG"} = props;
    return (
        <div className="cartaDeporte">
            <h2 className="tituloDeporte">{tituloDeporte}</h2>
            <p className="descripcionDeporte">{descripcion}</p>
            <div className="imagenDeporte">
                {imagen}
            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <footer>
            <p>@2022 Todos los derechos reservados</p>
            <LinksFooter />
        </footer>
    );
}

const LinksFooter = () => {
    return (
        <div className="linksFooter">
            <LinkFooter nombreLink="Inicio" rutaLink=""/>
            <LinkFooter nombreLink="Nosotros" rutaLink=""/>
            <LinkFooter nombreLink="Productos" rutaLink=""/>
            <LinkFooter nombreLink="Contacto" rutaLink=""/>
        </div>
    );
}

const LinkFooter = (props) => {
    const { nombreLink="Un link", rutaLink } = props;
    return (
        <a href={rutaLink}>{nombreLink}</a>
    );
}