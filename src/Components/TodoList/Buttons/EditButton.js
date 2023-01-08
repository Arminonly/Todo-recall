import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'antd';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import style from './ButtonStyle.module.css'

const colors = ['green'];

export default function EditButton({ editTodo, item }) {
  return (
    <div>
      {colors.map(color =>
        <Tooltip title="Отредактировать?" color={color} key={color}>
          <Button
            size="sm"
            variant="success"
            onClick={() => editTodo(item.id, item.title)}
            className={style.btn}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        </Tooltip>
      )}
    </div>
  );
}
