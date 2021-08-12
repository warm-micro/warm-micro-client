import MemberImg from '@/common/component/img/MemberImg';
import React from 'react';
import styled from 'styled-components';
import MemberActive from './MemberActive';

interface MemberProps {
  name: string;
  url: string;
  active: boolean;
}

const MemberElement = ({ name, url, active }: MemberProps) => {
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
  margin: 10px 0;
  align-items: center;
  svg {
    margin-left: auto;
  }
`;

const MemberName = styled.div`
  font-weight: 300;
  font-size: 14px;
  margin-left: 10px;
`;
