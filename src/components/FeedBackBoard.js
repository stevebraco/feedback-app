import styled from 'styled-components';

import React from 'react';

const FeedBackBoard = () => {
  return (
    <Container>
      <Img src="images/background-header.png" alt="background" />
      <Title>Frontend Mentor</Title>
      <SubTitle>Feedback Board</SubTitle>
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
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  z-index: -1;
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
