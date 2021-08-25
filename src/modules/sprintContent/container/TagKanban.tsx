import { TagList } from '@/common/utils/dummy';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import TagTitle from '../components/TagTitle';
import { Chats } from '@/common/utils/dummy';
import KanbanCol from './KanbanCol';

interface TagKanbanProps {
  show:boolean;
  chatIdList: string[];
}

const getTaggedCardList = (chatIdList:string[], tagId:string) => {
   return chatIdList
     ?.map(
       (id) =>
         Chats.filter((chat) => chat.id == id && !!chat.hTag?.find(tag => tag.id === tagId))[0]
     )
     .filter((card) => card !== undefined);
}

const TagKanban = ({show, chatIdList }: TagKanbanProps) => {
  return (
    <Container show={show}>
      {TagList.map((tag, index) => (
        <Draggable key={tag.id} draggableId={tag.name} index={index}>
          {(provided, snapshot) => (
            <ColContainer
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TagTitle color={tag.color} name={`#${tag.name}`} />
              <KanbanCol id={tag.id} cardList={getTaggedCardList(chatIdList, tag.id)} />
            </ColContainer>
          )}
        </Draggable>
      ))}
    </Container>
  );
};

export default TagKanban;
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