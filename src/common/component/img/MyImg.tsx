import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url?: string;
}

const MyImg = ({ url }: ImageProps) => {
  return <Image src={url} />;
};

export default MyImg;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50px;
`;
