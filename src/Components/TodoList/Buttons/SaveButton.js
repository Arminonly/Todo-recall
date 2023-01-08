import React from 'react';
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'antd';
import {faSave} from '@fortawesome/free-solid-svg-icons';
const colors = ['orange'];
    
export default function SaveButton({saveTodo,item}){
  return (
    <>
      {colors.map((color) => (
        <Tooltip title="Сохранить?" color={color} key={color}>
          <Button size="sm" onClick={() => saveTodo(item.id)}>
            <FontAwesomeIcon icon={faSave} />
          </Button>
        </Tooltip>
       ))}
    </>
  );
}


