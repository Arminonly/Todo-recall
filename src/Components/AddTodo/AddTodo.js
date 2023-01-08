import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import s from './AddTodo.module.css';

export default function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState('');
  const id = uuid();
  function saveTodo() {
    if (value) {
      setTodo([
        ...todo,
        {
          id: id,
          title: value,
          status: true
        }
      ]);
      setValue('');
    }
  }
  return (
    <Row>
      <Col className={s.addTodoForm}>
        <Form.Control
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          placeholder="Введите задачу"
        />
        <Button onClick={saveTodo} className={s.btn}>
          Сохранить
        </Button>
      </Col>
    </Row>
  );
}
