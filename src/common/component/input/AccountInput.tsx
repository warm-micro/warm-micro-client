import React from 'react';
import styled from 'styled-components';
import { Label } from '../textStyle/Label';

type AccountInputType = {
  value: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password?: boolean;
};

const AccountInput = ({
  value,
  label,
  placeholder,
  onChange,
  password,
}: AccountInputType) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        value={value}
        type={password ? 'password' : 'text'}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Container>
  );
};

export default AccountInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;

const Input = styled.input`
  min-height: 50px;
  ::placeholder {
    color: #888888;
  }
  transition: box-shadow 0.5s;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px #cccccc;
  }
  font-size: 14px;
  background: #ffffff;
  border: 0.5px solid #888888;
  border-radius: 10px;
  padding: 0 12px;
  margin-top: 10px;
`;
