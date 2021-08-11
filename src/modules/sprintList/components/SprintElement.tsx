import React from 'react';
import styled from 'styled-components';
import { SprintElementType } from '@/common/types/sprintElement.type';
import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';


const SprintElement = ({ ...sprint }: SprintElementType) => {
  return (
    <Container isCurrent={sprint.status === SprintStatusEnum.CURRENT}>
      <SprintNumber>#{sprint.order + 1}</SprintNumber>
      {sprint.title}
    </Container>
  );
};

export default SprintElement;


interface SprintCurrentType {
  isCurrent: boolean;
}

const Container = styled.div<SprintCurrentType>`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 50px;
  background: #f9f9f9;
  color: #606060;
  transition: all 0.5s;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  &:hover {
    background: #e5e5e5;
    color: #000000;
    div {
      border: 0.5px solid #000000;
    }
  }
  ${(props) =>
    props.isCurrent &&
    `background: #F6F3FF;
    border-right: 5px solid #552BFF;
    color: #552BFF;
    div{
      border-color: #552BFF;
    }
  `};
`;

const SprintNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 0.5px solid #606060;
  border-radius: 100%;
  font-size: 12px;
  margin: 0 20px;
  transition: all 0.5s;
  
`;
