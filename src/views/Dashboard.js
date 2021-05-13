import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss";

const Dashboard = () => (
  <Container className="dashboard py-5">
    <Col xs={12} lg={4}>
      <Row className="d-flex align-content-center mb-5">
        <Col xs={3}>
          <span className="dashboard_user-avatar">
            <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
            <FontAwesomeIcon
              className="dashboard_user-icon"
              icon={faUser}
              size="4x"
              color="#7c7d7e"
            />
          </span>
        </Col>
        <Col xs={9}>
          <h4>Guilherme Cardoso</h4>
          <p className="text-muted">AG: 7768 C/C: 092957</p>
        </Col>
      </Row>
      <Button
        className="dashboard_button dashboard_button--active text-left"
        variant="link"
        size="lg"
        block
      >
        Minha Conta
      </Button>
      <Button
        className="dashboard_button text-left"
        variant="link"
        size="lg"
        block
      >
        Pagamentos
      </Button>
      <Button
        className="dashboard_button text-left"
        variant="link"
        size="lg"
        block
      >
        Extrato
      </Button>
    </Col>
    <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
      <h3 className="my-5">Conta Corrente</h3>
      <h6>
        <small>
          <strong>Saldo em conta Corrente</strong>
        </small>
      </h6>
      <h4 className="text-success mb-4">
        <small>R$</small> 3.500<small>,00</small>
      </h4>
      <h6>
        <small>
          <strong>Cheque Especial</strong>
        </small>
      </h6>
      <p className="mb-0">Limite Disponível </p>
      <p className="mb-4">R$ 5.000,00</p>
      <Button variant="secondary">Ver Extrato</Button>
    </Col>
    <Col xs={12} lg={5}></Col>
  </Container>
);

export default Dashboard;
