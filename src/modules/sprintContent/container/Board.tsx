import { SprintTitle } from '@/common/component/textStyle/SprintTitle';
import { ViewEnum } from '@/common/types/enums/ViewEnum';
import { Chats, dummy, dummySprint, dummySprintChat } from '@/common/utils/dummy';
import Router, { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from '../components/Chat';
import Textarea from '../components/Textarea';
import ViewBtn from '../components/ViewBtn';

const Board = () => {
  const [showThreads, setShowTreads] = useState(false);
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

  const onShowThreads = () => {
    setShowTreads(!showThreads);
  };

  return (
    <Container>
      <BoardHeader>
        <SprintTitle>
          SP{sprint ? sprint.order + 1 : 0}# {sprint?.title}
        </SprintTitle>
        <ViewBtn view={view} onViewChange={onViewChange}></ViewBtn>
      </BoardHeader>
      <BoardContainer>
        <ChatContainer>
          {chatIdList?.map((chatId) => (
            <Chat key={chatId} chatId={chatId} onShowThreads={onShowThreads} />
          ))}
        </ChatContainer>
        <InputContainer>
          <Textarea
            placeholder={`leave message to ${sprint ? sprint.order + 1 : 0}# ${
              sprint?.title
            }`}
          />
        </InputContainer>
      </BoardContainer>
    </Container>
  );
};;;

export default Board;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const InputContainer = styled.div`
  padding: 20px;
  margin-top: auto;
  display: flex;
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.08);
`;
