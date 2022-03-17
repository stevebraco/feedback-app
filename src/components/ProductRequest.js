import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // ES6
import { useDataContext } from '../context/data_context';
import UpVotes from './UpVotes';

const ProductRequest = ({
  id,
  title,
  description,
  upvotes,
  category,
  comments,
  // eslint-disable-next-line react/prop-types
}) => {
  const commentsNumber = comments ? comments?.length : 0;

  const { handleUpVotes } = useDataContext();
  return (
    <>
      <Container>
        <Wrapper>
          <UpVotes id={id} upvotes={upvotes} handleClick={handleUpVotes(id)} />
          <Link to={`/feedback-detail${id - 1}`}>
            <WrapperContent>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Category>
                <span>{category}</span>
              </Category>
            </WrapperContent>
          </Link>
        </Wrapper>
        <CommentsNumber>
          <img src="images/icon-comments.svg" alt="comments" />
          <span style={{ color: commentsNumber === 0 && '#647196' }}>
            {commentsNumber}
          </span>
        </CommentsNumber>
      </Container>
    </>
  );
};

export default ProductRequest;

ProductRequest.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  upvotes: PropTypes.number,
  category: PropTypes.string,
  comments: PropTypes.array,
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 151px;
  background: #ffffff;
  margin-bottom: 32px;
  border-radius: 10px;
  padding: 28px 32px;
  margin-bottom: 32px;
  @media (max-width: 500px) {
    height: 200px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  height: 151px;
  padding-bottom: 24px;
  border-radius: 10px;
  margin-bottom: 25px;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 0;
    justify-content: flex-end;
  }
`;

const WrapperContent = styled.div`
  transition: 0.5s;
  &:hover h3 {
    color: #4661e6;
  }

  @media (max-width: 500px) {
    padding-bottom: 15px;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #3a4374;
  padding-bottom: 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;
const Description = styled.p`
  font-size: 16px;
  color: #647196;
  padding-bottom: 12px;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 13px;
  }
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

  @media (max-width: 500px) {
    position: absolute;
    right: 25px;
    bottom: 50px;
  }
`;
