import React from 'react'
import styled from 'styled-components';

const AddComments = () => {
  return (
    <AddContainer>
      <h3>Add Comment</h3>
      <textarea name="" placeholder='Type your comment here' id="" cols="30" rows="10"></textarea>
      <span>250 Characters left</span>
    </AddContainer>
  )
}

export default AddComments

const AddContainer = styled.div`
  margin-top: 25px;
  background: #FFFFFF;
`;