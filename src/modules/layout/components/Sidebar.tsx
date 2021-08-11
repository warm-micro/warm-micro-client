import { Title } from '@/common/component/textStyle/Title';
import SprintList from '@/modules/sprintList/SprintList';
import WorkspaceBtn from '@/modules/workspace/WorkspaceBtn';
import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Container>
      <WorkspaceBtn />
      <SprintList />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100%;
  background-color: #ffffff;
`;
