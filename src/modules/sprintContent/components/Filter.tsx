import TriangleToggle from '@/modules/sprintList/components/TriangleToggle';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FilterEnum } from '../utils/FilterEnum';

interface FilterProps {
  filter: FilterEnum;
  onChangeFilter: (newFilter: FilterEnum) => void;
}
interface DropdownProps {
  show: boolean;
}

const Filter = ({ filter, onChangeFilter }: FilterProps) => {
  const [show, setShow] = useState(false);
  return (
    <Dropdown>
      <Container onClick={() => setShow(!show)}>
        {filter}
        <TriangleToggle />
        <DropdownContainer show={show}>
          <Item onClick={() => onChangeFilter(FilterEnum.PROGRESS)}>
            {FilterEnum.PROGRESS}
          </Item>
          <Item onClick={() => onChangeFilter(FilterEnum.TAG)}>{FilterEnum.TAG}</Item>
          <Item onClick={() => onChangeFilter(FilterEnum.PERSON)}>
            {FilterEnum.PERSON}
          </Item>
        </DropdownContainer>
      </Container>
    </Dropdown>
  );
};

export default Filter;
const Dropdown = styled.div`
  z-index: 1;
  position: relative;
`;

const Container = styled.div`
  z-index: initial;
  position: relative;
  min-width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #000000;
  line-height: 12px;
  margin-right: 20px;
  background: #ffffff;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0 8px;
  cursor: pointer;
`;

const DropdownContainer = styled.div<DropdownProps>`
  z-index: -1;
  display: flex;
  flex-direction: column;
  width: 120px;
  position: absolute;
  top: 10px;
  left: 0;
  background: #ffffff;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 10px 10px;
  padding-top: 20px;
  transition: height 0.3s ease, opacity 0.4s ease;
  ${(props) => (props.show ? `height: 100px; opacity: 1;` : `height: 0px; opacity: 0;`)};
`;

const Item = styled.div`
  display: flex;
  padding: 10px;
  color: #888888;
  border-top: 1px solid #d2c7ff;
`;
