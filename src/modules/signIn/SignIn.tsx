import React from 'react';
import styled from 'styled-components';
import SignInField from './container/SignInField';

const SignIn = () => {
  return (
    <Container>
      <Banner>
        <BannerImage src="images/signIn.png" />
      </Banner>
      <InputConatiner>
        <SignInField />
      </InputConatiner>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Banner = styled.div`
  width: 50%;
  min-width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #987eff 0%, rgba(196, 196, 196, 0) 100%);
`;

const BannerImage = styled.img`
  width: 600px;
`;

const InputConatiner = styled.div`
  width: 50%;
  min-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
