import DmProfileImg from '@/common/component/img/DmProfileImg';
import { Members } from '@/common/utils/dummy';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const router = useRouter();
  const member = Members.filter((member) => member.id === router.query.memberId)[0];
  return (
    <Container>
      <DmProfileContainer>
        <DmProfileImg url={member?.url} />
        <Name>{member?.name}</Name>
      </DmProfileContainer>
      <DmProfileDetailContainer></DmProfileDetailContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  width: 100%;
  height: 150px;
  min-height: 150px;
  position: sticky;
  top: 0;
  background: #552aff;
`;

const DmProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const DmProfileDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  margin-left: 20px;
`;
