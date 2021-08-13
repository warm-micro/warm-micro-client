import { Chats, Members } from '@/common/utils/dummy';
import React from 'react';
import styled from 'styled-components';
import Author from './Author';

interface ChatProps {
  chatId: string;
  onShowThreads: () => void;
}

const Chat = ({ chatId, onShowThreads }: ChatProps) => {
  const chatInfo = Chats.find((chat) => chat.id === chatId);

  return chatInfo ? (
    <Container>
      <Author authorId={chatInfo.authorId} time={chatInfo.time} />
      <Content>{chatInfo.content}</Content>
      <ThreadBtn onClick={() => onShowThreads()}>답글 보기</ThreadBtn>
    </Container>
  ) : (
    <></>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  word-wrap: break-word;
  font-size: 14px;
  margin: 15px 0;
`;

const ThreadBtn = styled.div`
  font-size: 12px;
  color: #02d824;
  cursor: pointer;
`;
