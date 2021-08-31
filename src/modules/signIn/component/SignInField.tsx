import { AccountPurpleBtn } from '@/common/component/button/AccountPurpleBtn';
import { AccountWhiteBtn } from '@/common/component/button/AccountWhiteBtn';
import AccountInput from '@/common/component/input/AccountInput';
import { BigTitle } from '@/common/component/textStyle/BigTitle';
import Router  from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';

const SignInField = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <BigTitle>SIGN IN</BigTitle>
      <AccountInput value={id} label={'Id'} placeholder={'Enter your Id...'} onChange={onChangeId}  />
      <AccountInput 
        label={'Password'}
        placeholder={'Enter your password...'}
        onChange={onChangePassword}
        value={password}
        password
      />
      <AccountPurpleBtn
        onClick={() => {
          Router.push(
            `/myPage`,
          );
        }}
      >
        SIGN IN
      </AccountPurpleBtn>
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

export default SignInField;

const Container = styled.div`
  width: 400px;
`;
