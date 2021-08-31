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
  min-width: 1024px;
  overflow: scroll;
  scroll-behavior: smooth;
  margin: 0 auto;
  button {
    margin-bottom: 20px;
  }
`;
const Banner = styled.div`
  width: 800px;
  min-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #552aff 0%, #9a4fe6 100%);
`;

const BannerImage = styled.img`
  width: 550px;
`;

const InputConatiner = styled.div`
  min-width: 450px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
