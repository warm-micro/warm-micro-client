import MemberImg from '@/common/component/img/MemberImg';
import { MemberType } from '@/common/types/member.type';
import React from 'react';
import styled from 'styled-components';
import MemberActive from './MemberActive';



const MemberElement = ({ name, url, active }: MemberType) => {
  return (
    <Container>
      <MemberImg url={url} />
      <MemberName>{name}</MemberName>
      <MemberActive active={active} />
    </Container>
  );
};

export default MemberElement;

const Container = styled.div`
  display: flex;
  height: 55px;
  padding: 10px 20px;
  align-items: center;
  svg {
    margin-left: auto;
  }
  &:hover {
    color: #552bff;
    div {
      font-weight: 400;
    }
    background-color: #f6f3ff;
  }
  transition: background-color 0.5s ease;
`;

const MemberName = styled.div`
  font-weight: 300;
  font-size: 14px;
  margin-left: 10px;
`;
