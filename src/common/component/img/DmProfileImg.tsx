import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url?: string;
}

const DmProfileImg = ({ url }: ImageProps) => {
  return <Image src={url} />;
};

export default DmProfileImg;

const Image = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 10px;
`;
