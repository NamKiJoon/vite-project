import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../assets/css/Header.scss";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <div className="Header" style={{ border: "1px solid black" }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Re</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/page1">Page1</Nav.Link>
              <Nav.Link href="/page2">Page2</Nav.Link>
              <Nav.Link href="/page3">Page3</Nav.Link>
              <Nav.Link href="/page4">Page4</Nav.Link>
              <Nav.Link href="/page5">Page5</Nav.Link>
              <Nav.Link href="/page6">Page6</Nav.Link>
            </Nav>
            <Button
              variant="secondary"
              onClick={() => {
                alert("click");
              }}
            >
              Btn
            </Button>{" "}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
