import { MemberType } from '@/common/types/member.type';
import { Chats, MemberWorkspace } from '@/common/utils/dummy';
import React from 'react';
import styled from 'styled-components';
import { MyInfoTitle } from '../../../common/component/textStyle/MyInfoTitle';
import TaskItem from '../component/TaskItem';

interface TasksProps {
  member: MemberType;
}

const Tasks = ({ member }: TasksProps) => {
  const tasks = Chats.filter(
    (chat) => !!chat.pTag?.find((pTag) => pTag.personId === member.userId)
  ).filter((task) => task !== undefined);
  console.log(tasks);
  return (
    <Container>
      <MyInfo>
        <MyInfoTitle>Tasks</MyInfoTitle>
      </MyInfo>
      <Content>
        <TableTitle>
          <div className="workspace">workspace</div>
          <div className="task">task</div>
          <div className="progress">progress</div>
          <div className="tags">tags</div>
        </TableTitle>
        <TableContent>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </TableContent>
      </Content>
    </Container>
  );
};

export default Tasks;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-height: 270px;
  height: 270px;
  padding: 25px 30px;
`;

const TableTitle = styled.div`
  display: flex;
  height: 30px;
  min-height: 30px;
  color: #552bff;
  font-size: 14px;
  border-bottom: 0.5px solid #606060;
  box-shadow: 0px 12px 8px -5px rgba(0, 0, 0, 0.08);

  .workspace {
    flex: 2 2;
  }
  .task {
    flex: 3 3;
  }
  .progress {
    flex: 1.5 1.5;
  }
  .tags {
    flex: 1.5 1.5;
  }
`;
const MyInfo = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  height: 50px;
`;

const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;
  width: 100%;

  .workspace {
    flex: 2 2;
    display: flex;
    align-items: center;
  }
  .task {
    flex: 3 3;
  }
  .progress {
    flex: 1.5 1.5;
  }
  .tags {
    flex: 1.5 1.5;
  }
`;
