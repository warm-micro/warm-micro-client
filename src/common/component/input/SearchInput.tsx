import React from 'react';
import styled from 'styled-components';
import IconBtn from '../button/IconBtn';

type SearchInputType = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const SearchInput = ({ placeholder, onChange, value, onSearch }: SearchInputType) => {
  return (
    <Container>
      <Input placeholder={placeholder} onChange={onChange} value={value} />
      <IconBtn url="/images/loupe.png" width={30} height={30} onClick={onSearch} />
    </Container>
  );
};

export default SearchInput;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 530px;
  min-height: 50px;
  height: 50px;
  font-size: 18px;
  background: #ffffff;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
`;
const Input = styled.input`
  flex: 1;
  &::placeholder {
    color: #888888;
  }
  &:focus {
    outline: none;
  }
  border: none;
  margin-right: 20px;
`;
