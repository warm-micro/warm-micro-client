import { AccountPurpleBtn } from '@/common/component/button/AccountPurpleBtn';
import { AccountWhiteBtn } from '@/common/component/button/AccountWhiteBtn';
import AccountInput from '@/common/component/input/AccountInput';
import { BigTitle } from '@/common/component/textStyle/BigTitle';
import Router from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpField = () => {
  const [id, setId] = useState('');
  const [name, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <BigTitle>SIGN Up</BigTitle>
      <AccountInput label={'Id'} placeholder={'Enter your Id...'} onChange={onChangeId} />
      <AccountInput
        label={'Password'}
        placeholder={'Enter your password...'}
        onChange={onChangePassword}
        password
      />
      <AccountPurpleBtn>SIGN IN</AccountPurpleBtn>
      <AccountWhiteBtn
        onClick={() => {
          Router.push('/signUp');
        }}
      >
        SIGN UP
      </AccountWhiteBtn>
    </Container>
  );
};

export default SignUpField;

const Container = styled.div`
  width: 400px;
`;
