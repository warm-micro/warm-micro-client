import SprintList from '@/modules/sprintList/SprintList';
import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    (
    <Container>
        <SprintList  />
      </Container>
  )
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
