/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';

const FromPost = ({
  handleSubmit,
  isPostReply,
  charactersLimit,
  handleChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Container padding={isPostReply} flexDirection={isPostReply}>
        <Text
          isSize={isPostReply}
          placeholder="Type your comment here"
          onChange={handleChange}
          type="text"
        />
        <Wrapper isSize={isPostReply}>
          {!isPostReply && (
            <CharactersLimit>{charactersLimit} characters left</CharactersLimit>
          )}
          <Button isSize={isPostReply}>
            {isPostReply ? 'Post Reply' : 'Post Comment'}
          </Button>
        </Wrapper>
      </Container>
    </form>
  );
};

export default FromPost;

const Container = styled.div`
  display: flex;
  flex-direction: ${(prop) => (prop.flexDirection ? 'row' : 'column')};
  gap: 16px;
  padding-left: ${(prop) => prop.padding && '65px'};
`;

const Text = styled.textarea`
  width: ${(prop) => (prop.width ? '461px' : '664px')};
  /* width: 100%; */
  height: 80px;
  resize: none;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 16px 24px;
  font-family: Jost;
  font-size: 15px;
  font-weight: 400;
  color: #3a4374;
  background: #f7f8fd;
  border: none;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${(prop) => prop.width && '120px'};

  /* align-items: center; */
  width: 100%;
`;

const CharactersLimit = styled.span`
  font-size: 15px;
  color: #647196;
`;

const Button = styled.button`
  max-width: ${(prop) => (prop.width ? '117px' : '142px')};
  width: 100%;
  height: 44px;
  display: inline-block;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  background: #ad1fea;
  font-weight: 700;
`;
