import MyImg from '@/common/component/img/MyImg';
import AccountInput from '@/common/component/input/AccountInput';
import { MyName } from '@/common/component/textStyle/MyName';
import { MemberType } from '@/common/types/member.type';
import { Members } from '@/common/utils/dummy';
import React, { useState } from 'react';
import styled from 'styled-components';
import MyInfoField from './MyInfoField';

interface MyInfoProps {
  member: MemberType;
  onChangeInfoName: (newName: string) => void;
}

const MyInfo = ({ member, onChangeInfoName }: MyInfoProps) => {
  return (
    <Container>
      <MyImg url={member.url} />
      <MyName>{member.name}</MyName>
      <MyInfoField member={member} onChangeInfoName={onChangeInfoName} />
    </Container>
  );
};

export default MyInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0 0 50px;
  padding: 55px 35px;
  color: #000000;
  img {
    margin-bottom: 30px;
  }
`;
