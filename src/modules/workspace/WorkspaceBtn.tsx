import WorkspaceImg from '@/common/component/img/WorkspaceImg';
import { Title } from '@/common/component/textStyle/Title';
import { dummy } from '@/common/utils/dummy';
import { Router, useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';

const WorkspaceBtn = () => {
   const router = useRouter();
   const workspace = dummy.find((workspace) => workspace.name === router.query.workspace);
   return (
     <Container
       onClick={() => {
         if (workspace) {
           router.replace(`/workspace/${workspace.name}`);
         }
       }}
     >
       <WorkspaceImg url={workspace?.url} />
       <Title>{workspace?.name}</Title>
     </Container>
   );
};

export default WorkspaceBtn;

const Container = styled.div`
  cursor: pointer;
  width: 240px;
  height: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  background: #d2c7ff;
  color: #552bff;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 25px 20px;
  img {
    margin: 0 15px;
  }
`;
