import { dummy } from '@/common/utils/dummy';
import React from 'react';
import styled from 'styled-components';
import { MyInfoTitle } from '../../../common/component/textStyle/MyInfoTitle';
import WorkspaceItem from '../component/WorkspaceItem';

const Workspaces = () => {
  return (
    <Container>
      <MyInfoTitle>Workspaces</MyInfoTitle>
      <Content>
        {dummy.map((workspace) => (
          <WorkspaceItem key={workspace.id} workspace={workspace} />
        ))}
      </Content>
    </Container>
  );
};

export default Workspaces;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 25px;
  height: 270px;
  overflow-y: scroll;
`;
