import { Chats } from '@/common/utils/dummy';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { ProgressEnum } from '../utils/ProgressEnum';

interface ProgressKanbanProps {
  chatIdList: string[];
}

const progressList = [
  ProgressEnum.BACKLOG,
  ProgressEnum.WORKINPROGRESS,
  ProgressEnum.REVIEW,
  ProgressEnum.FINISHED,
];

const ProgressKanban = ({ chatIdList }: ProgressKanbanProps) => {
  const backlogCols = chatIdList.map((id) =>
    Chats.filter((chat) => chat.id == id && chat.progress == ProgressEnum.BACKLOG)
  );
  const workInProgressCols = chatIdList.map((id) =>
    Chats.filter((chat) => chat.id == id && chat.progress == ProgressEnum.WORKINPROGRESS)
  );
  const reviewCols = chatIdList.map((id) =>
    Chats.filter((chat) => chat.id == id && chat.progress == ProgressEnum.REVIEW)
  );
  const finishedCols = chatIdList.map((id) =>
    Chats.filter((chat) => chat.id == id && chat.progress == ProgressEnum.FINISHED)
  );

  const progressMap = {
    [ProgressEnum.BACKLOG]: { title: 'Backlog', list: backlogCols },
    [ProgressEnum.WORKINPROGRESS]: {
      title: 'Work in Progress',
      list: workInProgressCols,
    },
    [ProgressEnum.REVIEW]: { title: 'In Review', list: reviewCols },
    [ProgressEnum.FINISHED]: { title: 'Finished', list: finishedCols },
  };

  return progressList.map((progress, index) => (
    <Draggable draggableId={progress} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        ></div>
      )}
    </Draggable>
  ));
};

export default ProgressKanban;
