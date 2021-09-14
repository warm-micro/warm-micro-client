import { MemberType } from '@/common/types/member.type';
import { Members } from '@/common/utils/dummy';
import { AnyAction } from '@reduxjs/toolkit';
import { NextPage, NextPageContext } from 'next';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MyInfo from './container/MyInfo';
import MyInfoDetail from './container/MyInfoDetail';
import myInfoReducer, { selectMyInfo } from './utils/myInfo.slice';


const MyPage = () => {
  const dispatch = useDispatch();
  // const [member, setMember] = useState<MemberType>({ ...Members[0] });
  const onChangeInfoName = (newName: string) => {
    // setMember({ ...member, name: newName });
  };

  useEffect(() => {
    dispatch(myInfoReducer.actions.fetchMyInfoStart());
  }, []);
  return (
    <Container>
      <Content>
        <MyInfo onChangeInfoName={onChangeInfoName} />
        <MyInfoDetail />
      </Content>
    </Container>
  );
};;

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
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

