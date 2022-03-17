/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';
import FromPost from './FromPost';
import Reply from './Reply';

// eslint-disable-next-line react/prop-types
const Comment = (comment) => {
  const { id: idComment } = useParams();

  const {
    id,
    content,
    user: { name, username, image },
    replies,
  } = comment;
  const {
    handleReply,
    reply: { replyId, isReply },
    addReply,
    commentId,
    repliesToReply,
  } = useDataContext();
  return (
    <Container>
      <Wrapper>
        {replies && (
          <>
            <LineH />
            <LineV />
          </>
        )}
        {/* <Line
          style={{ borderLeft: replies && '1px solid rgb(239, 241, 244)' }}
        ></Line> */}
        <Avatar src={image} />
        <InfoContainer>
          <Flex>
            <div>
              <Name>{name}</Name>
              <Username>@{username}</Username>
            </div>
            <BtnReply onClick={handleReply(id)}>Reply</BtnReply>
          </Flex>
          <Content>{content}</Content>
        </InfoContainer>
      </Wrapper>
      {isReply && replyId === id && (
        <FromPost
          handleSubmit={addReply(username, idComment)}
          isPostReply={true}
        />
      )}
      <div>
        {replies?.map((reply, index) => (
          <Reply key={index} reply={reply} id={id} index={index} />
        ))}
        {commentId === id && (
          <FromPost
            handleSubmit={repliesToReply(idComment)}
            isPostReply={true}
          />
        )}
      </div>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Avatar = styled.img`
  max-width: 40px;
  width: 100%;
  height: 40px;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  padding: 20px 0 32px;
`;

const LineH = styled.div`
  position: absolute;
  top: 110px;
  left: 17px;
  z-index: 5;
  background: red;
  height: 100%;
  border-left: 1px solid rgb(239, 241, 244);
`;
const LineV = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 5;
  background: red;
  width: 100%;
  border-top: 1px solid rgb(239, 241, 244);
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
