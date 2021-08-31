import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './container/Board';
import Header from './container/Header';
import Thread from './container/Thread';

const SprintContent = () => {
  const [value, setValue] = useState('');
  const [showThread, setShowThread] = useState(false);
  const [threadChatId, setThreadChatId] = useState('');

  const onShowThreads = (chatId: string) => {
    if (threadChatId === chatId) {
      setShowThread(!showThread);
    } else {
      setThreadChatId(chatId);
    }
  };
  return (
    <Container>
      <Header
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSearch={() => {}}
      />
      <BoardContainer>
        <Board onShowThreads={onShowThreads} setShowThread={setShowThread} />
        <Thread chatId={threadChatId} showThread={showThread} />
      </BoardContainer>
    </Container>
  );
};

export default SprintContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  background-color: #faf9ff;
`;
const BoardContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 80px);
`;