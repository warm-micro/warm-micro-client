import { RootState } from '@/app/rootReducer';
import WorkspaceImg from '@/common/component/img/WorkspaceImg';
import { Title } from '@/common/component/textStyle/Title';
import { dummy } from '@/common/utils/dummy';
import  Router  from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { select } from 'typed-redux-saga/dist';
import { selectCurrentWorkspace, selectWorkspaceById } from './utils/workspace.slice';

const WorkspaceBtn = () => {
  
  const workspace = useSelector(selectCurrentWorkspace);

  return (
    <Container
      onClick={() => {
        if (workspace) {
          Router.replace(`/workspace/${workspace.id}`);
        }
      }}
    >
      <WorkspaceImg name={workspace?.name} />
      <Title>{workspace?.name}</Title>
    </Container>
  );
};

export default WorkspaceBtn;

const Container = styled.div`
  cursor: pointer;
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
  .images {
    margin: 0 15px;
  }
`;
