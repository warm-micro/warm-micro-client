import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';


const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
};


export default Layout;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
