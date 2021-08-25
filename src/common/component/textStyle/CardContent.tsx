import React from 'react';
import styled from 'styled-components';

export const CardContent = styled.div`
  font-size: 10px;
  color: #888888;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-wrap: break-word;
  white-space: pre-line;
  text-overflow: ellipsis;
`;
