import { Title } from '@/common/component/textStyle/Title';
import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import { dummySprint } from '@/common/utils/dummy';
import React from 'react';
import styled from 'styled-components';
import FinishedSprintListToggle from './components/FinishedSprintListToggle';
import SprintElement from './components/SprintElement';

const SprintList = () => {
  return (
    <Container>
      <div>
        <SprintListTitle>SprintList</SprintListTitle>
        {dummySprint.map(
          (sprint) =>
            sprint.status !== SprintStatusEnum.FINISH && (
              <SprintElement key={sprint.id} {...sprint} />
            )
        )}
      </div>
      <div>
      <FinishedSprintListToggle/>
      {dummySprint.map(
        (sprint) =>
          sprint.status === SprintStatusEnum.FINISH && (
            <SprintElement key={sprint.id} {...sprint} />
          )
      )}
      </div>
    </Container>
  );
};

export default SprintList;

const SprintListTitle = styled(Title)`
  padding : 0 20px;
  margin-top: 50px;
  margin-bottom: 10px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 530px;
  justify-content: space-between;
`