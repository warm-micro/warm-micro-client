import React from 'react';
import styled from 'styled-components';
import Input from './component/Input';
import Header from './container/Header';

const DirectMessage = () => {
  return (
    <Container>
      <Header />
      <Input></Input>
    </Container>
  );
};

export default DirectMessage;

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  flex-direction: column;
  flex: 1;
  background: #f9f9f9;
  margin: 0 auto;
`;
