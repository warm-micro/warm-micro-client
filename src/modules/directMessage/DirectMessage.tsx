import React from 'react';
import styled from 'styled-components';
import Header from './container/Header';

const DirectMessage = () => {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
};

export default DirectMessage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
