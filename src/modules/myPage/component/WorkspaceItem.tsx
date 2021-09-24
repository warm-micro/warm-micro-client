import React from 'react';
import WorkspaceImg from '@/common/component/img/WorkspaceImg';
import { Title } from '@/common/component/textStyle/Title';
import Router from 'next/dist/client/router';
import styled from 'styled-components';
import { WorkspaceType } from '@/common/types/workspace.type';
import IconBtn from '@/common/component/button/IconBtn';
import { useDispatch } from 'react-redux';
import workspaceReducer from '@/modules/workspace/utils/workspace.slice';

interface WorkSpaceItemProps {
  workspace: WorkspaceType;
}

const WorkspaceItem = ({ workspace }: WorkSpaceItemProps) => {
  const dispatch = useDispatch();
  return (
    <Container
      onClick={() => {
        Router.push(`/workspace/[workspace]`, `/workspace/${workspace.id}`);
        dispatch(workspaceReducer.actions.setCurrentWorkspace(workspace.id));
      }}
    >
      <Content>
        <WorkspaceImg url={workspace?.url} name={workspace.name} />
        <Title>{workspace?.name}</Title>
      </Content>
      <IconBtn
        url={'/images/arrow.png'}
        height={30}
        width={30}
        onClick={() => Router.push('/signIn')}
      />
    </Container>
  );
};

export default WorkspaceItem;

const Container = styled.div`
  cursor: pointer;
  height: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #d2c7ff;
  color: #552bff;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 25px;
  .images {
    margin: 0 15px;
  }
  padding: 0 5px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;
