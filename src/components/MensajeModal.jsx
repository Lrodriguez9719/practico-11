import { Modal, Button } from 'react-bootstrap';

const MensajeModal = ({ mensaje, handleCerrarModal, modal }) => {
  return (
    <Modal show={modal} onHide={handleCerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>Mensaje de bienvenida!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{mensaje}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCerrarModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MensajeModal;