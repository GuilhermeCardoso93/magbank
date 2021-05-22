import React from 'react';
import { Col, Table } from 'react-bootstrap';
import './CreditCard.scss';

const AccountHistory = ({ data }) => {
  const { history } =  data;

  return (
    <>
    <Col xs={12} lg={8} className='mt-lg-5 pt-lg-4'>
      <h3 className='my-5'>Extrato de Conta Corrente</h3>
      <Table striped borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor (R$)</th>
                  <th>Saldo (R$)</th>
                </tr>
              </thead>
              <tbody>
                {history.map(({ date, description, value, saldo }) => (
                  <tr>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td className="history-value"><strong>{value}</strong></td>
                    <td><strong>{saldo}</strong></td>
                  </tr>
                ))}
              </tbody>
            </Table>
    </Col>
    </>
  )

};


export default AccountHistory;