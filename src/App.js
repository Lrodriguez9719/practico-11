import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import MensajeModal from './components/MensajeModal';

const generarMensaje = (nombre, edad) => {
  if (edad < 18) {
    return `Hola ${nombre}, eres muy joven para usar esta aplicación.`;
  } else {
    return `Bienvenido ${nombre}, gracias por usar nuestra aplicación.`;
  }
};

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [modal, setModal] = useState(false);

  const handleMostrarModal = () => setModal(true);
  const handleCerrarModal = () => setModal(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // setNombre('');
    // setEdad('');
    handleMostrarModal();
  };

  return (
    <>
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center" style={{ background: "#f8f9fa" }}>
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={5} lg={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="mb-4 text-center">Practico Nro. 11 - EducacionIT</Card.Title>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                  <Form.Label>Edad</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese su edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!nombre || !edad}
                  >
                    Enviar datos
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <MensajeModal
      mensaje={generarMensaje(nombre, edad)}
      modal={modal}
      handleCerrarModal={handleCerrarModal}
    />
    </>
  );
}

export default App;
