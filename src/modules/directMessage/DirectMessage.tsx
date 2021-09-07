import { dummyMessage } from '@/common/utils/dummy';
import React from 'react';
import styled from 'styled-components';
import Input from './component/Input';
import ReceivedItem from './component/ReceivedItem';
import SendedItem from './component/SendedItem';
import Header from './container/Header';

const DirectMessage = () => {
  const me = '001';
  return (
    <Container>
      <Header />
      <Content>
        {dummyMessage.map((message) =>
          message.sender === me ? (
            <SendedItem message={message} />
          ) : (
            <ReceivedItem message={message} />
          )
        )}
      </Content>
      <Input />
    </Container>
  );
};

export default DirectMessage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background: #f9f9f9;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
