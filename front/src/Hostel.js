import { Card, Col, Container, Image, Row } from "react-bootstrap";

function Hostel() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="ml-5 mt-5 mb-5" id="mainContainer">
              <Card.Body>
                <Card.Title>El Albergue</Card.Title>
                <Card.Text>
                  En Salva un Bichito llevamos desde el año 2017 cuidando y
                  buscando un nuevo hogar a más de 2.500 animales abandonados
                  que, cada año, acogemos en nuestras instalaciones procedentes
                  de los municipios.
                </Card.Text>
                <Card.Text>
                  Nos dedicamos a la actividad, protección y defensa de los
                  animales. Rescatamos a los que han sido abandonados e
                  intentamos darles una vida digna en nuestro centro, así como
                  también hacemos todo lo posible para que tengan oportunidad de
                  ser adoptados y encontrar un hogar donde se les cuide. En
                  Salva un Bichito se les salva, protege y pueden encontrar un
                  nuevo hogar.
                </Card.Text>
                <Card.Text>
                  Para ser voluntario o voluntariadebe conocer y aceptar las
                  políticas y normas de funcionamiento del albergue. Somos una
                  Federación de carácter privado por lo que nos reservamos el
                  derecho de admisión y expulsión de los voluntarios/as.
                </Card.Text>
              </Card.Body>
              <Card className="ml-5 " id="mainContainer">
                <Image
                  style={{ width: "100%" }}
                  src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/protocolo-admision-albergue-animales.jpg"
                  fluid
                />
              </Card>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Card className="ml-5 mt-5 mb-5" id="mainContainer">
              <Card.Body>
                <Card.Title>Nuestro Equipo</Card.Title>
                <Card.Text>
                  El albergue está formado por un equipo humano de 13 personas
                  entre veterinarios, auxiliares veterinarios, auxiliares
                  administrativos y operarios de mantenimiento y limpieza.
                </Card.Text>
                <Card.Text>
                  Dicho personal atiende los animales que llegan al centro, con
                  el fin de darles las mejores atenciones hasta que encuentren
                  un familia que les de un hogar.
                </Card.Text>
                <Card.Text>
                  Gracias a su empeño y dedicación, más de 2.000 animales tienen
                  una segunda oportunidad, y un número muy importante son
                  recuperados de heridas y enfermedades que hacían peligrar su
                  vida.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={4}>
            <Card className="cardContainer">
              <Card.Img
                className="imgAdoption"
                variant="top"
                src="https://i.ibb.co/rxxNzcx/equipo-1.jpg"
              />
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="cardContainer">
              <Card.Img
                className="imgAdoption"
                variant="top"
                src="https://i.ibb.co/1f4TCmT/equipo-2.jpg"
              />
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="cardContainer">
              <Card.Img
                className="imgAdoption"
                variant="top"
                src="https://i.ibb.co/JyLzNR1/equipo-3.jpg"
              />
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Card className="ml-5 mt-5 mb-5" id="mainContainer">
              <Card.Body>
                <Card.Title>Nuestra Misión</Card.Title>
                <Card.Text>
                  Debido a la creciente preocupación de la sociedad por los
                  derechos, protección y bienestar animal el albergue intenta
                  responder a esta necesidad acogiendo perros y gatos
                  abandonados, proporcionándoles el máximo bienestar posible
                  hasta que sean adoptados.
                </Card.Text>
                <Card.Text>Entre nuestros objetivos se encuentra:</Card.Text>
                <Card.Text>
                  -Reducir el número de animales ingresados en el centro:
                  mediante la implantación de microchip en los animales
                  adoptados así como esterilizando a todos los animales
                  adoptados en el centro. Queriendo implantar programas de
                  concienciación y educación de los propietarios para una
                  tenencia responsable.
                </Card.Text>
                <Card.Text>
                  -Incrementar el número de adopciones: promoviendo las
                  adopciones mediante programas generales de sensibilización,
                  fomentando la tenencia responsable.
                </Card.Text>
                <Card.Text>
                  -Ayudar a los propietarios de los animales perdidos a
                  reencontrarlos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hostel;
