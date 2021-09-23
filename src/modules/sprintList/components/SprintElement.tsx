import React from 'react';
import styled from 'styled-components';
import { SprintElementType } from '@/common/types/sprintElement.type';
import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import { useRouter } from 'next/dist/client/router';
import { route } from 'next/dist/next-server/server/router';
import IconBtn from '@/common/component/button/IconBtn';

interface SprintElementProps {
  sprint: SprintElementType;
  setViewSprintId: (id: number) => void;
  viewSprintId?: number;
}

const SprintElement = ({ setViewSprintId, viewSprintId, sprint }: SprintElementProps) => {
  const router = useRouter();
  return (
    <Container
      onClick={() => {
        router.push(
          '/workspace/[workspace]/sprint/[sprint]',
          `/workspace/${router.query.workspace}/sprint/${sprint.id}`
        );
        setViewSprintId(sprint.id);
      }}
      isCurrent={sprint.id === viewSprintId}
    >
      <SprintNumber className="number">#{sprint.order + 1}</SprintNumber>
      {sprint.title} 
      <Button url={'/images/dots.png'} height={25} width={25} />
    </Container>
  );
};

export default SprintElement;


interface SprintCurrentType {
  isCurrent: boolean;
}

const Container = styled.div<SprintCurrentType>`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 50px;
  background: #f9f9f9;
  color: #606060;
  transition: all 0.5s;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  .button {
    display: none;
  }
  &:hover {
    background: #e5e5e5;
    color: #000000;
    .number {
      border: 0.5px solid #000000;
    }
    .button {
      display: flex;
      margin-left: auto;
      margin-right: 10px;
    }
  }
  ${(props) =>
    props.isCurrent &&
    `background: #F6F3FF;
    border-right: 5px solid #552BFF;
    color: #552BFF;
    div{
      border-color: #552BFF;
    }
  `};
`;

const SprintNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 0.5px solid #606060;
  border-radius: 100%;
  font-size: 12px;
  margin: 0 20px;
  transition: all 0.5s;
  
`;
const Button = styled(IconBtn)`
  border: none !important;
  visibility: hidden;
  align-self: flex-end;
`;
