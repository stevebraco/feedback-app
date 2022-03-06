import React from 'react'
import styled from 'styled-components';

const FilterList = () => {
  return (
    <Container>
      <FilterLists>
        <Filter>All</Filter>
        <Filter>UI</Filter>
        <Filter>UX</Filter>
        <Filter>Enhancement</Filter>
        <Filter>Bug</Filter>
        <Filter>Feature</Filter>
      </FilterLists>
    </Container>
  )
}

export default FilterList

const Container = styled.div`
  max-width: 255px;
  height: 166px;
  border-radius: 15px;
  overflow: hidden;
  background: #FFFFFF;
`;

const FilterLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6%;
  height: 100%;
  padding-left: 24px;
  padding-top: 24px;
`;
const Filter = styled.li`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  align-items: center;
  background: #F2F4FF;
  border-radius: 10px;
  height: 30px;
  color: rgba(70, 97, 230, 1);
  font-weight: 600;
  font-size: 13px;

`;
