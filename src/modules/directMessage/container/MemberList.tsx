import { Title } from '@/common/component/textStyle/Title';
import { Members } from '@/common/utils/dummy';
import React from 'react';
import styled from 'styled-components';
import MemberElement from '../component/MemberElement';

const MemberList = () => {
  return (
    <Container>
      <MemberListTitle>Direct Message</MemberListTitle>
      {Members.map((member) => (
        <MemberElement key={member.id} member={member} />
      ))}
      {/* <MemberElement
        name={'Jinho Jeong'}
        url={'/images/jinho.png'}
        active={false}
      ></MemberElement> */}
    </Container>
  );
};

export default MemberList;

const MemberListTitle = styled(Title)`
  padding: 10px 20px;
`;

const Container = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;
