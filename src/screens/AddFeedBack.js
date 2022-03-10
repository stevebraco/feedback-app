import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';

const AddFeedBack = () => {
  const { AddFeedBack } = useDataContext();

  return (
    <Container>
      <Wrapper>
        <BtnContainer>
          <GoBack to="/">
            <img src="images/icon-arrow-left.svg" alt="Go back" /> Go back{' '}
          </GoBack>
        </BtnContainer>
        <form onSubmit={AddFeedBack}>
          <input type="text" placeholder="title" />
          <input type="text" placeholder="category" />
          <input type="text" placeholder="description" />
          <button>Add FeedBack</button>
        </form>
      </Wrapper>
    </Container>
  );
};

export default AddFeedBack;

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2;
  background: #f7f8fd;
  width: 100%;
  padding-top: 80px;
  overflow: scroll;
`;

const Wrapper = styled.div`
  max-width: 730px;
  margin: 0 auto;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;
const GoBack = styled(Link)`
  border: none;
  background: transparent;
  font-weight: bold;
  font-size: 14px;
  color: #647196;
  display: inline-block;
`;
// const EditFeedback = styled(Link)`
//   display: inline-block;
//   border: none;
//   background: #4661e6;
//   border-radius: 10px;
//   padding: 12px 24px;
//   color: #ffffff;
// `;
