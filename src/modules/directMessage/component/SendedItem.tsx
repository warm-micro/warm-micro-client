import { DirectMessageType } from '@/common/types/directMessage.type';
import React from 'react';
import styled from 'styled-components';

interface SendItemProps {
  message: DirectMessageType;
}

const SendedItem = ({ message }: SendItemProps) => {
  return (
    <Container>
      <Content>{message.messageContent}</Content>
      <Time>
        {message.time.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </Time>
    </Container>
  );
};

export default SendedItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  align-items: flex-end;
`;

const Content = styled.div`
  padding: 30px;
  background: #d2c7ff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const Time = styled.div`
  font-size: 14px;
  color: #888888;
  margin: 20px 0;
`;
