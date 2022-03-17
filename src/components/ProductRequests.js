import React from 'react';
import styled from 'styled-components';
import ProductRequest from '../components/ProductRequest';
import { useDataContext } from '../context/data_context';
import { useFilterContext } from '../context/filter_context';

const ProductRequests = () => {
  const { filteredProducts } = useFilterContext();
  let sortById = filteredProducts.sort((a, b) => a.id - b.id).slice(0, 6);
  const { productRequestsLoading, productRequestsError } = useDataContext();
  if (productRequestsLoading) <p>Loading...</p>;
  if (productRequestsError) <p>Error...</p>;
  return (
    <Container>
      {sortById?.map((productRequest) => (
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
