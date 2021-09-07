import React from 'react';
import styled from 'styled-components';

export const SendBtn = styled.button`
  width: 120px;
  height: 120px;
  font-size: 24px;
  color: #ffffff;
  background: #552aff;
  border-radius: 10px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px #987eff;
  }
`;
