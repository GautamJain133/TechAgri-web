import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarhome() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" style={{color: "green", marginLeft: "15px"}}>Kisaan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end align-items-end me-2">
          <Nav className="me-auto ms-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">about</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarhome;