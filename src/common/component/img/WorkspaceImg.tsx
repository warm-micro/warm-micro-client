import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url?: string | null;
  name?: string | string[];
}

const WorkspaceImg = ({ url, name }: ImageProps) => {
  return url ? (
    <Image className="images" src={url} />
  ) : (
    <Container className="images">{name ? name[0] : '왐'}</Container>
  );
};

export default WorkspaceImg;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #552bff;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;