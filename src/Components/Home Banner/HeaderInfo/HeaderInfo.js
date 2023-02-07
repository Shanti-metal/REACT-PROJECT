import React from "react";
import './HeaderInfo.scss';
import Warranty from '../../../assests/warrentyImg.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeaderInfo() {
    return(
        <Container>
        <Row>
          <Col xs><img src={Warranty}/><p>1 YEAR <br/>WARRANTY</p></Col>
          <Col xs><img src={Warranty}/></Col>
          <Col xs><img src={Warranty}/></Col>
        </Row>
      </Container>
    )
}
export default HeaderInfo;