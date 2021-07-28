import { Card, Col, Container, Row } from "react-bootstrap";

function Voluntary() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="ml-5 mt-5 mb-5" id="mainContainer">
              <Card.Body>
                <Card.Title>Voluntariado</Card.Title>
                <Card.Text>
                  Realizar voluntariado es bueno para los demás y también es
                  bueno para uno mismo. Para ser voluntario hay que ser una
                  persona responsable y muy comprometida con la causa a la que
                  se quiere ayudar.
                </Card.Text>
                <Card.Text>
                  Tomar la iniciativa de ayudar desinteresadamente a nuestro
                  albergue es digno de admiración, refuerza la autoestima, hace
                  que tengas empatía hacia lo que te rodea y te permitirá
                  conocer a personas con tus mismos intereses y trabajar con
                  ellos. El voluntariado es una forma de aprender muchos valores
                  y trabajos que pueden ayudar a cualquiera a construir un buen
                  futuro. Entre las labores de los voluntarios se encuentran la
                  elaboración de material de comunicación, folletos, cartelería,
                  web, difusión de animales en redes sociales o el contacto
                  directo con los animales: sacándolos a pasear, bañándolos,
                  cepillándolos o mejorando las instalaciones. No solo basta con
                  buena voluntad para realizar una buena labor como voluntario o
                  voluntaria del albergue, también es fundamental tener unas
                  capacidades y actitudes propias para lo que se está haciendo.
                  Desde el albergue siempre procuramos que la labor de los
                  voluntarios/as se realice en las mejores condiciones posibles
                  para que los grandes beneficiados de su trabajo sean los
                  animales.
                </Card.Text>
                <Card.Text>
                  Para ser voluntario o voluntaria debe conocer y aceptar las
                  políticas y normas de funcionamiento del albergue. Somos una
                  Federación de carácter privado por lo que nos reservamos el
                  derecho de admisión y expulsión de los voluntarios/as.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container >
        <Row>
          <Col sm={4}>
            <Card className="cardContainer">
              <Card.Img
                className="imgAdoption"
                variant="top"
                src="https://i.ibb.co/vdF4MCK/voluntario2.jpg"
              />
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="cardContainer">
              <Card.Img
                className="imgAdoption"
                variant="top"
                src="https://i.ibb.co/3y1RTkJ/voluntarios.jpg"
              />
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="cardContainer">
              <Card.Img
                className="imgAdoption"
                variant="top"
                src="https://i.ibb.co/TrWJb90/img.jpg"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Card className="cardContainer">
              <Card.Img
                className="imgAdoption"
                variant="top"
                src="https://i.ibb.co/wyxqJP5/voluntary-6.jpg"
              />
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="cardContainer">
              <Card.Img
                className="imgAdoption"
                variant="top"
                src="https://i.ibb.co/FgvTqZP/img2.jpg"
              />
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="cardContainer">
              <Card.Img
                className="imgAdoption"
                variant="top"
                src="https://i.ibb.co/Ms2mqSY/voluntarios3.jpg"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Voluntary;
