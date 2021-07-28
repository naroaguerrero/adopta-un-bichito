import { useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

function Header(props) {
  const [data, setData] = useState({});
  function logOut() {
    fetch("http://localhost:3001/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json",
      },
      credentials: "include",
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(function (datas) {
        setData(datas);
      });
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container className="navBarContainer">
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/31/17/37/animal-1293792_960_720.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="animals"
            />
          </Navbar.Brand>
          <Navbar.Brand id="navHeader" as={Link} to="/">
            ADOPTA UN BICHITO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link id="navHeader" as={Link} to="/hostel">
                <strong>EL ALBERGUE</strong>
              </Nav.Link>
              <Nav.Link id="navHeader" as={Link} to="/voluntary">
                <strong>VOLUNTARIADO</strong>
              </Nav.Link>
              <Nav.Link id="navHeader" as={Link} to="/contact">
                <strong>CONTACTO</strong>
              </Nav.Link>
              <Nav.Link id="navHeader" as={Link} to="/adoption">
                <strong>ADOPTAR</strong>
              </Nav.Link>
              {props.usuarioEmail.admin ? (
                <Nav.Link id="navHeader" as={Link} to="/register">
                  <strong>CREAR</strong>
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>

            <Nav>
            
              <Nav.Link id="navHeader" as={Link} to="/login">
                <strong>ENTRAR</strong>
              </Nav.Link>
              <Nav.Link id="navHeader" as={Link} to="/newuser">
                <strong>REGISTARSE</strong>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
