import React from 'react';
import styled from 'styled-components';
import { FilterEnum } from '../utils/FilterEnum';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { onDragEnd } from '../utils/onDragEnd';
import { ProgressEnum } from '../utils/ProgressEnum';
import KanbanCol from './KanbanCol';
import { dummySprintChat } from '@/common/utils/dummy';
import ProgressKanban from './ProgressKanban';
import TagKanban from './TagKanban';
import PersonKanban from './PersonKanban';

interface KanbanProps {
  filter: FilterEnum;
  chatIdList: string[];
}

const Kanban = ({ filter, chatIdList }: KanbanProps) => {
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
              {...provided.droppableProps}
            >
              {filter === FilterEnum.PROGRESS ? (
                <ProgressKanban chatIdList={chatIdList} />
              ) : filter === FilterEnum.TAG ? (
                <TagKanban />
              ) : (
                <PersonKanban />
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default Kanban;


const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 100%;
  min-height: 0px !important;
`;