import { SubTitle } from '@/common/component/textStyle/SubTitle';
import React from 'react';
import styled from 'styled-components';
import { ToggleProps } from '../utils/toggleProps.type';
import TriangleToggle from './TriangleToggle';



const FinishedSprintListToggle = ({ toggled, onToggle }: ToggleProps) => {
  return (
    <Container onClick={onToggle} toggled={toggled}>
      <SubTitle>finished</SubTitle>
      <TriangleToggle />
    </Container>
  );
};

export default FinishedSprintListToggle;

const Container = styled.div<ToggleProps>`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  color: #888888;
  ${(props) =>
    props.toggled
      ? `svg{ transform: rotate(0deg); transition: transform 0.5s ease; }`
      : `svg{ transform: rotate(90deg); transition: transform 0.5s ease; }`}
`;
