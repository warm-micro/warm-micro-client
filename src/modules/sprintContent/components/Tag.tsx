import { ColorEnum } from '@/common/types/enums/ColorEnum';
import React from 'react';
import styled from 'styled-components';
import { colorMapper } from '../utils/ColorMapper';

interface TagProps {
  color: ColorEnum;
  name?: string;
}

const Tag = ({ color, name }: TagProps) => {
  return <Container color={color}>{name}</Container>;
};

export default Tag;

const Container = styled.div<TagProps>`
  width: 46px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 9px;
  font-weight: bold;
  ${(props) =>
    `color : ${colorMapper(props.color)?.txtColor};
     background-color : ${colorMapper(props.color)?.bgColor};`}
`;
