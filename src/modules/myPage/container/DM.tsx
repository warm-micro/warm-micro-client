import React from 'react';
import styled from 'styled-components';
import { MyInfoTitle } from '../../../common/component/textStyle/MyInfoTitle';

const DM = () => {
  return (
    <Container>
      <MyInfo>
        <MyInfoTitle>Direct Messages</MyInfoTitle>
      </MyInfo>
      <Content></Content>
    </Container>
  );
};

export default DM;

const MyInfo = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  height: 50px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 25px;
  overflow-y: scroll;
`;
