import MemberImg from '@/common/component/img/MemberImg';
import { MemberType } from '@/common/types/member.type';
import { selectMyInfo } from '@/modules/myPage/utils/myInfo.slice';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MemberActive from './MemberActive';

interface MemberElementProps {
  member: MemberType;
}

const MemberElement = ({ member }: MemberElementProps) => {
  const router = useRouter();
  const myInfo = useSelector(selectMyInfo);
  console.log(myInfo);
  return (
    <Container
      onClick={() =>
        member.id !== myInfo.myInfo.id &&
        router.replace(
          `/workspace/[workspace]/directMessage/[memberId]`,
          `/workspace/${router.query.workspace}/directMessage/${member.id}`
        )
      }
    >
      <MemberImgContainer>
        <MemberActive active={member.active} />
        <MemberImg url={member.url} name={member.name} />
      </MemberImgContainer>
      <MemberName>
        {member.name} {member.id === myInfo.myInfo.id && '(me)'}
      </MemberName>
    </Container>
  );
};

export default MemberElement;

const MemberImgContainer = styled.div`
  display: flex;
  svg {
    position: relative;
    top: -2px;
    left: 4px;
    z-index: 1;
  }
`;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  height: 55px;
  padding: 10px 20px;
  align-items: center;
  svg {
    margin-left: auto;
  }
  &:hover {
    color: #552bff;
    div {
      font-weight: 400;
    }
    background-color: #f6f3ff;
  }
  transition: background-color 0.5s ease;
`;

const MemberName = styled.div`
  font-weight: 300;
  font-size: 14px;
  margin-left: 10px;
`;
