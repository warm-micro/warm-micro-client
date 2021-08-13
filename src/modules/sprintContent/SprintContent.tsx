import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './container/Board';
import Header from './container/Header';

const SprintContent = () => {
  const [value, setValue] = useState('');;
  return (
    <Container>
      <Header value={value} onChange={(e)=>setValue(e.target.value)} onSearch={()=>{}}/>
      <Board/>
    </Container>
  );
};

export default SprintContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #faf9ff;
  padding: 30px;
`;
