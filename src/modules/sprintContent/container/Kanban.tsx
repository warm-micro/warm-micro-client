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
  chatIdList?: string[];
}

const Kanban = ({ filter, chatIdList }: KanbanProps) => {
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1" direction="horizontal" type="columns">
          {(provided, snapshot) => (
            <Content
              ref={provided.innerRef}
              // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
              {...provided.droppableProps}
            >
              {chatIdList &&
                (filter === FilterEnum.PROGRESS ? (
                  <ProgressKanban
                    show={filter === FilterEnum.PROGRESS}
                    chatIdList={chatIdList}
                  />
                ) : filter === FilterEnum.TAG ? (
                  <TagKanban show={filter === FilterEnum.TAG} chatIdList={chatIdList} />
                ) : (
                  <PersonKanban
                    show={filter === FilterEnum.PERSON}
                    chatIdList={chatIdList}
                  />
                ))}
              {provided.placeholder}
            </Content>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default Kanban;


const Container = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100%;

  /* min-height: 0px !important; */
`;
const Content = styled.div`
  display: flex;
  /* width: 100%; */
  height: 100%;
`;