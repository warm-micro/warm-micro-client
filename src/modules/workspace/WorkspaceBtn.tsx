import WorkspaceImg from '@/common/component/img/WorkspaceImg';
import { Title } from '@/common/component/textStyle/Title';
import React from 'react';
import styled from 'styled-components';

const WorkspaceBtn = () => {
  return (
    <Container>
      <WorkspaceImg url="/images/warm.png" />
      <Title>Warm-micro</Title>
    </Container>
  );
};

export default WorkspaceBtn;

const Container = styled.div`
  width: 240px;
  height: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  background: #d2c7ff;
  color: #552bff;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 25px 20px;
  img {
    margin: 0 15px;
  }
`;
