import React from 'react'
import styled from 'styled-components'
import ProductRequest from '../components/ProductRequest'
import { useDataContext } from '../context/data_context'

const ProductRequests = () => {
  const {productRequestsLoading, productRequests, productRequestsError} = useDataContext()
  if(productRequestsLoading) <p>Loading...</p>
  if(productRequestsError) <p>Error...</p>
  return (
    <Container>
      {productRequests?.map(productRequest => (
        <ProductRequest key={productRequest.id} {...productRequest} />
      ))}
      
    </Container>
  )
}

export default ProductRequests

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

