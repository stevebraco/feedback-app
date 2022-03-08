import React from 'react'
import styled from 'styled-components';

const SuggestionsFeed = () => {
  return (
    <Container>
      <Wrapper>
      <div> 
        <Icon src='/images/icon-suggestions.svg' alt='suggestions' /> 
        <span> 6 Suggestions </span>
        </div>
      <div>
      <TextSort>Sort by :</TextSort>
      {/* Dropdown */}
      <span> Most Upvotes <img src='/images/icon-arrow-down.svg' alt='suggestions' /> </span> 
      </div>
      </Wrapper>
      <Button> 
        <span>+ Add Feedback</span> 
      </Button>
    </Container>
  )
}

export default SuggestionsFeed

const Container = styled.div`
  width: 825px;
  height: 72px;
  background: #373F68;
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
  color: #FFFFFF;
`;

const Icon = styled.img`
  max-width: 23px;
  width: 100%;
  height: 24px;
  object-fit: contain;
  vertical-align: sub;
`;

const TextSort = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: rgba(242, 244, 254, 1);
`;

const Button = styled.button`
  font-family: Jost;
  border: none;
  background: #AD1FEA;
  border-radius: 10px;
  span {
    display: inline-block;
    font-size: 14px;
    color: rgba(242, 244, 254, 1);
    font-weight: 700;
    padding: 12.5px 24px;
  }
`;

