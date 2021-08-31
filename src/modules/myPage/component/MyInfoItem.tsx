import { Label } from '@/common/component/textStyle/Label';
import React from 'react';
import styled from 'styled-components';

type AccountInputType = {
  value: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEditMode: boolean;
  onEditMode: () => void;
};

const MyInfoItem = ({
  value,
  label,
  placeholder,
  onChange,
  isEditMode,
  onEditMode,
}: AccountInputType) => {
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEditMode();
    }
  };
  return (
    <Container>
      <Label>{label}</Label>
      {isEditMode ? (
        <Input
          autoFocus
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onEnter}
          onBlur={() => onEditMode()}
        />
      ) : (
        <Info onClick={() => onEditMode()}>{value}</Info>
      )}
    </Container>
  );
};

export default MyInfoItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 50px 0; */
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
  font-size: 18px;
  color: #606060;
  background: #ffffff;
  border: 0.5px solid #552aff;
  border-radius: 10px;
  padding: 0 12px;
  margin-top: 10px;
`;

const Info = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 50px;
  font-size: 18px;
  color: #000000;
  background: #ffffff;
  border: 0.5px solid #888888;
  border-radius: 10px;
  padding: 0 12px;
  margin-top: 10px;
`;
