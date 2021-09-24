import { Chats, dummySprintThread, Members } from '@/common/utils/dummy';
import React from 'react';
import styled from 'styled-components';
import Author from './Author';

interface ChatProps {
  chatId: string;
  onShowThreads: (chatId: string) => void;
}

const Chat = ({ chatId, onShowThreads }: ChatProps) => {
  const chatInfo = Chats.find((chat) => chat.id === chatId);
  const threadIds = dummySprintThread.find((threads) => threads.chatId === chatId);
  
  return chatInfo ? (
    <Container>
      <Author authorId={chatInfo.authorId} time={chatInfo.time} />
      <Content>
        {chatInfo.content}{' '}
        {chatInfo.pTag?.map((pTag) => {
          const member = Members.find((member) => member.id === pTag.personId);
          return <div className="tag">@{member?.name}</div>;
        })}
        {chatInfo.hTag?.map((hTag) => {
          
          return <div className="tag">#{hTag.name}</div>;
        })}
      </Content>
      <ThreadBtn onClick={() => onShowThreads(chatId)}>
        {threadIds && `답글보기`}
      </ThreadBtn>
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
  .tag {
    color: #552aff;
    margin-left: 5px;
  }
`;

const ThreadBtn = styled.div`
  font-size: 12px;
  color: #02d824;
  cursor: pointer;
`;
