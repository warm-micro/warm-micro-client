import { dummyMessage } from '@/common/utils/dummy';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectMyInfo } from '../myPage/utils/myInfo.slice';
import Input from './component/Input';
import ReceivedItem from './component/ReceivedItem';
import SendedItem from './component/SendedItem';
import Header from './container/Header';

const DirectMessage = () => {
   const myInfo = useSelector(selectMyInfo);
  return (
    <Container>
      <Header />
      <Content>
        {/* {dummyMessage.map((message) =>
          message.sender === myInfo.myInfo.id ? (
            <SendedItem key={message.id} message={message} />
          ) : (
            <ReceivedItem key={message.id} message={message} />
          )
        )} */}
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
  box-sizing: border-box;
  padding: 50px 50px 200px 50px;
  overflow-y: scroll;
`;
