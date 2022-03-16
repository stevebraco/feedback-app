import styled from 'styled-components';

import React from 'react';
import { Link } from 'react-router-dom';

const FeedBackBoard = () => {
  return (
    <Container>
      <Link to="/">
        <Img src="images/background-header.png" alt="background" />
        <Title>Frontend Mentor</Title>
        <SubTitle>Feedback Board</SubTitle>
      </Link>
    </Container>
  );
};

export default FeedBackBoard;

const Container = styled.div`
  position: relative;
  max-width: 255px;
  height: 137px;
  border-radius: 15px;
  padding-left: 24px;
  padding-top: 62px;
  overflow: hidden;
  color: #ffffff;
  @media (max-width: 915px) {
    width: 100%;
    height: 180px;
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  z-index: -1;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
`;

const SubTitle = styled.span`
  font-weight: 500;
  font-size: 15px;
  color: #dadcfc;
`;
