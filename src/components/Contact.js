import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Contact() {
  return (
    <>
      <h2>Formulario de Contacto</h2>
      <br></br>
      <Form
        className="card"
        style={{ width: "70rem", margin: ".35rem", padding: ".85rem" }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nombres: </Form.Label>
            <Form.Control type="email" placeholder=" " />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>DNI:</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Edad:</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Telefono:</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Direccion:</Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default Contact;
