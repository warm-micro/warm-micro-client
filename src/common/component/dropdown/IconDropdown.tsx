import React, { ReactChild, ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import IconBtn from '../button/IconBtn';

interface IconDropdownProps {
  width: number;
  icon: string;
  children?: ReactNode;
}
interface ContainerProps {
  width: number;
  visible: boolean;
}

const IconDropdown = ({ width, icon, children }: IconDropdownProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <IconBtn
        url={`/images/${icon}.png`}
        width={30}
        height={30}
        onClick={(e) => {
          setVisible(!visible);
        }}
      ></IconBtn>
      <OverlayContainer width={width} visible={visible}>
        {children}
      </OverlayContainer>
    </Container>
  );
};

export default IconDropdown;

const Container = styled.div`
  position: relative;
`;

const OverlayContainer = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  z-index: 100;
  width: ${(props) => `${props.width}px`};
  right: 0;
  transition: all 0.5s ease-in-out;
  background: #ffffff;
  border: 0.8px solid #c4c4c4;
  filter: drop-shadow(4px 8px 10px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  ${(props) =>
    props.visible
      ? `visibility: visible; opacity: 1;`
      : `visibility: hidden; opacity: 0;`}

  button {
    margin-top: 10px;
  }
`;
