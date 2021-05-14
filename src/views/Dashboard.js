import React from "react";
import { Container, Row, Col, Button, Tabs, Tab, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss";

const Dashboard = () => {
  const data = [
    {date: "22/07", description: "SUPERMERCADO 24h 012345", value: "300,00" },
    {date: "25/07", description: "SAQUE  011212345", value: "150,00" },
    {date: "15/07", description: "CARTÃO CRÉDITO 24h 012345",value: "350,00"},
    {date: "15/07",description: "CARTÃO CRÉDITO 24h 01234", value: "125,00"},
    { date: "18/07", description: "NETFLIX  21212", value: "21,00" },
  ];

  const future = [
    {date: "22/08", description: "CARTÃO DE CRÉTIDO 012345", value: "450,00" },
    {date: "24/08", description: "IMAGINE  011212345", value: "250,00" },
    {date: "15/08", description: "OVERWATCH 012345",value: "69,00"},
    {date: "15/08",description: "CARTÃO CRÉDITO 24h 01234", value: "125,00"},
    { date: "18/08", description: "NETFLIX  21212", value: "21,00" },
  ];

  return (
    <Container className='dashboard py-5'>
    <Row>
      <Col xs={12} lg={4}>
        <Row className="align-content-center mb-5">
          <Col xs={3}>
            <span className="dashboard_user-avatar">
              <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
              <FontAwesomeIcon
                className="dashboard_user-icon"
                icon={faUser}
                size="3x"
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
      <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">
        <Tabs className="mt-lg-5 pt-5" defaultActiveKey="latest" >
          <Tab eventKey="latest" title="Últimos Lançamentos">
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {data.map(({ date, description, value }) => (
                  <tr>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="future" title="Lançamentos Futuros">
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {future.map(({ date, description, value }) => (
                  <tr>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </Row>
    </Container>
  );
};
export default Dashboard;
