import { AccountPurpleBtn } from '@/common/component/button/AccountPurpleBtn';
import { AccountWhiteBtn } from '@/common/component/button/AccountWhiteBtn';
import IconBtn from '@/common/component/button/IconBtn';
import Modal from '@/common/component/modal/Modal';
import { dummy } from '@/common/utils/dummy';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MyInfoTitle } from '../../../common/component/textStyle/MyInfoTitle';
import WorkspaceItem from '../component/WorkspaceItem';

const Workspaces = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <Modal visible={visible}>
        <ModalContainer>
          <ModalTitle>Create New Workspace</ModalTitle>
          <Input placeholder="Enter new workspace name..." />
          <ConfirmBtn>CONFIRM</ConfirmBtn>
        </ModalContainer>
      </Modal>
      <MyInfo>
        <MyInfoTitle>Workspaces</MyInfoTitle>
        <IconBtn
          onClick={() => {
            setVisible(true);
          }}
          url={'images/add.png'}
          height={25}
          width={25}
        />
      </MyInfo>
      <Content>
        {dummy.map((workspace) => (
          <WorkspaceItem key={workspace.id} workspace={workspace} />
        ))}
      </Content>
    </Container>
  );
};

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
  flex: 1;
  padding: 30px;
`;

const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: #000000;
`;

const ConfirmBtn = styled(AccountPurpleBtn)`
    width: 150px;
`;
const CancelBtn = styled(AccountWhiteBtn)`
    width: 150px;
`;

const MyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  flex: 1;
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
  margin-top: 10px;
`;
