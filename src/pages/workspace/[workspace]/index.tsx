import sprintReducer, {
  selectCurrentSprint,
  selectFinishSprint,
  selectSprintList,
} from '@/modules/sprintList/utils/sprint.slice';
import workspaceReducer from '@/modules/workspace/utils/workspace.slice';
import Router, { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentSprint = useSelector(selectCurrentSprint);
  const sprintList = useSelector(selectSprintList);
  const finishSprint = useSelector(selectFinishSprint);
  // useEffect(() => {
  //   dispatch(workspaceReducer.actions.fetchWorkspaceListStart());
  //   dispatch(sprintReducer.actions.fetchSprintListStart());
  //   if (sprintList.length > 0) {
  //     if(currentSprint)  {
  //       router.push(
  //           '/workspace/[workspace]/sprint/[sprint]',
  //           `/workspace/${router.query.workspace}/sprint/${currentSprint.id}`
  //         );
  //     }  else if  (finishSprint)  {
  //       router.push(
  //         '/workspace/[workspace]/sprint/[sprint]',
  //         `/workspace/${router.query.workspace}/sprint/${finishSprint.id}`
  //       );
  //     }
  //   }
  // }, [currentSprint, sprintList]);
  return (
    <Container>
      <BoardContainer>
        <ChatsContainer>
          {sprintList.length === 0 && 'Sprint list is empty. Create new sprint!'}
        </ChatsContainer>
      </BoardContainer>
    </Container>
  );
};;

export default index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 100%;
  background-color: #faf9ff;
`;
const BoardContainer = styled.div`
  display: flex;

  width: 100%;
  height: 80%;
`;

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-height: 0px !important;
  font-size: 30px;
`;
