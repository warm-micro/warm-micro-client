import PersonTitleImg from '@/common/component/img/PersonTitleImg';
import { ColorEnum } from '@/common/types/enums/ColorEnum';
import React from 'react';
import styled from 'styled-components';

interface PersonTitleProps {
  url: string;
  name: string;
}

const PersonTitle = ({ url, name }: PersonTitleProps) => {
  return (
    <Container>
      <PersonTitleImg url={url} />
      {name}
    </Container>
  );
};

export default PersonTitle;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
`;
