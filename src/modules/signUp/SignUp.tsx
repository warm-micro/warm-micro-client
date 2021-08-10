import React from 'react';
import styled from 'styled-components';
import SignUpField from './component/SignUpField';

const SignUp = () => {
  return (
    <Container>
      <Banner>
        <BannerImage src="images/signUp.png" />
      </Banner>
      <InputConatiner>
        <SignUpField />
      </InputConatiner>
    </Container>
  );
};

export default SignUp;

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
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
