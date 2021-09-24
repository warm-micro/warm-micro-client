import { SendBtn } from '@/common/component/button/SendBtn';
import { Title } from '@/common/component/textStyle/Title';
import { Chats, dummySprintThread, dummyThreads } from '@/common/utils/dummy';
import React, { useState } from 'react';
import styled from 'styled-components';
import Author from '../components/Author';
import Textarea from '../components/Textarea';

interface ThreadProps {
  chatId?: string;
  showThread: boolean;
}

const Thread = ({ chatId, showThread }: ThreadProps) => {
  const chatInfo = Chats.find((chat) => chat.id === chatId);
  const threadIds = dummySprintThread.find((threads) => threads.chatId === chatId);
  const threadContents = dummyThreads.filter(
    (dummyThread) => dummyThread.chatId === chatId
  );
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Container showThread={showThread}>
      <ThreadTitle>Thread</ThreadTitle>
      {chatInfo && (
        <Chat>
          <Author authorId={chatInfo.authorId} time={chatInfo.time} />
          <Content>{chatInfo.content}</Content>
          <ThreadBtn>{show ? threadIds?.threads.length:'1' }개의 답글</ThreadBtn>
        </Chat>
      )}
      <ThreadContainer>
        {threadContents.map((thread) =>
          thread.id !== 'thread1' || show ? (
            <Chat key={thread.id}>
              <Author authorId={thread.authorId} time={thread.time} />
              <Content>{thread.content}</Content>
            </Chat>
          ) : (
            <></>
          )
        )}
      </ThreadContainer>
      <InputContainer>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`leave thread`}
        />
        <SubmitBtn onClick={() => setShow(true)} show={value.length > 0}>
          SEND
        </SubmitBtn>
      </InputContainer>
    </Container>
  );
};

export default Thread;

const Container = styled.div<ThreadProps>`
  display: flex;
  flex-direction: column;
  width: 0px;
  padding-top: 30px;
  background: #ffffff;
  border-radius: 20px;
  transition: width 0.5s ease-in-out, opacity 0.8s ease-in-out;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  ${(props) =>
    props.showThread
      ? `width: 380px; visibility: visible; opacity: 1; margin-left: 25px;`
      : ` width: 0px; visibility: hidden; opacity: 0; padding: 30px 0;`}
`;

const ThreadTitle = styled(Title)`
  padding: 0 20px;
`;

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px;
  border-bottom: 0.5px solid #888888;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  word-wrap: break-word;
  font-weight: 400;
  font-size: 14px;
  margin-top: 15px;
  line-height: 21px;
`;

const ThreadBtn = styled.div`
  font-size: 12px;
  color: #02d824;
  cursor: pointer;
  margin-top: 15px;
`;

const ThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
  border-left: 3px solid #c4c4c4;
`;
const InputContainer = styled.div`
  padding: 20px;
  margin-top: auto;
  display: flex;
  align-items: center;
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.08);
`;
interface ButtonProps {
  show: boolean;
}
const SubmitBtn = styled(SendBtn)<ButtonProps>`
  width: 0px;
  transition: width 0.5s ease-in-out, opacity 0.8s ease-in-out;
  ${(props) =>
    props.show
      ? `width: 120px; visibility: visible; opacity: 1; margin-left: 20px;`
      : `width: 0px; visibility: hidden; opacity: 0;`}
`;
