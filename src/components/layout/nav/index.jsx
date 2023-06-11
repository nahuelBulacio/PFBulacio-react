import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Elegantis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            <NavDropdown title="Menú" id="basic-nav-dropdown">
              <NavLink to="/menues/pizzas"><NavDropdown.Item href="#action/3.1">Pizzas</NavDropdown.Item></NavLink>
              <NavDropdown.Item href="#action/3.2">Sandwiches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pastas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ensaladas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Al plato</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Sopas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Postres</NavDropdown.Item>
              <NavDropdown title="Bebidas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.7">Sin alcohol</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Con alcohol</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Menu };