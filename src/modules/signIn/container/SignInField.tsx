import AccountInput from '@/common/component/input/AccountInput';
import { BigTitle } from '@/common/component/textStyle/BigTitle';
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
      <AccountInput label={'Id'} placeholder={'Enter your Id...'} onChange={onChangeId} />
      <AccountInput
        label={'Password'}
        placeholder={'Enter your password...'}
        onChange={onChangePassword}
        password
      />
    </Container>
  );
};

export default SignInField;

const Container = styled.div`
  width: 400px;
`;
