import React from 'react';
import ProductRequests from '../components/ProductRequests';
import FeedBackEmpty from '../components/FeedBackEmpty';
import { useFilterContext } from '../context/filter_context';

const HomeScreen = () => {
  const { filteredProducts } = useFilterContext();

  if (filteredProducts.length === 0) return <FeedBackEmpty />;

  return (
    <>
      <ProductRequests />
    </>
  );
};

export default HomeScreen;
