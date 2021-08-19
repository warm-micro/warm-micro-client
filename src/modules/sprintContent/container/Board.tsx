import { SprintTitle } from '@/common/component/textStyle/SprintTitle';
import { ViewEnum } from '@/common/types/enums/ViewEnum';
import { dummySprint, dummySprintChat } from '@/common/utils/dummy';
import Router, { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from '../components/Chat';
import Textarea from '../components/Textarea';
import ViewBtn from '../components/ViewBtn';
import ChatList from './ChatList';
import Kanban from './Kanban';

interface BoardProps {
  onShowThreads: (chatId: string) => void;
}

const Board = ({ onShowThreads }: BoardProps) => {
  const [timeSplit, setTimeSplit] = useState(new Date());
  const router = useRouter();
  const sprintId = router.query.sprint;
  const sprint = dummySprint.find((sp) => sp.id === sprintId);
  const chatIdList = dummySprintChat.find(
    (spChat) => spChat.sprintId === sprintId
  )?.chats;

  const [view, setView] = useState(ViewEnum.BOARD);
  const onViewChange = () => {
    if (view === ViewEnum.BOARD) {
      setView(ViewEnum.KANBAN);
    } else {
      setView(ViewEnum.BOARD);
    }
  };

  return (
    <Container>
      <BoardHeader>
        <SprintTitle>
          SP{sprint ? sprint.order + 1 : 0}# {sprint?.title}
        </SprintTitle>
        
        <ViewBtn view={view} onViewChange={onViewChange}></ViewBtn>
      </BoardHeader>
      {view === ViewEnum.BOARD ? (
        chatIdList &&
        sprint && (
          <ChatList
            chatIdList={chatIdList}
            sprint={sprint}
            onShowThreads={onShowThreads}
          />
        )
      ) : (
        <Kanban />
      )}
    </Container>
  );
};

export default Board;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

