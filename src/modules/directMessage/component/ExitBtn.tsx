import IconBtn from '@/common/component/button/IconBtn';
import Router  from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';

const ExitBtn = () => {
  return (
    <Container>
      {/* <img src="/images/arrow.png"></img> */}
      <IconBtn url={"/images/arrow.png"} height={35} width={35} onClick={()=>Router.push('/signIn')} />
    </Container>
  );
};

export default ExitBtn;

const Container = styled.div`
  padding: 20px;
  img {
    transform: rotate(180deg);
  }
`;
