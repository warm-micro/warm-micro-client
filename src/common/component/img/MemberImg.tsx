import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url?: string;
  name?: string;
}

const MemberImg = ({ url, name }: ImageProps) => {
  return url ? (
    <Image src={url} />
  ) : (
    <Container className="images">{name ? name[0] : '왐'}</Container>
  );
};;

export default MemberImg;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #552bff;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;