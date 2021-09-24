import MemberImg from '@/common/component/img/MemberImg';
import { Name } from '@/common/component/textStyle/Name';
import { Time } from '@/common/component/textStyle/Time';
import { Members } from '@/common/utils/dummy';
import React from 'react';
import styled from 'styled-components';

interface AuthorProps {
  authorId: string;
  time?: Date;
}

const Author = ({ authorId, time }: AuthorProps) => {
  const authorInfo = Members.find((member) => member.userId === authorId);
  return (
    <Container>
      <MemberImg url={authorInfo?.url} name={authorInfo?.name} />
      <TextContainer>
        <Name>{authorInfo?.name}</Name>
        <Time>
          {time
            ? time.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })
            : authorInfo?.id}
        </Time>
      </TextContainer>
    </Container>
  );
};

export default Author;

const Container = styled.div`
  display: flex;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  div {
    margin-bottom: 4px;
  }
`;
