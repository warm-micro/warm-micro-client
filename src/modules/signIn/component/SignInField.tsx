import { AccountPurpleBtn } from '@/common/component/button/AccountPurpleBtn';
import { AccountWhiteBtn } from '@/common/component/button/AccountWhiteBtn';
import AccountInput from '@/common/component/input/AccountInput';
import { BigTitle } from '@/common/component/textStyle/BigTitle';
import Router, { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { signIn } from '../utils/signIn';

const SignInField = () => {
  const router = useRouter();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    signIn(id, password);
  };

  return (
    <Container>
      <BigTitle>SIGN IN</BigTitle>
      <AccountInput
        value={id}
        label={'Id'}
        placeholder={'Enter your Id...'}
        onChange={onChangeId}
      />
      <AccountInput
        label={'Password'}
        placeholder={'Enter your password...'}
        onChange={onChangePassword}
        value={password}
        password
      />
      <AccountPurpleBtn onClick={onSubmit}>SIGN IN</AccountPurpleBtn>
      <AccountWhiteBtn
        onClick={() => {
          router.push('/signUp');
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
