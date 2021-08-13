import React from 'react';
import styled from 'styled-components';

interface BtnProps {
  url?: string;
  width?: number;
  height?: number;
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconBtn = ({ url, width, height, onClick }: BtnProps) => {
  return (
    <Container height={height} width={width} onClick={() => onClick}>
      <img src={url} />
    </Container>
  );
};

export default IconBtn;
const Container = styled.div<BtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  padding: 7px;
  border-radius: 100%;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #d2c7ff;
  }
  &:active {
  }
  ${(props) =>
    `width: ${props.width ? props.width : 30}px; 
    height: ${props.height ? props.height : 30}px; 
    img{
      width: ${props.width ? props.width - 5 : 25}px;
      height: ${props.height ? props.height - 5 : 25}px;
    }`}
`;
