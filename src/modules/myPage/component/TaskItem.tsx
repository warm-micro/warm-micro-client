import WorkspaceImg from '@/common/component/img/WorkspaceImg';
import { ChatType } from '@/common/types/chat.type';
import { dummy } from '@/common/utils/dummy';
import { ProgressEnum } from '@/modules/sprintContent/utils/ProgressEnum';
import React from 'react';
import styled from 'styled-components';

interface TaskItemProps {
  task: ChatType;
}

const progressMap = {
  [ProgressEnum.BACKLOG]: { title: 'Backlog' },
  [ProgressEnum.INPROGRESS]: {
    title: 'In Progress',
  },
  [ProgressEnum.REVIEW]: { title: 'In Review' },
  [ProgressEnum.FINISHED]: { title: 'Finished' },
};

const TaskItem = ({ task }: TaskItemProps) => {
  const workspace = dummy.filter((work) => work.sprintList.includes(task.sprintId))[0];
  return (
    <Container>
      <div className="workspace">
        <WorkspaceImg url={workspace.url} />
        <div className="workspacetitle">{workspace.name}</div>
      </div>
      <div className="task">{task.title}</div>
      <div className="progress">{progressMap[task.progress].title}</div>
      <div className="tags">{task.hTag?.map((tag) => `#${tag.name}`)}</div>
    </Container>
  );
};

export default TaskItem;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  min-height: 60px;
  font-size: 14px;
  color: #000000;
  border-bottom: 0.5px solid #606060;
  .task,
  .workspacetitle {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-wrap: break-word;
    white-space: pre-line;
    text-overflow: ellipsis;
  }
  img {
    margin-right: 7px;
  }
`;
