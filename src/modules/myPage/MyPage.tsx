import { MemberType } from '@/common/types/member.type';
import { Members } from '@/common/utils/dummy';
import React, { useState } from 'react';
import styled from 'styled-components';
import MyInfo from './container/MyInfo';
import MyInfoDetail from './container/MyInfoDetail';

const MyPage = () => {
  const [member, setMember] = useState<MemberType>({ ...Members[0] });
  const onChangeInfoName = (newName: string) => {
    setMember({ ...member, name: newName });
  };
  return (
    <Container>
      <Content>
        <MyInfo member={member} onChangeInfoName={onChangeInfoName} />
        <MyInfoDetail member={member} />
      </Content>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  min-width: 1024px;
  overflow: scroll;
  background: linear-gradient(180deg, #552aff 0%, #9a4fe6 100%), #ffffff;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 62px 70px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50px;

  box-sizing: border-box;
`;
