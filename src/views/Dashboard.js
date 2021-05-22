import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";

import "./Dashboard.scss";

const Dashboard = () => {
  const [ activeLink, setActiveLink ] = useState(0);

  const links = [
    { text: "Minha Conta", path: "/dashboard", exact: true },
    { text: "Pagamentos", path: "/dashboard/payments" },
    { text: "Extrato", path: "/dashboard/history" },
  ];

  const data = {
    latestBalance: [
      {
        date: "22/07",
        description: "SUPERMERCADO 24h 012345",
        value: "300,00",
      },
      { date: "25/07", description: "SAQUE  011212345", value: "150,00" },
      {
        date: "15/07",
        description: "CARTÃO CRÉDITO 24h 012345",
        value: "350,00",
      },
      {
        date: "15/07",
        description: "CARTÃO CRÉDITO 24h 01234",
        value: "125,00",
      },
      { date: "18/07", description: "NETFLIX  21212", value: "21,00" },
    ],

    futureBalance: [
      {
        date: "22/08",
        description: "CARTÃO DE CRÉTIDO 012345",
        value: "450,00",
      },
      { date: "24/08", description: "IMAGINE  011212345", value: "250,00" },
      { date: "15/08", description: "OVERWATCH 012345", value: "69,00" },
      {
        date: "15/08",
        description: "CARTÃO CRÉDITO 24h 01234",
        value: "125,00",
      },
      { date: "18/08", description: "NETFLIX  21212", value: "21,00" },
    ],

    history: [
      {
        date: "17/07",
        description: "SAQUE 24 HORAS",
        value: "200,00-",
        saldo:""
      },
      {
        date: "17/07",
        description: "SALDO DO DIA",
        value: "",
        saldo:"2.780,00"
      },
      {
        date: "19/07",
        description: "ESTACIONAMENTO",
        value: "12,00-",
        saldo:""
      },
      {
        date: "19/07",
        description: "COMPRA NA INTERNET",
        value: "450,00-",
        saldo:""
      },
      {
        date: "19/07",
        description: "SALDO DO DIA",
        value: "",
        saldo:"2.318,00"
      },
      {
        date: "20/07",
        description: "SUPERMERCADO",
        value: "275,90-",
        saldo:""
      },
      {
        date: "20/07",
        description: "ESTACIONAMENTO",
        value: "12,00-",
        saldo:""
      },
      {
        date: "20/07",
        description: "SHOPPING",
        value: "180,00-",
        saldo:""
      },
      {
        date: "20/07",
        description: "SALDO DO DIA",
        value: "",
        saldo:"1.851,00"
      },
      {
        date: "21/07",
        description: "SUPERMERCADO",
        value: "275,90-",
        saldo:""
      },
      {
        date: "21/07",
        description: "DEPOSITO",
        value:  "1.000,00",
        saldo:""
      },
      {
        date: "20/07",
        description: "SALDO DO DIA",
        value: "",
        saldo:"2.576,00"
      },
    ],
  };

  return (
    <Container className="dashboard py-5">
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
          { links.map(({ text, path, exact }, key)=>(
 <Link  className='dashboard__link' to={path} exact={exact ? exact : false } key={key}>
 <Button
    className={`dashboard_button text-left ${key === activeLink ? 'dashboard_button--active' : ''}`}
   variant="link"
   size="lg"
   block
   onClick={() => setActiveLink (key)}
 >
   {text}
 </Button>
</Link>
          ))}
        </Col>
        <Switch>
          <Route path="/dashboard/history">
            <AccountHistory data={data}/>
          </Route>
          <Route path="/dashboard/payments">
            <AccountPayments/>
          </Route>
          <Route path="/dashboard">
            <AccountBalance data={data} />
          </Route>
        </Switch>
      </Row>
    </Container>
  );
};
export default Dashboard;
