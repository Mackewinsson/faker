import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = ({ user }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Permiso Faker 😈</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#"> Volver</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#" className="d-flex align-items-center">
            link
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
