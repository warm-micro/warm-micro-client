import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url?: string;
}

const PersonTitleImg = ({ url }: ImageProps) => {
  return <Image src={url} />;
};

export default PersonTitleImg;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin-right: 13px;
`;
