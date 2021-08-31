import { KanbanTitle } from '@/common/component/textStyle/KanbanTitle';
import { Chats } from '@/common/utils/dummy';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { ProgressEnum } from '../utils/ProgressEnum';
import KanbanCol from './KanbanCol';

interface ProgressKanbanProps {
  show: boolean;
  chatIdList: string[];
}

const progressList = [
  ProgressEnum.BACKLOG,
  ProgressEnum.INPROGRESS,
  ProgressEnum.REVIEW,
  ProgressEnum.FINISHED,
];

const ProgressKanban = ({show, chatIdList }: ProgressKanbanProps) => {
  const backlogCols = chatIdList.map((id) =>
    Chats.filter((chat) => chat.id == id && chat.progress == ProgressEnum.BACKLOG)[0]
  ).filter(card => card !== undefined);
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

  // console.log(backlogCols,workInProgressCols,reviewCols,finishedCols);
    

  const progressMap = {
    [ProgressEnum.BACKLOG]: { title: 'Backlog', list: backlogCols },
    [ProgressEnum.INPROGRESS]: {
      title: 'Work in Progress',
      list: workInProgressCols,
    },
    [ProgressEnum.REVIEW]: { title: 'In Review', list: reviewCols },
    [ProgressEnum.FINISHED]: { title: 'Finished', list: finishedCols },
  };

  return (
    <Container show={show}>
      {progressList.map((progress, index) => (
        <Draggable key={progress} draggableId={progress} index={index}>
          {(provided, snapshot) => (
            <ColContainer
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            > 
              <KanbanTitle>{progressMap[progress].title}</KanbanTitle>
              {!!progressMap[progress].list && <KanbanCol id={progress} cardList={progressMap[progress].list} />}
            </ColContainer>
          )}
        </Draggable>
      ))}
    </Container>
  );
};

export default ProgressKanban;

const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-width: 250px;
  padding: 30px 30px 0 0;
  flex: 0 0 auto;
`;

interface ContainerProps{
  show: boolean;
}

const Container = styled.div<ContainerProps>`
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-x: scroll;
  white-space: nowrap;
  scroll-behavior: smooth;
  transition: width 0.5s ease-in-out, opacity 0.8s ease-in-out;
  ${(props) =>
    props.show
      ? `display: flex; visibility: visible; opacity: 1;`
      : `display: none; visibility: hidden; opacity: 0;`}
`;