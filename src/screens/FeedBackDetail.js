import React from 'react';
import styled from 'styled-components';
import AddComments from '../components/AddComments';
import ProductRequest from '../components/ProductRequest';
import { Link, useParams } from 'react-router-dom';
import { useDataContext } from '../context/data_context';
import Comment from '../components/Comment';

const FeedBackDetail = () => {
  const { id } = useParams();
  const { productRequests } = useDataContext();

  const singleProduct = productRequests[id];
  console.log(singleProduct?.comments);

  return (
    <Container>
      <Wrapper>
        <BtnContainer>
          <GoBack to="/">
            {' '}
            <img src="images/icon-arrow-left.svg" alt="Go back" /> Go back{' '}
          </GoBack>
          <EditFeedback to="/edit-feedback"> Edit Feedback </EditFeedback>
        </BtnContainer>
        <ProductRequest {...singleProduct} />
        <ContainerComments>
          {singleProduct?.comments && (
            <>
              <span>{singleProduct?.comments.length} comments</span>
              {singleProduct?.comments.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))}
            </>
          )}
        </ContainerComments>
        <AddComments id={id} />
      </Wrapper>
    </Container>
  );
};

export default FeedBackDetail;

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
const EditFeedback = styled(Link)`
  display: inline-block;
  border: none;
  background: #4661e6;
  border-radius: 10px;
  padding: 12px 24px;
  color: #ffffff;
`;

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
