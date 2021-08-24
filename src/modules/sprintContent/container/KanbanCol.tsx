import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const KanbanCol = () => {
  return <Container></Container>;
};

export default KanbanCol;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background: #f6f3ff;
  border-radius: 20px;
`;
