import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FeedBackEmpty = () => {
  return (
    <Container>
      <img src="images/illustration-empty.svg" alt="illustration empty" />
      <Title>There is no feedback yet.</Title>
      <Para>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </Para>
      <Button to="/addFeedback">
        <span>+ Add Feedback</span>
      </Button>
    </Container>
  );
};

export default FeedBackEmpty;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #ffffff;
  padding: 8rem 0;

  img {
    padding-bottom: 53px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #3a4374;
  font-weight: 700;
  padding-bottom: 16px;
`;

const Para = styled.p`
  max-width: 410px;
  font-weight: 400;
  font-size: 16px;
  color: #647196;
  padding-bottom: 60px;
`;

const Button = styled(Link)`
  cursor: pointer;
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
