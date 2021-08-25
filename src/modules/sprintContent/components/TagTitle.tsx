import { ColorEnum } from '@/common/types/enums/ColorEnum';
import React from 'react';
import styled from 'styled-components';
import { colorMapper } from '../utils/ColorMapper';

interface TagTitleProps {
  color: ColorEnum;
  name?: string;
}

const TagTitle = ({ color, name }: TagTitleProps) => {
  return <Container color={color}>{name}</Container>;
};

export default TagTitle;

const Container = styled.div<TagTitleProps>`
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  max-width: fit-content;
  padding: 5px 7px;
  margin-left: 10px;
  ${(props) =>
    `color : ${colorMapper(props.color)?.txtColor};
     background-color : ${colorMapper(props.color)?.bgColor};`};
`;
