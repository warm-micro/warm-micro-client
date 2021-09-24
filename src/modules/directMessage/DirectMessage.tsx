import {
  dummyMessage,
  dummyMessageReceive,
  dummyMessageSend,
} from '@/common/utils/dummy';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectMyInfo } from '../myPage/utils/myInfo.slice';
import Input from './component/Input';
import ReceivedItem from './component/ReceivedItem';
import SendedItem from './component/SendedItem';
import Header from './container/Header';

const DirectMessage = () => {
  const myInfo = useSelector(selectMyInfo);
  const [view, setView] = useState(false);
  const [viewReceive, setViewReceive] = useState(false);
  useEffect(() => {
    if  (view)  {
        setTimeout(() => {
          setViewReceive(true);
        }, 2000);
    }
  }, [view])
  return (
    <Container>
      <Header />
      <Content>
        {dummyMessage.map((message) =>
          message.sender === myInfo.myInfo.id ? (
            <SendedItem key={message.id} message={message} />
          ) : (
            <ReceivedItem key={message.id} message={message} />
          )
        )}
        {view && <SendedItem key={dummyMessageSend.id} message={dummyMessageSend} />}
        {viewReceive && (
          <ReceivedItem key={dummyMessageReceive.id} message={dummyMessageReceive} />
        )}
      </Content>
      <Input setView={setView} />
    </Container>
  );
};;

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
