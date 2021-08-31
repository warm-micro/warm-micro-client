import { Title } from '@/common/component/textStyle/Title';
import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import { dummy, dummySprint } from '@/common/utils/dummy';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import FinishedSprintListToggle from './components/FinishedSprintListToggle';
import SprintElement from './components/SprintElement';
import { ToggleProps } from './utils/toggleProps.type';

const SprintList = () => {
  const [toggled, setToggled] = useState(false);
  const { query } = useRouter();
  const sprintList = dummy.find(
    (workspace) => workspace.name === query.workspace
  )?.sprintList;
  return (
    <Container>
      <ListContainer>
        <SprintListTitle>SprintList</SprintListTitle>
        {dummySprint.map(
          (sprint) =>
            sprintList?.includes(sprint.id) &&
            sprint.status !== SprintStatusEnum.FINISH && (
              <SprintElement key={sprint.id} {...sprint} />
            )
        )}
      </ListContainer>
      <ListContainer>
        <FinishedSprintListToggle
          toggled={toggled}
          onToggle={() => setToggled(!toggled)}
        />
        <ToggleListContainer toggled={toggled}>
          {dummySprint.map(
            (sprint) =>
              sprint.status === SprintStatusEnum.FINISH && (
                <SprintElement key={sprint.id} {...sprint} />
              )
          )}
        </ToggleListContainer>
      </ListContainer>
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
  min-height: 500px;
  justify-content: space-between;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ToggleListContainer = styled.div<ToggleProps>`
  flex-direction: column;
  width: 100%;
  opacity: 0;
  transition: all 0.5s ease;
  ${(props) => (props.toggled ? `opacity:1; transform: scaleY(1);` : ``)}
`;