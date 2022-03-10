import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';

const AddComments = ({ id }) => {
  const { AddComments } = useDataContext();
  return (
    <AddContainer>
      <h3>Add Comment</h3>
      <form onSubmit={AddComments(id)}>
        <textarea
          name="message"
          placeholder="Type your comment here"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>Post Comment</button>
      </form>
      <span>250 Characters left</span>
    </AddContainer>
  );
};

export default AddComments;

const AddContainer = styled.div`
  margin-top: 25px;
  background: #ffffff;
`;
