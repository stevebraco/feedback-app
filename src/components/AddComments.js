/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';
import PropTypes from 'prop-types'; // ES6
import FromPost from './FromPost';

const AddComments = ({ id }) => {
  const { AddComments, changeComments, charactersLimit } = useDataContext();
  return (
    <AddContainer>
      <Title>Add Comment</Title>
      <FromPost
        handleSubmit={AddComments(id)}
        isPostReply={false}
        charactersLimit={charactersLimit}
        handleChange={changeComments}
      />
    </AddContainer>
  );
};
export default AddComments;

const AddContainer = styled.div`
  margin-top: 25px;
  background: #ffffff;
  padding: 24px 32px 43px 34px;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #3a4374;
  margin-bottom: 24px;
`;

const Text = styled.textarea`
  max-width: 664px;
  width: 100%;
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
  align-items: center;
`;

const CharactersLimit = styled.span`
  font-size: 15px;
  color: #647196;
`;

const Button = styled.button`
  max-width: 142px;
  width: 100%;
  height: 44px;
  display: inline-block;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  background: #ad1fea;
  font-weight: 700;
`;
