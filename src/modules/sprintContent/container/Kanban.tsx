import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { FilterEnum } from '../utils/FilterEnum';
import { DragDropContext, Droppable, Draggable, DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { ProgressEnum } from '../utils/ProgressEnum';
import KanbanCol from './KanbanCol';
import { Chats, dummySprintChat } from '@/common/utils/dummy';
import ProgressKanban from './ProgressKanban';
import TagKanban from './TagKanban';
import PersonKanban from './PersonKanban';
import { ChatType } from '@/common/types/chat.type';

interface KanbanProps {
  filter: FilterEnum;
  chatIdList?: string[];
}

const reorder = (list: ChatType[], startIndex: number, endIndex: number): ChatType[] => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export interface Col {
    title: string, 
    list: ChatType[]
  }
export interface MapType {
  [key: string] : Col
}
const generateLists = (chatIdList: string[]) => {
  const backlogCols = chatIdList
    .map(
      (id) =>
        Chats.filter((chat) => chat.id == id && chat.progress == ProgressEnum.BACKLOG)[0]
    )
    .filter((card) => card !== undefined);
  const workInProgressCols = chatIdList
    .map(
      (id) =>
        Chats.filter(
          (chat) => chat.id == id && chat.progress == ProgressEnum.INPROGRESS
        )[0]
    )
    .filter((card) => card !== undefined);
  const reviewCols = chatIdList
    .map(
      (id) =>
        Chats.filter((chat) => chat.id == id && chat.progress == ProgressEnum.REVIEW)[0]
    )
    .filter((card) => card !== undefined);
  const finishedCols = chatIdList
    .map(
      (id) =>
        Chats.filter((chat) => chat.id == id && chat.progress == ProgressEnum.FINISHED)[0]
    )
    .filter((card) => card !== undefined);
     const progressMap: MapType = {
       backlog: { title: 'Backlog', list: backlogCols },
       inprogress: {
         title: 'Work in Progress',
         list: workInProgressCols,
       },
       review: { title: 'In Review', list: reviewCols },
       finished: { title: 'Finished', list: finishedCols },
     };
     return progressMap;
};
const removeFromList = (list:Col, index: number) => {
  const result = Array.from(list.list);
  const [removed] = result.splice(index, 1);
  const newlist: Col ={...list, list: result};
  return {removed: removed, newlist: newlist} as {removed: ChatType, newlist: Col};
};

const addToList = (list:Col, index:number, element:ChatType) => {
  const result = Array.from(list.list);
  result.splice(index, 0, element);
  return {...list, list:result};
};

const Kanban = ({ filter, chatIdList }: KanbanProps) => {
  const [elements, setElements] = useState(generateLists(chatIdList? chatIdList: []));
  const onDragEnd = (result: DropResult) => {
     console.log(result);
    if (!result.destination) {
      return;
    }
   
    const listCopy: MapType = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const {removed, newlist} = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newlist;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removed
    );
  

    setElements(listCopy);
  };

  console.log(elements);
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
                    elements = {elements}
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
