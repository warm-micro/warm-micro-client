import { MyName } from '@/common/component/textStyle/MyName';
import { MemberType } from '@/common/types/member.type';
import React from 'react';
import styled from 'styled-components';
import DM from './DM';
import Tasks from './Tasks';
import Workspaces from './Workspaces';

interface MyInfoDetailProps {
  member: MemberType;
}

const MyInfoDetail = ({ member }: MyInfoDetailProps) => {
  return (
    <Container>
      <MyName>Hi, {member.name}</MyName>
      <DetailContainer>
        <Tasks member={member} />
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
  /* width: 100%; */
  margin-top: 40px;
`;
