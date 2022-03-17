/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';

// eslint-disable-next-line react/prop-types
const Reply = ({ reply, id, index }) => {
  const {
    content,
    user: { name, username, image },
    replyingTo,
  } = reply;

  const { handleReplyBis } = useDataContext();
  return (
    <div>
      <Wrapper>
        <Avatar src={image} />
        <InfoContainer>
          <Flex>
            <div>
              <Name>{name}</Name>
              <Username>@{username}</Username>
            </div>
            <BtnReply onClick={handleReplyBis(id, index)}>Reply</BtnReply>
          </Flex>
          <Content>
            <ReplyTo>@{replyingTo} </ReplyTo>
            {content}
          </Content>
        </InfoContainer>
      </Wrapper>
    </div>
  );
};

export default Reply;

const Avatar = styled.img`
  max-width: 40px;
  width: 100%;
  height: 40px;
  border-radius: 50%;
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
  width: 100%;
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
  cursor: pointer;
  display: inline-block;
  border: none;
  background: transparent;
  font-weight: 600;
  font-size: 13px;
  color: #4661e6;
`;
