import React from "react";
import { Col, Button, Tabs, Tab, Form, Table } from "react-bootstrap";

const AccountPayments = () => (
  <>
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
    <h3 className='mt-4'>Pagamentos</h3>
      <Tabs className="mt-5 pt-lg-3" defaultActiveKey="latest">
        <Tab eventKey="boleto" title="Boleto">
          <Form>
            <Form.Group controlId="formBarCode" className='my-5'>
              <Form.Label>Código de Barras</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insira o Código de Barras"
              />
            </Form.Group>
            <Form.Group controlId="formPaymentType" className='mb-5' >
              <Form.Label><strong>Forma de Pagamento</strong></Form.Label>
              <div className='d-flex'>
              <Form.Check type="radio" name='paymentType' id="debit" label="Débito em Conta Corrente"/>
              <Form.Check type="radio" name='paymentType' className='ml-4' id="credit" label="Cartão de Crédito" />
              </div>
            </Form.Group>
            <Button variant='success'>Continuar</Button>
          </Form>
        </Tab>
        <Tab eventKey="transfer" title="Transfêrencia">
        </Tab>
      </Tabs>
    </Col>
  </>
);

export default AccountPayments;
