import { AccountPurpleBtn } from '@/common/component/button/AccountPurpleBtn';
import { AccountWhiteBtn } from '@/common/component/button/AccountWhiteBtn';
import IconBtn from '@/common/component/button/IconBtn';
import Modal from '@/common/component/modal/Modal';
import { Title } from '@/common/component/textStyle/Title';
import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import { dummy, dummySprint } from '@/common/utils/dummy';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import FinishedSprintListToggle from './components/FinishedSprintListToggle';
import SprintElement from './components/SprintElement';
import sprintReducer, { selectSprintList } from './utils/sprint.slice';
import { ToggleProps } from './utils/toggleProps.type';

const SprintList = () => {
  const [visible, setVisible] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [newName, setNewName] = useState('');
  const { query } = useRouter();
  const sprintList = useSelector(selectSprintList);
  //  dummy.find(
  //   (workspace) => workspace.name === query.workspace
  // )?.sprintList;
  const dispatch = useDispatch();
  const onCancel = () => {
    setVisible(false);
    setNewName('');
  };

  const onSubmit = () => {
     dispatch(sprintReducer.actions.createSprintStart(newName));
    setVisible(false);
    setNewName('');
  };

  useEffect(() => {
    dispatch(sprintReducer.actions.fetchSprintListStart());
  }, []);
  
  return (
    <Container>
      <Modal visible={visible}>
        <ModalContainer>
          <ModalTitle>Create New Sprint</ModalTitle>
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter new sprint name..."
          />
          <ButtonContainer>
            <CancelBtn onClick={onCancel}>CANCEL</CancelBtn>
            <ConfirmBtn onClick={onSubmit}>CONFIRM</ConfirmBtn>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
      <ListContainer>
        <SprintListTitle>
          <div>SprintList</div>
          <IconBtn
            onClick={() => {
              setVisible(true);
            }}
            url={'/images/add.png'}
            height={25}
            width={25}
          />
        </SprintListTitle>
        {sprintList.map(
          (sprint) =>
            sprint.status !== SprintStatusEnum.FINISH && (
              <SprintElement key={sprint.id} sprint={sprint} />
            )
        )}
      </ListContainer>
      <ListContainer>
        <FinishedSprintListToggle
          toggled={toggled}
          onToggle={() => setToggled(!toggled)}
        />
        <ToggleListContainer toggled={toggled}>
          {sprintList.map(
            (sprint) =>
              sprint.status === SprintStatusEnum.FINISH && (
                <SprintElement key={sprint.id}  sprint={sprint} />
              )
          )}
        </ToggleListContainer>
      </ListContainer>
    </Container>
  );
};

export default SprintList;

const SprintListTitle = styled(Title)`
  padding: 0 20px;
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .button {
    visibility: hidden;
  }
  &:hover {
    .button {
      visibility: visible;
    }
  }
`;
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
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 30px;
`;

const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ConfirmBtn = styled(AccountPurpleBtn)`
  width: 150px;
  font-weight: bold;
`;
const CancelBtn = styled(AccountWhiteBtn)`
  width: 150px;
  font-weight: bold;
  margin-right: 20px;
`;

const Input = styled.input`
  min-height: 50px;
  ::placeholder {
    color: #888888;
  }
  transition: box-shadow 0.5s;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px #cccccc;
  }
  font-size: 18px;
  color: #606060;
  background: #ffffff;
  border: 0.5px solid #552aff;
  border-radius: 10px;
  padding: 0 12px;
`;
