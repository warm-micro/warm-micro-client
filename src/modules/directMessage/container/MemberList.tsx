import { AccountPurpleBtn } from '@/common/component/button/AccountPurpleBtn';
import { AccountWhiteBtn } from '@/common/component/button/AccountWhiteBtn';
import IconBtn from '@/common/component/button/IconBtn';
import Modal from '@/common/component/modal/Modal';
import { Title } from '@/common/component/textStyle/Title';
import { Members } from '@/common/utils/dummy';
import {
  selectMemberList,
  selectCurrentWorkspaceCode,
} from '@/modules/workspace/utils/workspace.slice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MemberElement from '../component/MemberElement';

const MemberList = () => {
  const memberList = useSelector(selectMemberList);
  const [visible, setVisible] = useState(false);
  const code = useSelector(selectCurrentWorkspaceCode);
  const onSubmit = () => {
     setVisible(false);
  };
  return (
    <Container>
      <Modal visible={visible}>
        <ModalContainer>
          <ModalTitle>INVITE CODE</ModalTitle>
          <Code>{code}</Code>
          <ButtonContainer>
            <ConfirmBtn onClick={onSubmit}>CONFIRM</ConfirmBtn>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
      <MemberListTitle>
        <div>Direct Message</div>
        <IconBtn
          onClick={() => {
            setVisible(true);
          }}
          url={'/images/add.png'}
          height={25}
          width={25}
        />
      </MemberListTitle>
      {memberList.map((member) => (
        <MemberElement key={member.id} member={member} />
      ))}
      {/* {Members.map((member) => (
        <MemberElement key={member.id} member={member} />
      ))} */}
      {/* <MemberElement
        name={'Jinho Jeong'}
        url={'/images/jinho.png'}
        active={false}
      ></MemberElement> */}
    </Container>
  );
};

export default MemberList;

const MemberListTitle = styled(Title)`
  padding: 10px 20px;
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
  margin-top: auto;
  display: flex;
  flex-direction: column;
  min-height: 250px;
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

const Code = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  font-size: 18px;
  color: #606060;
  background: #ffffff;
  border: 0.5px solid #552aff;
  border-radius: 10px;
  padding: 0 12px;
`;