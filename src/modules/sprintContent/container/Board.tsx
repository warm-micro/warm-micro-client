import { SprintTitle } from '@/common/component/textStyle/SprintTitle';
import { ViewEnum } from '@/common/types/enums/ViewEnum';
import { dummy, dummySprint } from '@/common/utils/dummy';
import Router, { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import ViewBtn from '../components/ViewBtn';

const Board = () => {
  const router = useRouter();
  const sprintId = router.query.sprint;
  const sprint = dummySprint.find((sp) => sp.id === sprintId);
  const [view, setView] = useState(ViewEnum.BOARD);
  const onViewChange = () => {
    if  (view === ViewEnum.BOARD)  {
      setView(ViewEnum.KANBAN);
    }  else  {
      setView(ViewEnum.BOARD);
    }
  };;
  return (
    <Container>
      <BoardHeader>
        <SprintTitle>
          SP{sprint ? sprint.order + 1 : 0}# {sprint?.title}
        </SprintTitle>
        <ViewBtn view={view} onViewChange={onViewChange}></ViewBtn>
      </BoardHeader>
      <BoardContainer>
        
      </BoardContainer>
    </Container>
  );
};

export default Board;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
