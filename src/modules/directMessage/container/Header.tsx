import MailIcon from '@/common/component/icon/MailIcon';
import PhoneIcon from '@/common/component/icon/PhoneIcon';
import DmProfileImg from '@/common/component/img/DmProfileImg';
import { Members } from '@/common/utils/dummy';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import MemberActive from '../component/MemberActive';

const Header = () => {
  const router = useRouter();
  const member = Members.filter((member) => member.id === router.query.memberId)[0];
  return (
    <Container>
      <DmProfileContainer>
        <MemberActive active={member?.active} />
        <DmProfileImg url={member?.url} />
        <Name>{member?.name}</Name>
      </DmProfileContainer>
      <DmProfileDetailContainer>
        <DetailContainer>
          <PhoneIcon />
          <div>{member?.phoneNumber}</div>
        </DetailContainer>
        <DetailContainer>
          <MailIcon />
          <div>{member?.email}</div>
        </DetailContainer>
      </DmProfileDetailContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  height: 130px;
  min-height: 130px;
  position: sticky;
  top: 0;
  background: #552aff;
  color: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
`;

const DmProfileContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    position: relative;
    left: 4px;
    padding-bottom: 70px;
    z-index: 1;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  svg{
    margin-right: 10px;
  }
  padding: 8px 0;
`;
const DmProfileDetailContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  margin-left: 20px;
`;
