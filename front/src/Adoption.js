import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Adoption(props) {
  const [data, setData] = useState([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/adoption", { credentials: "include" })
      .then((res) => res.json())
      .then((datas) => {
        setData(datas.contenido);
      });
  }, []);

  function borrar(nombre, nacimiento) {
    fetch("http://localhost:3001/adoption", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/Json",
      },
      credentials: "include",
      body: JSON.stringify({
        nombre,
        nacimiento,
      }),
    })
      .then((res) => res.json())
      .then(function (datas) {
        console.log(datas);
        setFeedback(datas.content.message);
      });
  }
  const animals = data.map((animal) => {
    return (
      <Col sm={4}>
        <Card>
          <Card.Img className="imgAdoption" variant="top" src={animal.imagen} />
          <Card.Body>
            <Card.Title className="mb-5" as={Link} to="/contact">
              <strong>{animal.nombre}</strong>
            </Card.Title>
            <Card.Text>{animal.raza}</Card.Text>

            {props.usuarioEmail.admin ? (
              <div>
                <Button
                  onClick={() => borrar(animal.nombre, animal.nacimiento)}
                >
                  Borrar
                </Button>
              </div>
            ) : (
              ""
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <>
      <Container>
        <Form.Group>
          {feedback !== "" && (
            <Alert
              variant={
                feedback === "Usuario registrado correctamente, gracias."
                  ? "success"
                  : "danger"
              }
            >
              {feedback}
            </Alert>
          )}
        </Form.Group>
      </Container>
      <Container>
        <Row>{animals}</Row>
      </Container>
    </>
  );
}

export default Adoption;
