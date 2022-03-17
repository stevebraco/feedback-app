import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';

// eslint-disable-next-line react/prop-types
const DropDown = ({ list, value, handleClick }) => {
  return (
    <BtnSort onClick={handleClick}>
      {list}
      {value === list && (
        <IconCheck src="/images/icon-check.svg" alt="" srcset="" />
      )}{' '}
    </BtnSort>
  );
};

export default DropDown;

const BtnSort = styled.button`
  position: relative;
  color: #647196;
  border: none;
  background: transparent;
  padding: 12px 24px;
  cursor: pointer;
  border-bottom: 2px solid rgba(151, 151, 151, 0.15);
  width: 100%;
  text-align: left;
  transition: 0.5s;
  text-transform: capitalize;

  &:hover {
    color: #ad1fea;
  }

  @media (max-width: 500px) {
    padding: 20px 24px;
  }
`;

const IconCheck = styled.img`
  position: absolute;
  right: 24px;
`;
