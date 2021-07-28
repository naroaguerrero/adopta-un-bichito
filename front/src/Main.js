import { Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";

function Main() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="ml-5 mt-5 mb-5" id="mainContainer">
              <Card.Body>
                <Card.Title>Adopta un Bichito</Card.Title>
                <Image
                  style={{ width: "100%" }}
                  src="https://i.ibb.co/pJJrHkN/cabecera.jpg "
                  fluid
                />
                <Card.Title className="mt-5">¿Quiénes somos?</Card.Title>
                <Card.Text>
                  Somos una fundación privada, independiente y sin ánimo de
                  lucro activa desde 2017. En nuestros inicios empezamos con la
                  actividad principal de apadrinar, adoptar y rescatar animales
                  salvajes y de compañía. A raíz de la experiencia adquirida
                  como profesionales del sector, en 2017, decidimos iniciar un
                  proceso de transformación interno. Sabíamos que había llegado
                  el momento de poner nuestro conocimiento y recursos para
                  incidir en las causas de forma más estratégica trabajando
                  desde la acción en el ámbito social, legislativo y educativo.
                </Card.Text>
                <Card.Text>
                  Promover el respeto por los animales en el ámbito social,
                  legal y educativo. Dirigimos proyectos de sensibilización que
                  plantean alternativas a los sectores empresariales que directa
                  o indirectamente causan sufrimiento a los animales.
                </Card.Text>
                <Card.Text>
                  <strong>Ámbito pedagógico:</strong> promovemos acciones
                  formativas que fomenten la empatía y el respeto por los
                  animales en la educación infantil, primaria y en la
                  universidad.
                </Card.Text>
                <Card.Text>
                  <strong>Ámbito legal:</strong> velamos por el cumplimiento de
                  la actual legislación y colaboramos con las autoridades e
                  instituciones para instaurar normativas más respetuosas con
                  los animales.
                </Card.Text>
                <Card.Text>
                  <strong>Ámbito social:</strong> facilitamos información y
                  asesoramiento técnico y jurídico a los distintos agentes
                  sociales sobre protección animal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card className="ml-5 mt-5 mb-5" id="mainContainer">
              <Card.Body>
                <Card.Title>¿Sabes todo sobre los perros?</Card.Title>
                <Card.Text>
                  Aunque no ocurre con todos, la mayoría de perros son
                  vigilantes por naturaleza. Probablemente no será la primera
                  vez que ante un mínimo ruido en la puerta tu perro empieza a
                  ladrar de forma exaltada preguntándose quién debe haber ahí...
                  A veces pueden ser un poco persistentes en su intento por
                  recibir atenciones besándote en exceso hasta que llenan tu
                  cara de dulces babas. A veces incluso se pueden llegar a
                  exceder metiendo su lengua dentro de tu nariz o boca.
                </Card.Text>
                <Card.Text>
                  Aunque tu perro sea adulto o incluso de edad avanzada siempre
                  va a comportarse como un bebé, es una de las cualidades más
                  dulces más dulces que tienen los perros: son muy activos y
                  juguetones. Encuentra el tipo de juguete perfecto para él y
                  anímalo siempre a mantener esta actitud divertida.
                </Card.Text>
                <Card.Text>
                  Lo cierto es que todos sabemos que ocurre cuando un perro
                  escucha el sonido plástico de una bolsa de patatas. Entonces
                  se vuelven tremendamente obedientes y ponen una carita de pena
                  más dulce... A veces no acaban de controlar las distancias.No
                  esperes que tu perro quiera compartir tu propia cama, ¡¿en qué
                  estás pensando?! Si no tienes cuidado acabará echándote fuera.
                </Card.Text>
                <Container>
                  <Row>
                    <Col className="mt-5 mb-5" sm={6}>
                      <Card className="cardContainer">
                        <Card.Img
                          className="imgAdoption"
                          variant="top"
                          src="https://i.ibb.co/C2xGcxN/dog-1.jpg"
                        />
                      </Card>
                    </Col>
                    <Col className="mt-5 mb-5" sm={6}>
                      <Card className="cardContainer">
                        <Card.Img
                          className="imgAdoption"
                          variant="top"
                          src="https://i.ibb.co/RcVcTRC/dog-2.jpg"
                        />
                      </Card>
                    </Col>
                  </Row>
                </Container>
                <Card.Text>
                  Los perros nos quieren tanto que cuando nos vamos se ponen
                  realmente tristes, llegando a mordisquear zapatos o cualquier
                  otro objeto. Los casos más graves ocurren cuando sufren
                  ansiedad por separación. Recuerda que no debes castigarles
                  sino más bien ayudarles a solucionar el problema mediante el
                  uso de kong o ejercicio activo.
                </Card.Text>
                <Card.Text>
                  Los perros pueden asustarse cuando se encuentran un objeto o
                  una mascota que no han visto antes, sus reacciones son
                  realmente graciosas y sorprendentes. Los perros disfrutan
                  muchísimo paseando. Además de hacer sus necesidades, es un
                  momento de diversión para ellos. Cuando tienen ganas de salir
                  pueden sollozar un poquito o insistirte con la correa en la
                  boca.
                </Card.Text>
                <Card.Text>
                  Los perros son quienes más se alegran de tu llegada al hogar,
                  sencillamente se vuelven locos de felicidad.Lo cierto es que
                  cuando un perro te quiere no puede evitar no seguirte allá
                  donde vayas: ya sea para prepararte una tostada o para ir al
                  baño tu perro estará dispuesto a seguirte siempre. A todos
                  lados. Sin excepción.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card className="ml-5 mt-5 mb-5" id="mainContainer">
              <Card.Body>
                <Card.Title>¿Sabes todo sobre los gatos?</Card.Title>
                <Card.Text>
                  Se trata de animales a los que les encanta enroscarse en
                  cualquier lugar cómodo para reposar. Eso sí, no pienses que
                  vas a aburrirte, las posiciones que adoptan son realmente
                  curiosas.
                </Card.Text>
                <Card.Text>
                  Los gatos se limpian constantemente, les encanta ver que su
                  pelo está bonito y peinado como merecen. Pueden llegar a
                  dedicar hasta 4 horas diarias a su limpieza corporal. Eso sí,
                  deberás tener cuidado con las temidas bolas de pelo.
                </Card.Text>
                <Card.Text>
                  Te has preguntado alguna vez ¿Por qué lamen los gatos? Si un
                  gato te lame no significa que esté tratando de acicalarte a ti
                  también, demuestra que te quiere. No te pongas celoso, pero lo
                  cierto es que un peluche puede hacer muy feliz a un gato,
                  convirtiéndose hasta en su mejor amigo. Será que se vuelven
                  calentitos después de abrazarles o que pasan muchas horas con
                  ellos. Sea como sea, lo cierto es que los gatos quieren mucho
                  a sus juguetes.
                </Card.Text>
                <Container>
                  <Row>
                    <Col className="mt-5 mb-5" sm={6}>
                      <Card className="cardContainer">
                        <Card.Img
                          className="imgAdoption"
                          variant="top"
                          src="https://i.ibb.co/7C4GsBP/cat-2.jpg"
                        />
                      </Card>
                    </Col>
                    <Col className="mt-5 mb-5" sm={6}>
                      <Card className="cardContainer">
                        <Card.Img
                          className="imgAdoption"
                          variant="top"
                          src="https://i.ibb.co/5c88xnP/cat-1.jpg"
                        />
                      </Card>
                    </Col>
                  </Row>
                </Container>
                <Card.Text>
                  Si alguien te dice que los gatos no son afectuosos, miente.
                  Sin duda los gatos, aunque más independientes, son animales
                  muy sociales que disfrutarán moviendo la cola. Les encanta
                  observarte, rozarte e incluso dejar que los mimes durante
                  horas. Los gatos tienen mucha personalidad. Si se cansan de
                  ti, te lo harán saber. No te asustes si recibes un mordisco
                  durante una bonita y armoniosa sesión de caricias, simplemente
                  se ha cansado de ti.
                </Card.Text>
                <Card.Text>
                  Aunque cueste diferenciarlos al principio los gatos pueden
                  pronunciar hasta 100 sonidos distintos. Su capacidad sonora es
                  10 veces superior a la de los perros. A diferencia de las
                  personas, tu gato no se despertará de mal humor, todo lo
                  contrario: les encanta despertarte y darte las buenas noches
                  esperando recibir alguna caricia a cambio.
                </Card.Text>
                <Card.Text>
                  Los gatos son dueños y amos de tu vida. Harán lo que quieran.
                  Si decides no abrir la puerta por las mañanas para dejarle
                  entrar puede pasarse un buen rato maullando, mejor hazles
                  caso. Cuando un gato se acostumbra a ti, no puede estar sin
                  ti. Lo cierto es que poco a poco observarás reacciones mucho
                  más atentas a ti, a tu comportamiento y hábitos. Quizás no te
                  seguirá por toda la casa pero maullaran para saludarte y
                  acudirán donde te encuentres. Oscuro, ropa mullida, calor...
                  Los ingredientes necesarios para crear un ambiente de lo más
                  propicio para echar una cabezadita. Los gatos adoran los
                  armarios, si te dejas uno abierto revísalo antes de volver a
                  cerrarlo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Main;
