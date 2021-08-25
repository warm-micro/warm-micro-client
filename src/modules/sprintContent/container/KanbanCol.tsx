import { ChatType } from '@/common/types/chat.type';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Card from '../components/Card';

interface KanbanColProps {
  id: string;
  cardList: (ChatType)[];
}

const KanbanCol = ({ id, cardList }: KanbanColProps) => {
  return (
    <Container>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
            {...provided.droppableProps}
          >
            {cardList.map((card, index) => (
              card.isCard && <Card key={card.id} id={`${id}-${card.id}`} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  );
};

export default KanbanCol;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  min-height: 100px;
  background: #f6f3ff;
  border-radius: 20px;
  margin-top: 10px;
`;
