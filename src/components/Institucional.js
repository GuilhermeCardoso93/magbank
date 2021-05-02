import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import './Institucional.scss';
import IconText from './IconText';
import { 
  faMobileAlt,
  faMobile,
  faGlobe,
  faShieldAlt,
 } from '@fortawesome/free-solid-svg-icons';

const Institucional = () => (
    <section className="Institucional text-light py-5">
      <Container>
        <Row>
          <Col xs={12} lg={5}/>
          <Col xs={12} lg={7}>
            <h2 className="institucional_title text-white my-5">Já Nascemos Digital</h2>
            <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </p>
            <IconText icon={faMobileAlt} className="mb-2" color='#fff'>
              Sem fila e sem burocracia
            </IconText>
            <IconText icon={faMobile} className="mb-2" color='#fff'>
              Simples e prático
            </IconText>
            <IconText icon={faGlobe} className="mb-2" color='#fff'>
              Abertura de conta 100% online
            </IconText>
            <IconText icon={faShieldAlt} className="mb-2" color='#fff'>
              Transações mais seguras
            </IconText>
            <Button variant='outline-light' className="mt-5">Abra susa Conta</Button>
          </Col>
        </Row>
      </Container>
    </section>
  
);

export default Institucional;