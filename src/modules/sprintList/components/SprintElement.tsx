import React from 'react';
import styled from 'styled-components';
import { SprintElementType } from '@/common/types/sprintElement.type';
import { StatusProps } from '@/modules/sprintList/utils/statusProps.type';
import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';

const SprintElement = ({ ...sprint }: SprintElementType) => {
  return (
    <Container>
      <SprintNumber>#{sprint.order}</SprintNumber>
      {sprint.title}
    </Container>
  );
};

export default SprintElement;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 50px;
`;

const SprintNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 0.5 solid #606060;
  border-radius: 100%;
  color: #606060;
  font-size: 12px;
  padding: 0 20px;
`;
