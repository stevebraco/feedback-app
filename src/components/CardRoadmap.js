/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';
import UpVotes from './UpVotes';

const CardRoadmap = ({ item, title, color }) => {
  const commentsNumber = item.comments ? item.comments.length : 0;
  const { handleUpVotes, isLikedUpVotes } = useDataContext();
  return (
    <Card>
      <Border style={{ background: `${color}` }} />
      <Status> {title} </Status>
      <Link to={`/feedback-detail${item.id - 1}`}>
        <Title> {item.title} </Title>
      </Link>
      <Description> {item.description} </Description>
      <Category>{item.category}</Category>
      <Wrapper>
        <UpVotes
          id={item.id}
          upvotes={item.upvotes}
          handleClick={handleUpVotes(item.id)}
        />
        <CommentsNumber>
          <img src="images/icon-comments.svg" alt="comments" />
          <span style={{ color: commentsNumber === 0 && '#647196' }}>
            {commentsNumber}
          </span>
        </CommentsNumber>
      </Wrapper>
    </Card>
  );
};

export default CardRoadmap;

const Card = styled.div`
  padding: 31px 32px;
  background: #ffffff;
  margin-top: 32px;
  margin-bottom: 25px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

const Border = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 6px;
  display: block;
`;

const Status = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #647196;
  margin-bottom: 8px;
  text-transform: capitalize;
  @media (max-width: 915px) {
    font-size: 14px;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
  margin-bottom: 4px;
  &:hover {
    color: #4661e6;
  }
  @media (max-width: 915px) {
    font-size: 13px;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #647196;
  margin-bottom: 16px;
`;

const Category = styled.button`
  display: flex;
  align-items: center;
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnUpVotes = styled.button`
  cursor: pointer;
  border: none;
  background: #f2f4fe;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 69px;
  width: 100%;
  height: 53px;
  border-radius: 10px;
  gap: 8px;
  transition: 0.5s;

  span {
    color: #3a4374;
    font-weight: 700;
    font-size: 13px;
  }

  &:hover {
    background: #cfd7ff;
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
