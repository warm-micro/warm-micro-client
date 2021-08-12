import { Title } from '@/common/component/textStyle/Title';
import React from 'react';
import styled from 'styled-components';
import MemberElement from './component/MemberElement';

const MemberList = () => {
  return (
    <Container>
      <Title>Direct Message</Title>
      <MemberElement
        name={'Hyewon Kwak'}
        url={'/images/hyewon.jpg'}
        active={true}
      ></MemberElement>
      <MemberElement
        name={'Jinho Jeong'}
        url={'/images/jinho.png'}
        active={false}
      ></MemberElement>
    </Container>
  );
};

export default MemberList;

const Container = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 300px;
`;
