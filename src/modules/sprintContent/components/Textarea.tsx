import React from 'react';
import styled from 'styled-components';

interface TextareaProps {
  placeholder: string;
}

const Textarea = ({ placeholder }: TextareaProps) => {
  return (
    <Container>
      <Input placeholder={placeholder}></Input>
      <ButtonContainer></ButtonContainer>
    </Container>
  );
};

export default Textarea;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 124px;
  border: 1px solid #606060;
  border-radius: 10px;
  padding-top: 20px;
  &:focus {
  }
`;

const Input = styled.textarea`
  padding: 0 20px;
  border: none;
  outline: none;
  font-size: 14px;
  &::placeholder {
    color: #888888;
  }
  display: flex;
  flex: 1;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  min-height: 36px;
  border-top: 1px solid #606060;
`;
