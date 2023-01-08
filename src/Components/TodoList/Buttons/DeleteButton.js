import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'antd';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const colors = ['red'];
export default function DeleteButton({ deleteTodo, item }) {
  return (
    <>
      {colors.map(color =>
        <Tooltip title="Удалить?" color={color} key={color}>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => deleteTodo(item.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </Tooltip>
      )}
    </>
  );
}
