import { MyName } from '@/common/component/textStyle/MyName';
import { MemberType } from '@/common/types/member.type';
import React from 'react';
import styled from 'styled-components';
import DM from './DM';
import Tasks from './Tasks';
import Workspaces from './Workspaces';
import { useSelector } from 'react-redux';
import { selectMyInfo } from '../utils/myInfo.slice';




const MyInfoDetail = () => {
  const { myInfo } = useSelector(selectMyInfo);
  return (
    <Container>
      <MyName>Hi, {myInfo.name}</MyName>
      <DetailContainer>
        <Tasks member={myInfo} />
        <Content>
          <Workspaces />
          <DM />
        </Content>
      </DetailContainer>
    </Container>
  );
};

export default MyInfoDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  flex: 1;
  /* width: 100%; */
  padding: 55px 80px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Content = styled.div`
  display: flex;
  margin-top: 40px;
`;
