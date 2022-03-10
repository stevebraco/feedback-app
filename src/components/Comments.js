import React from 'react';
import styled from 'styled-components';

const Comments = () => {
  return (
    <ContainerComments>
      <span>4 commentsf</span>
    </ContainerComments>
  );
};

export default Comments;
const ContainerComments = styled.div`
  background: #ffffff;
  padding: 24px 34px;
  border-radius: 10px;
  span {
    font-size: 18px;
    color: #3a4374;
    font-weight: 700;
    display: inline-block;
    padding-bottom: 28px;
  }
`;
