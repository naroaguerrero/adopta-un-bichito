import { Form, Button, Row, Col, Alert, Container } from "react-bootstrap";
import { useState } from "react";

function Register(props) {
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [tipo, setTipo] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [sexo, setSexo] = useState("");
  const [imagen, setImagen] = useState("");
  const [feedback, setFeedback] = useState("");

  function enviar() {
    fetch("http://localhost:3001/adoption", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json",
      },
      credentials: "include",
      body: JSON.stringify({
        nombre,
        raza,
        tipo,
        nacimiento,
        sexo,
        imagen,
      }),
    })
      .then((res) => res.json())
      .then(function (datas) {
         setFeedback(datas.content);
         console.log(datas)
      
      });
  }

  return (
    <>
      <Container id="containerLogin">
        <h4 id="titleLogin">PUBLICAR BICHITO</h4>
        <Row>
          <Col></Col>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  placeholder="Nombre"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Raza</Form.Label>
                <Form.Control
                  placeholder="Raza"
                  onChange={(e) => setRaza(e.target.value)}
                  value={raza}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                  placeholder="Tipo"
                  onChange={(e) => setTipo(e.target.value)}
                  value={tipo}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nacimiento</Form.Label>
                <Form.Control
                  placeholder="Nacimiento"
                  onChange={(e) => setNacimiento(e.target.value)}
                  value={nacimiento}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Sexo</Form.Label>
                <Form.Control
                  placeholder="Sexo"
                  onChange={(e) => setSexo(e.target.value)}
                  value={sexo}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  placeholder="Imagen"
                  onChange={(e) => setImagen(e.target.value)}
                  value={imagen}
                />
              </Form.Group>
              <Button variant="primary" onClick={() => enviar()}>
                Enviar
              </Button>
              <Form.Group>
                {feedback !== "" && (
                  <Alert
                    variant={
                      feedback === "Bichito con ganas de ser adoptado."
                        ? "success"
                        : "danger"
                    }
                  >
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

export default Register;
