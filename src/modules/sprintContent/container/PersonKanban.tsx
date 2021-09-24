import { Chats, Members } from '@/common/utils/dummy';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import PersonTitle from '../components/PersonTitle';
import KanbanCol from './KanbanCol';

interface PersonkanbanProps {
  show:boolean;
  chatIdList: string[];
}
const getPersonCardList = (chatIdList: string[], memberId: string) => {
  return chatIdList
    ?.map(
      (id) =>
        Chats.filter(
          (chat) =>
            chat.id == id &&
            !!chat.pTag?.find((tag) => tag.personId.toString() === memberId)
        )[0]
    )
    .filter((card) => card !== undefined);
};
const PersonKanban = ({  show, chatIdList }: PersonkanbanProps) => {
  return (
    <Container show={show}>
      {Members.map((member, index) => (
        <Draggable key={member.id} draggableId={member.name} index={index}>
          {(provided, snapshot) => (
            <ColContainer
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <PersonTitle url={member.url} name={member.name} />
              <KanbanCol
                id={member.id.toString()}
                cardList={getPersonCardList(chatIdList, member.id.toString())}
              />
            </ColContainer>
          )}
        </Draggable>
      ))}
    </Container>
  );
};

export default PersonKanban;

const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-width: 250px;
  padding: 30px 30px 0 0;
  flex: 0 0 auto;
`;

interface ContainerProps {
  show: boolean;
}

const Container = styled.div<ContainerProps>`
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-x: scroll;
  white-space: nowrap;
  scroll-behavior: smooth;
  transition: width 0.5s ease-in-out, opacity 0.8s ease-in-out;
  ${(props) =>
    props.show
      ? `display: flex; visibility: visible; opacity: 1;`
      : `display: none; visibility: hidden; opacity: 0;`}
`;