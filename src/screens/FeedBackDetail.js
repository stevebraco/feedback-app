import React from 'react'
import styled from 'styled-components'
import AddComments from '../components/AddComments'
import Comments from '../components/Comments'
import ProductRequest from '../components/ProductRequest'
import { Link } from "react-router-dom";


const FeedBackDetail = () => {
  return (
    <Container>
      
      <Wrapper>
        <BtnContainer>
        <GoBack to='/' > <img src="images/icon-arrow-left.svg" alt="Go back"/> Go back </GoBack>
        <EditFeedback to='/edit-feedback'> Edit Feedback </EditFeedback>
        </BtnContainer>
        <ProductRequest />
          <Comments />
          <AddComments />
      </Wrapper>
    </Container>
  )
}

export default FeedBackDetail


const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2;
  background: #F7F8FD;
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
const EditFeedback = styled(Link)`
  display: inline-block;
 border: none;
 background: #4661E6;
 border-radius: 10px;
 padding: 12px 24px;
 color: #FFFFFF;
`;

