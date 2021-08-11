import { SubTitle } from '@/common/component/textStyle/SubTitle';
import React from 'react';
import styled from 'styled-components';

const FinishedSprintListToggle = () => {
  return (
    <Container>
      <SubTitle>finished</SubTitle>
    </Container>
  );
};

export default FinishedSprintListToggle;

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  color: #888888;
  display: flex;
  justify-content: space-between;
`;
