import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url?: string;
  name?: string;
}

const DmProfileImg = ({ url, name }: ImageProps) => {
  return url ? (
    <Image src={url} />
  ) : (
    <Container className="images">{name ? name[0] : '왐'}</Container>
  );
};

export default DmProfileImg;

const Image = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 10px;
  background-color: white;
  color: #552bff;
  font-weight: bold;
  font-size: 30px;
`;