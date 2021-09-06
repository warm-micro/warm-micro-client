import { AccountPurpleBtn } from '@/common/component/button/AccountPurpleBtn';
import { AccountWhiteBtn } from '@/common/component/button/AccountWhiteBtn';
import IconBtn from '@/common/component/button/IconBtn';
import IconDropdown from '@/common/component/dropdown/IconDropdown';
import DetailDropdown from '@/common/component/dropdown/IconDropdown';
import SearchInput from '@/common/component/input/SearchInput';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import Author from '../components/Author';

interface HeaderProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const Header = ({ value, onChange, onSearch }: HeaderProps) => {
  const router = useRouter();
  return (
    <Container>
      <SearchInput
        placeholder={'search for text, tags, person...'}
        value={value}
        onChange={onChange}
        onSearch={onSearch}
      />
      <ButtonContainer>
        <IconBtn
          url={'/images/settings.png'}
          width={30}
          height={30}
          onClick={() => 
            router.push(`/workspace/[workspace]/settings`,
           `/workspace/${router.query.workspace}/settings`)}
        />
        <IconDropdown icon={'user'} width={300}>
          <Author authorId="001" />
          <AccountPurpleBtn onClick={() => router.replace('/signIn')}>
            LOG OUT
          </AccountPurpleBtn>
          <AccountWhiteBtn onClick={() => router.replace('/myPage')}>
            EXIT WORKSPACE
          </AccountWhiteBtn>
        </IconDropdown>
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
