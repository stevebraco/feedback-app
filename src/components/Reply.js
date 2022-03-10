import React from 'react';
import styled from 'styled-components';

const Reply = ({ content, user: { name, username }, replyingTo }) => {
  return (
    <Wrapper>
      <Avatar />
      <InfoContainer>
        <Flex>
          <div>
            <Name>{name}</Name>
            <Username>@{username}</Username>
          </div>
          <BtnReply>Reply</BtnReply>
        </Flex>
        <Content>
          <ReplyTo>@{replyingTo} </ReplyTo>
          {content}
        </Content>
      </InfoContainer>
    </Wrapper>
  );
};

export default Reply;

const Avatar = styled.div`
  max-width: 40px;
  width: 100%;
  height: 40px;
  border-radius: 50%;
  background: black;
  display: block;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding: 20px 26px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 17px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Content = styled.p`
  max-width: 594px;
  font-size: 15px;
  color: #647196;
`;

const ReplyTo = styled.strong`
  color: #ad1fea;
`;

const Name = styled.h2`
  font-weight: 700;
  font-size: 14px;
  color: #3a4374;
`;
const Username = styled.div`
  font-size: 14px;
  color: #647196;
`;
const BtnReply = styled.button`
  display: inline-block;
  border: none;
  background: transparent;
  font-weight: 600;
  font-size: 13px;
  color: #4661e6;
`;
