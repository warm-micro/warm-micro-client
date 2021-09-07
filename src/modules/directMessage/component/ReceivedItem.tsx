import DmProfileImg from '@/common/component/img/DmProfileImg';
import { DirectMessageType } from '@/common/types/directMessage.type';
import { Members } from '@/common/utils/dummy';
import React from 'react';
import styled from 'styled-components';

interface ReceivedItemProps {
  message: DirectMessageType;
}
const ReceivedItem = ({ message }: ReceivedItemProps) => {
  return (
    <Container>
      <DmProfileImg
        url={Members.filter((member) => member.id === message.sender)[0].url}
      />
      <DmContent>
        <Content>{message.messageContent}</Content>
        <Time>
          {message.time.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </Time>
      </DmContent>
    </Container>
  );
};

export default ReceivedItem;

const Container = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
`;
const DmContent =  styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;;
const Content = styled.div`
  padding: 30px;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const Time = styled.div`
  font-size: 14px;
  color: #888888;
  margin: 20px 0;
`;
