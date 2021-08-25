import PersonTagImg from '@/common/component/img/PersonTagImg';
import { CardContent } from '@/common/component/textStyle/CardContent';
import { CardTitle } from '@/common/component/textStyle/CardTitle';
import { ChatType } from '@/common/types/chat.type';
import { Members } from '@/common/utils/dummy';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Tag from './Tag';

interface CardProps {
  id: string;
  card: ChatType;
  index: number;
}

const Card = ({ id, card, index }: CardProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TagContainer>
            {card.hTag?.map((hTag) => (
              <Tag key={hTag.id} name={hTag.name} color={hTag.color} />
            ))}
          </TagContainer>
          <CardTitle>{card.title}</CardTitle>
          <CardContent>{card.content}</CardContent>
          <PersonContainer>
            {card.pTag?.map((pTag) => {
              const url = Members.filter((member) => member.id === pTag.personId)[0].url;
              return <PersonTagImg key={pTag.id} url={url} />;
            })}
          </PersonContainer>
        </Container>
      )}
    </Draggable>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 150px;
  background: #ffffff;
  border: 0.8px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 15px 0;
  padding: 12px 13px;
`;

const TagContainer = styled.div`
  display: flex;
  width: 100%;
`;
const PersonContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
`;
