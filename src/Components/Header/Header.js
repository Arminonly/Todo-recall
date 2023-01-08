import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './Header.module.css';

export default function Header() {
  return (
    <Row>
      <Col>
        {' '}<div className={s.root}>Todo List</div>
      </Col>
    </Row>
  );
}
