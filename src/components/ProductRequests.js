import React from 'react';
import styled from 'styled-components';
import ProductRequest from '../components/ProductRequest';
import { useDataContext } from '../context/data_context';
import { useFilterContext } from '../context/filter_context';

const ProductRequests = () => {
  const { filteredProducts } = useFilterContext();
  const { productRequestsLoading, productRequestsError } = useDataContext();
  console.log(filteredProducts);
  if (productRequestsLoading) <p>Loading...</p>;
  if (productRequestsError) <p>Error...</p>;
  return (
    <Container>
      {filteredProducts?.map((productRequest) => (
        <ProductRequest key={productRequest.id} {...productRequest} />
      ))}
    </Container>
  );
};

export default ProductRequests;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
