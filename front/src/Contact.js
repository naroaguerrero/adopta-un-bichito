import {
  Form,
  Row,
  Col,
  Button,
  Alert,
  Container,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [feedback, setFeedback] = useState("");

  function enviar() {
    fetch("http://localhost:3001/contact", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, question: question }),
    })
      .then((res) => res.json())
      .then(function (datos) {
        setFeedback(datos.mensaje);
      });
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="ml-5 mt-5 mb-5" id="mainContainer">
              <Card.Body>
                <Card.Title>
                  Contacta con nosotros, estamos aqui para ti
                </Card.Title>
                <Card.Text>
                  Si necesita más información contáctenos a través de las
                  siguientes opciones disponibles. Estamos a su disposición para
                  ayudarle a responder cualquier pregunta sobre nuestras
                  mascotas o productos. Puede contactarnos de lunes a sábado de
                  11:00 a 18:00. Domingos de 11:00 a 13:30
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col xs={3}></Col>
        <Col>
          <Form>
            <Card.Title>Formulario de contacto</Card.Title>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                placeholder="Tu nombre aquí"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Tu correo aquí"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Pregunta</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="¿Qué te gustaría saber?"
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
              />
            </Form.Group>
          </Form>
          <Button variant="primary" onClick={() => enviar()}>
            Enviar
          </Button>
          <Form.Group>
            {feedback !== "" && (
              <Alert variant={feedback.length > 0 ? "success" : "danger"}>
                {feedback}
              </Alert>
            )}
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default Contact;
