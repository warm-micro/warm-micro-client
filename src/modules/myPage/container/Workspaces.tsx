import { AccountPurpleBtn } from '@/common/component/button/AccountPurpleBtn';
import { AccountWhiteBtn } from '@/common/component/button/AccountWhiteBtn';
import IconBtn from '@/common/component/button/IconBtn';
import Modal from '@/common/component/modal/Modal';
import { dummy } from '@/common/utils/dummy';
import workspaceReducer, {
  selectWorkspaceList,
} from '@/modules/workspace/utils/workspace.slice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MyInfoTitle } from '../../../common/component/textStyle/MyInfoTitle';
import WorkspaceItem from '../component/WorkspaceItem';

const Workspaces = () => {
  const [visible, setVisible] = useState(false);
  const [inviteVisible, setInviteVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [code, setCode] = useState('');
  const workspaces = useSelector(selectWorkspaceList);
  console.log(workspaces);
  const dispatch = useDispatch();
  const onCancel = () => {
    setVisible(false);
    setNewName('');
  };
  const onInviteCancel = () => {
    setInviteVisible(false);
    setCode('');
  };

  const onSubmit = () => {
    dispatch(workspaceReducer.actions.createWorkspaceStart(newName));
    setVisible(false);
    setNewName('');
  };

  const onInviteSubmit = () => {
    dispatch(workspaceReducer.actions.joinWorkspaceStart(code));
    setInviteVisible(false);
    setCode('');
  };
  return (
    <Container>
      <Modal visible={visible}>
        <ModalContainer>
          <ModalTitle>Create New Workspace</ModalTitle>
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter new workspace name..."
          />
          <ButtonContainer>
            <CancelBtn onClick={onCancel}>CANCEL</CancelBtn>
            <ConfirmBtn onClick={onSubmit}>CONFIRM</ConfirmBtn>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
      <Modal visible={inviteVisible}>
        <ModalContainer>
          <ModalTitle>Join New Workspace</ModalTitle>
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter workspace code..."
          />
          <ButtonContainer>
            <CancelBtn onClick={onInviteCancel}>CANCEL</CancelBtn>
            <ConfirmBtn onClick={onInviteSubmit}>JOIN</ConfirmBtn>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
      <MyInfo>
        <MyInfoTitle>Workspaces</MyInfoTitle>
        <div className="buttons">
      
          <IconBtn
            onClick={() => {
              setVisible(true);
            }}
            url={'images/add.png'}
            height={25}
            width={25}
          />
          <IconBtn
            onClick={() => {
              setInviteVisible(true);
            }}
            url={'images/arrow.png'}
            height={25}
            width={25}
          />
        </div>
      </MyInfo>
      <Content>
        {workspaces.map((workspace) => (
          <WorkspaceItem key={workspace.id} workspace={workspace} />
        ))}
      </Content>
    </Container>
  );
};;

export default Workspaces;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 15px;
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

const MyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .buttons {
    display: flex;
  }
  min-height: 50px;
  height: 50px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 25px;
  /* flex: 1; */
  min-height: 200px;
  overflow-y: scroll;
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
