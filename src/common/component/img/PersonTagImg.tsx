import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url?: string;
}

const PersonTagImg = ({ url }: ImageProps) => {
  return <Image src={url} />;
};

export default PersonTagImg;

const Image = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  margin-right: 4px;
`;
