import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url: string;
}

const WorkspaceImg = ({ url }: ImageProps) => {
  return <Image src={url} />;
};

export default WorkspaceImg;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;
