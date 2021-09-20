import { RootState } from '@/app/rootReducer';
import { SprintTitle } from '@/common/component/textStyle/SprintTitle';
import { ViewEnum } from '@/common/types/enums/ViewEnum';
import { dummySprint, dummySprintChat } from '@/common/utils/dummy';
import { selectSprintById } from '@/modules/sprintList/utils/sprint.slice';
import Router, { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Chat from '../components/Chat';
import Filter from '../components/Filter';
import Textarea from '../components/Textarea';
import ViewBtn from '../components/ViewBtn';
import { FilterEnum } from '../utils/FilterEnum';
import ChatList from './ChatList';
import Kanban from './Kanban';

interface BoardProps {
  onShowThreads: (chatId: string) => void;
  setShowThread: (showThread: boolean) => void;
}

const Board = ({ setShowThread, onShowThreads }: BoardProps) => {
  // const [timeSplit, setTimeSplit] = useState(new Date());
  const [filter, setfilter] = useState(FilterEnum.PROGRESS);
  const router = useRouter();
  const sprintId = router.query.sprint as string;
  const sprint = useSelector((state:  RootState) => selectSprintById(state, parseInt(sprintId)));
  // const sprint = dummySprint.find((sp) => sp.id === sprintId);
  const chatIdList = dummySprintChat.find(
    (spChat) => spChat.sprintId === sprintId
  )?.chats;

  const [view, setView] = useState(ViewEnum.BOARD);
  const onViewChange = () => {
    if (view === ViewEnum.BOARD) {
      setShowThread(false);
      setView(ViewEnum.KANBAN);
    } else {
      setView(ViewEnum.BOARD);
    }
  };
  const onChangeFilter = (newFilter: FilterEnum) => {
    if (filter !== newFilter) setfilter(newFilter);
  };

  return (
    <Container>
      <BoardHeader>
        <SprintTitle>
          SP{sprint ? sprint.order + 1 : 0}# {sprint?.title}
        </SprintTitle>
        <ButtonContainer>
          {view === ViewEnum.KANBAN && (
            <Filter filter={filter} onChangeFilter={onChangeFilter}></Filter>
          )}
          <ViewBtn view={view} onViewChange={onViewChange}></ViewBtn>
        </ButtonContainer>
      </BoardHeader>
      {view === ViewEnum.BOARD ? (
        <ChatList chatIdList={chatIdList} sprint={sprint} onShowThreads={onShowThreads} />
      ) : (
        <Kanban filter={filter} chatIdList={chatIdList} />
      )}
    </Container>
  );
};;

export default Board;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* width: 100%; */
  height: 100%;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
