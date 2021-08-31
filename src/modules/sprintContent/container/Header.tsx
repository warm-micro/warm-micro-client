import IconBtn from '@/common/component/button/IconBtn';
import SearchInput from '@/common/component/input/SearchInput';
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const Header = ({ value, onChange, onSearch }: HeaderProps) => {
  return (
    <Container>
      <SearchInput
        placeholder={'search for text, tags, person...'}
        value={value}
        onChange={onChange}
        onSearch={onSearch}
      />
      <ButtonContainer>
        <IconBtn url={'/images/settings.png'} width={30} height={30} onClick={() => {}} />
        <IconBtn url={'/images/user.png'} width={30} height={30} onClick={() => {}} />
      </ButtonContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  min-height: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;
