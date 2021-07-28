import { Form, Button, Row, Col, Alert, Container } from "react-bootstrap";
import { useState } from "react";

function NewUser(props) {
  const [name, setName] = useState("");
  const [subname, setSubname] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  function enviar() {
    fetch("http://localhost:3001/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
        user,
        name,
        subname,
      }),
    })
      .then((res) => res.json())
      .then(function (datas) {
        setFeedback(datas.contenido.mensaje);
      });
  }

  return (
    <>
      <Container id="containerLogin">
        <h4 id="titleLogin">REGÍSTRARTE</h4>
        <Row>
          <Col></Col>
          <Col>
            <Form action="/login" method="post">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  placeholder="Nombre"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  placeholder="Apellido"
                  onChange={(e) => setSubname(e.target.value)}
                  value={subname}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  placeholder="Usuario"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>
              <Button variant="primary" onClick={() => enviar()}>
                Enviar
              </Button>
              <Form.Group>
                {feedback !== "" && (
                  <Alert variant={feedback==="Usuario registrado correctamente, gracias." ? "success" : "danger"}>
                    {feedback}
                  </Alert>
                )}
              </Form.Group>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default NewUser;