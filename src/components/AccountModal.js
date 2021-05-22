import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

const AccountModal = ({ show, handleClose, auth }) => { 
    const history = useHistory();
    const [name, setName] = useState();

    const handleSubmit = () => {
      auth.login(name,'12345', history.push('/dashboard'));
      handleClose();
    }

  return  (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Abra sua Conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Seu Nome</Form.Label>
          <Form.Control type="text" placeholder="Seu Nome" value={name} onChange={(e) => setName(e.currentTarget.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Seu E-mail</Form.Label>
          <Form.Control type="email" placeholder="Seu e-mail" />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label className="mr-sm-2" htmlFor="FormCitySelect" srOnly>
            Preference
          </Form.Label>
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="FormCitySelect"
            custom
          >
            <option value="0">Brasília</option>
            <option value="1">Rio de Janeiro </option>
            <option value="2">São Paulo</option>
            <option value="3">Curitiba</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Eu li e concordo com termos de uso"
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant='secondary' onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant='primary' onClick={handleSubmit}>
        Criar Conta
      </Button>
    </Modal.Footer>
  </Modal>
);
};
export default AccountModal;
