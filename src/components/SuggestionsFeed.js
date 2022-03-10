import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';

const SuggestionsFeed = () => {
  const {
    updateSort,
    openContainerSort,
    filters: { sort },
    isOpenSortWrapper,
  } = useFilterContext();
  const { filteredProducts } = useFilterContext();
  console.log(filteredProducts.length);
  let sortList = [
    'Most Upvotes',
    'Least UpVotes',
    'Most Comments',
    'Least Comments',
  ];

  return (
    <>
      <Container>
        <Wrapper>
          <div>
            <Icon src="/images/icon-suggestions.svg" alt="suggestions" />
            <span> {filteredProducts.length} Suggestions </span>
          </div>
          <WrapperSort onClick={openContainerSort}>
            <TextSort>Sort by :</TextSort>
            <ValueSort> {sort} </ValueSort>
            <img src="/images/icon-arrow-down-w.svg" alt="icon down" />
          </WrapperSort>
        </Wrapper>
        <ButtonLink to="/addFeedback">
          <span>+ Add Feedback</span>
        </ButtonLink>
      </Container>
      {isOpenSortWrapper && (
        <ContainerSort>
          {sortList.map((t, index) => (
            <BtnSort
              onClick={() => {
                updateSort(t);
              }}
              key={index}
            >
              {' '}
              {t}{' '}
              {sort === t && (
                <IconCheck src="/images/icon-check.svg" alt="" srcset="" />
              )}{' '}
            </BtnSort>
          ))}
        </ContainerSort>
      )}
    </>
  );
};

export default SuggestionsFeed;

const Container = styled.div`
  width: 825px;
  height: 72px;
  background: #373f68;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 24px;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  color: #ffffff;
`;

const Icon = styled.img`
  max-width: 23px;
  width: 100%;
  height: 24px;
  object-fit: contain;
  vertical-align: sub;
`;

const WrapperSort = styled.div`
  cursor: pointer;
  color: #f2f4fe;

  &:hover {
    color: #ffffff;
  }
`;
const TextSort = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

const ValueSort = styled.span`
  cursor: pointer;
`;

const ButtonLink = styled(Link)`
  font-family: Jost;
  border: none;
  background: #ad1fea;
  border-radius: 10px;
  span {
    display: inline-block;
    font-size: 14px;
    color: rgba(242, 244, 254, 1);
    font-weight: 700;
    padding: 12.5px 24px;
  }
`;
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

  &:hover {
    color: #ad1fea;
  }
`;

const IconCheck = styled.img`
  position: absolute;
  right: 24px;
`;
const ContainerSort = styled.div`
  position: absolute;
  top: 5rem;
  left: 11rem;
  width: 100%;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 10px;
  max-width: 255px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
