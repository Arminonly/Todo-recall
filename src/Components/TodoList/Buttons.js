import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { allList, openedList, closedList } from './tooltipSpanText';

export default function Buttons({ todoFiltered }) {
  return (
    <>
      <ButtonGroup aria-label="Basic example" style={{ marginTop: '24px' }}>
        <Tooltip placement="bottom" title={allList}>
          <Button variant="success" onClick={() => todoFiltered('all')}>
            Все
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" title={openedList}>
          <Button variant="primary" onClick={() => todoFiltered(true)}>
            Открытые
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" title={closedList}>
          <Button variant="danger" onClick={() => todoFiltered(false)}>
            Закрытые
          </Button>
        </Tooltip>
      </ButtonGroup>
    </>
  );
}
