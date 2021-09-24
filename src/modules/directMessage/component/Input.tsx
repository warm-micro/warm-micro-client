import { Members } from '@/common/utils/dummy';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { SendBtn } from '@/common/component/button/SendBtn';

interface inputProps {
  setView: (view: boolean) => void;
}

const Input = ({ setView }: inputProps) => {
  const router = useRouter();
  const member = Members.filter((member) => member.userId === router.query.memberId)[0];
  const [value, setValue] = useState('');
  return (
    <Container>
      <InputItem 
      value={value} 
      onChange={e => setValue(e.target.value)} placeholder={`leave message to jinho jeong...`} />
      <SendBtn onClick={() => {
        setView(true);
        setValue('');
        }}>SEND</SendBtn>
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  width: 100%;
  // 헐 해결했다 뮈췬
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 30px 50px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.08);
`;

const InputItem = styled.textarea`
  display: flex;
  padding: 20px;
  height: 80px;
  min-height: 80px;
  outline: none;
  font-size: 14px;
  &::placeholder {
    color: #888888;
  }
  flex: 1;
  resize: none;
  border: 1px solid #606060;
  border-radius: 10px;
  margin-right: 20px;
`;
