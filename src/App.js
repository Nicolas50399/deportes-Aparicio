import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
