import { SendBtn } from '@/common/component/button/SendBtn';
import { SprintElementType } from '@/common/types/sprintElement.type';
import { dummySprintChat } from '@/common/utils/dummy';
import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from '../components/Chat';
import Textarea from '../components/Textarea';

interface ChatsProps {
  chatIdList?: string[];
  sprint?: SprintElementType;
  onShowThreads: (chatId: string) => void;
}

const ChatList = ({ chatIdList, sprint, onShowThreads }: ChatsProps) => {
  const [value, setValue] = useState('');
  return (
    <ChatsContainer>
      <ChatContainer>
        {chatIdList?.map((chatId) => (
          <Chat key={chatId} chatId={chatId} onShowThreads={onShowThreads} />
        ))}
      </ChatContainer>
      <InputContainer>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`leave message to ${sprint ? sprint.order + 1 : 0}# ${
            sprint?.title
          }`}
        />
        <SubmitBtn show={value.length > 0}>SEND</SubmitBtn>
      </InputContainer>
    </ChatsContainer>
  );
};

export default ChatList;

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-height: 0px !important;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  /* min-height: min-content; */
`;

const InputContainer = styled.div`
  padding: 20px;
  margin-top: auto;
  display: flex;
  align-items: center;
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.08);
`;

interface ButtonProps{
  show : boolean;
}
const SubmitBtn = styled(SendBtn)<ButtonProps>`
  width: 0px;
  transition: width 0.5s ease-in-out, opacity 0.8s ease-in-out;
  ${(props) =>
    props.show
      ? `width: 120px; visibility: visible; opacity: 1; margin-left: 20px;`
      : `width: 0px; visibility: hidden; opacity: 0;`}
`;
