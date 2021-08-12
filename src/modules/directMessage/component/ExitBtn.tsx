import React from 'react';
import styled from 'styled-components';

const ExitBtn = () => {
  return (
    <Container>
      <img src="/images/arrow.png"></img>
    </Container>
  );
};

export default ExitBtn;

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
