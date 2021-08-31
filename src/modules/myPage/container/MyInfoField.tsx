import { MemberType } from '@/common/types/member.type';
import React, { useState } from 'react';
import styled from 'styled-components';
import MyInfoItem from '../component/MyInfoItem';

interface MyInfoFieldProps {
  member: MemberType;
  onChangeInfoName: (newName: string) => void;
}

const MyInfoField = ({ member, onChangeInfoName }: MyInfoFieldProps) => {
  const [id, setId] = useState(member.id);
  const [name, setName] = useState(member.name);
  const [phoneNumber, setPhoneNumber] = useState(member.phoneNumber);
  const [email, setEmail] = useState(member.email);
  const [isEditMode, setIsEditMode] = useState({
    id: false,
    name: false,
    email: false,
    phoneNumber: false,
  });

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <Container>
      <MyInfoItem
        value={id}
        label={'Id'}
        placeholder={'Enter your Id...'}
        onChange={onChangeId}
        isEditMode={isEditMode.id}
        onEditMode={() => setIsEditMode({ ...isEditMode, id: !isEditMode.id })}
      />
      <MyInfoItem
        value={name}
        label={'Name'}
        placeholder={'Enter your Name...'}
        onChange={onChangeName}
        isEditMode={isEditMode.name}
        onEditMode={() => {
          setIsEditMode({ ...isEditMode, name: !isEditMode.name });
          if (isEditMode.name) onChangeInfoName(name);
        }}
      />
      <MyInfoItem
        value={email}
        label={'Email'}
        placeholder={'Enter your Email...'}
        onChange={onChangeEmail}
        isEditMode={isEditMode.email}
        onEditMode={() => setIsEditMode({ ...isEditMode, email: !isEditMode.email })}
      />
      <MyInfoItem
        value={phoneNumber}
        label={'PhoneNumber'}
        placeholder={'Enter your PhoneNumber...'}
        onChange={onChangePhoneNumber}
        isEditMode={isEditMode.phoneNumber}
        onEditMode={() =>
          setIsEditMode({ ...isEditMode, phoneNumber: !isEditMode.phoneNumber })
        }
      />
    </Container>
  );
};

export default MyInfoField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
