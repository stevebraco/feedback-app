import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';
import FeedBackDetail from '../screens/FeedBackDetail';

const ProductRequest = ({
  id,
  title,
  description,
  upvotes,
  category,
  comments,
}) => {
  const commentsNumber = comments ? comments?.length : 0;
  return (
    <>
      <Container>
        <Wrapper>
          <UpVotes>
            {' '}
            <img src="images/icon-arrow-up.svg" alt="icon up" />
            <span>{upvotes}</span>
          </UpVotes>
          <div>
            <Link to={`/feedback-detail${id - 1}`}>
              <Title>{title}</Title>
            </Link>
            <Description>{description}</Description>
            <Category>
              <span>{category}</span>
            </Category>
          </div>
        </Wrapper>
        <CommentsNumber>
          <img src="images/icon-comments.svg" alt="comments" />
          <span>{commentsNumber}</span>
        </CommentsNumber>
      </Container>
    </>
  );
};

export default ProductRequest;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 151px;
  background: #ffffff;
  margin-bottom: 32px;
  border-radius: 10px;
  padding: 28px 32px;
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  height: 151px;
  border-radius: 10px;
  margin-bottom: 25px;
  width: 100%;
`;

const UpVotes = styled.div`
  background: #f2f4fe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 40px;
  width: 100%;
  height: 53px;
  border-radius: 10px;
  gap: 8px;

  span {
    color: #3a4374;
    font-weight: 700;
    font-size: 13px;
    padding: 0 9px;
  }
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #3a4374;
  padding-bottom: 10px;
  cursor: pointer;
`;
const Description = styled.p`
  font-size: 16px;
  color: #647196;
  padding-bottom: 12px;
  font-weight: 300;
`;
const Category = styled.div`
  background: #f2f4ff;
  display: inline-block;
  border-radius: 10px;
  span {
    font-weight: 600;
    font-size: 13px;
    font-weight: 600;
    color: #4661e6;
    padding: 5px 16px;
    text-transform: capitalize;
  }
`;
const CommentsNumber = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #3a4374;
    font-size: 16px;
    font-weight: 700;
    padding-left: 10px;
  }
`;
