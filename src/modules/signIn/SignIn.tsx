import React from 'react';
import styled from 'styled-components';
import SignInField from './component/SignInField';

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
  button {
    margin-bottom: 20px;
  }
`;
const Banner = styled.div`
  width: 800px;
  min-width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #552aff 0%, #9a4fe6 100%);
`;

const BannerImage = styled.img`
  width: 600px;
`;

const InputConatiner = styled.div`
  min-width: 500px;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
