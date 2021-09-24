import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import myInfoReducer from '../myPage/utils/myInfo.slice';
import sprintReducer from '../sprintList/utils/sprint.slice';
import workspaceReducer from '../workspace/utils/workspace.slice';
import Sidebar from './components/Sidebar';

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(workspaceReducer.actions.fetchWorkspaceListStart());
    dispatch(sprintReducer.actions.fetchSprintListStart());
    dispatch(workspaceReducer.actions.fetchMemberListStart());
    dispatch(myInfoReducer.actions.fetchMyInfoStart());
    console.log("why is not working")
  }, []);
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
