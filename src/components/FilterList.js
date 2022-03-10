import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';
import { useFilterContext } from '../context/filter_context';

const FilterList = () => {
  const {
    allProducts,
    updateFilters,
    filters: { category },
  } = useFilterContext();
  const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);

    if (type === 'colors') {
      unique = unique.flat();
    }
    return ['all', ...new Set(unique)];
  };
  const categories = getUniqueValues(allProducts, 'category');
  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <FilterLists>
          {categories.map((c) => (
            <Filter
              className={`${category === c.toLowerCase() ? 'active' : ''}`}
              name="category"
              onClick={updateFilters}
            >
              {c}
            </Filter>
          ))}
        </FilterLists>
      </form>
    </Container>
  );
};

export default FilterList;

const Container = styled.div`
  max-width: 255px;
  height: 166px;
  border-radius: 15px;
  overflow: hidden;
  background: #ffffff;
`;

const FilterLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6%;
  height: 100%;
  padding: 24px;
`;
const Filter = styled.button`
  display: inline-block;
  cursor: pointer;
  padding: 0 16px;
  background: #f2f4ff;
  border-radius: 10px;
  height: 30px;
  color: rgba(70, 97, 230, 1);
  font-weight: 600;
  font-size: 13px;
  text-transform: capitalize;
  border: none;
  margin-bottom: 20px;
`;
