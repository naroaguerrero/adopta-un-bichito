import { Form, Button, Row, Col, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState({ empty: true });

  function enviar(email, password) {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then(function (datos) {
        console.log(datos);
        if (datos.logged) {
          props.setUsuarioEmail(datos.user);
          setFeedback(datos);
          setTimeout(() => {
            setFeedback({ empty: true });
          }, 5000);
        } else {
          props.setUsuarioEmail("");
          setFeedback(datos);
          setTimeout(() => {
            setFeedback({ empty: true });
          }, 5000);
        }
      });
  }

  return (
    <>
      <Container id="containerLogin">
        <h4 id="titleLogin">INICIAR SESIÓN</h4>
        <Row>
          <Col></Col>
          <Col>
            <Form action="/login" method="post">
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

              <Button variant="primary" onClick={() => enviar(email, password)}>
                Enviar
              </Button>

              <Form.Group>
                {feedback.empty ? (
                  ""
                ) : (
                  <Alert variant={feedback.logged ? "success" : "danger"}>
                    {feedback.mensaje}
                  </Alert>
                )}
              </Form.Group>
            </Form>

            <Link as={Link} to={"/newuser"}>
              Regístrate aquí
            </Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
