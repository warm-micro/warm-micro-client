import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url?: string;
}

const MemberImg = ({ url }: ImageProps) => {
  return <Image src={url} />;
};

export default MemberImg;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
