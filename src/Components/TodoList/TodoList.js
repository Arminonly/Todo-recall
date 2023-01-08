import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'antd';
import { faEdit, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import s from './TodoList.module.css';
import Buttons from './Buttons';
import SaveButton from './Buttons/SaveButton';
import DeleteButton from './Buttons/DeleteButton';


export default function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState(todo);

  useEffect(
    () => {
      setFiltered(todo);
    },
    [todo]
  );

  function todoFiltered(status) {
    if (status === 'all') {
      setFiltered(todo);
    } else {
      let newTodo = [...todo].filter(item => item.status === status);
      setFiltered(newTodo);
    }
  }

  function deleteTodo(id) {
    let newTodo = [...todo].filter(item => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter(item => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);

  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map(item => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
localStorage.setItem('saveList', JSON.stringify(newTodo));
  }

  return (
    <div>
      <Row>
        <Col className={s.filter}>
          <Buttons todoFiltered={todoFiltered} />
        </Col>
      </Row>

      {filtered.map(item =>
        <div key={item.id} className={s.listItems}>
          {edit === item.id
            ? <div>
                <input value={value} onChange={e => setValue(e.target.value)} />
              </div>
            : <div className={!item.status ? s.close : ''}>
                {item.title}
              </div>}

          {edit === item.id
            ? <div>
                <SaveButton saveTodo={saveTodo} item={item} />
              </div>
            : <div>
                <DeleteButton deleteTodo={deleteTodo} item={item} />

                <Tooltip title="Отредактировать?" color={'purple'}>
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => editTodo(item.id, item.title)}
                    className={s.btn}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Tooltip>

                <Button
                  size="sm"
                  onClick={() => statusTodo(item.id)}
                  className={s.btn}
                >
                  {item.status
                    ? <Tooltip title="Отметить, как выполненное" color={'gold'}>
                        {' '}<FontAwesomeIcon icon={faLockOpen} />
                      </Tooltip>
                    : <Tooltip
                        title="Вернуть, если не выполнено"
                        color={'volcano'}
                      >
                        <FontAwesomeIcon icon={faLock} />
                      </Tooltip>}
                </Button>
              </div>}
        </div>
      )}
    </div>
  );
}
