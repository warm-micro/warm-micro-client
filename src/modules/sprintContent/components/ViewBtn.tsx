import { ViewEnum } from '@/common/types/enums/ViewEnum';
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  view: ViewEnum;
  onViewChange?: () => void;
}

const ViewBtn = ({ view, onViewChange }: ButtonProps) => {
  return (
    <Button view={view} onClick={onViewChange}>
      {view === ViewEnum.BOARD ? 'kanban' : 'board'}
    </Button>
  );
};

export default ViewBtn;

const Button = styled.button<ButtonProps>`
  width: 60px;
  height: 30px;
  font-weight: bold;
  color: ${(props) => (props.view === ViewEnum.BOARD ? '#00ff00' : '#552BFF;')};
  background: #ffffff;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 12px;
  outline: none;
  border: none;
`;
