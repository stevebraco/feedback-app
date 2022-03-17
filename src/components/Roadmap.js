import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';
import RoadmapType from './RoadmapType';
const Roadmap = () => {
  const { productRequests } = useDataContext();
  let unique = [
    productRequests
      .map((product) => {
        return product.status;
      })
      .filter((c) => c !== 'suggestion'),
  ];
  const counts = {};

  unique[0].map(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  return (
    <Container>
      <WrapperInfo>
        <Title>Roadmap</Title>
        <View to="/roadmap">View</View> {/* Transform link  */}
      </WrapperInfo>
      {Object.entries(counts).map((t, index) => (
        <RoadmapType key={index} type={t[0]} number={t[1]} />
      ))}
    </Container>
  );
};

export default Roadmap;

const Container = styled.div`
  max-width: 255px;
  height: 178px;
  border-radius: 15px;
  padding: 19px 24px 0;
  overflow: hidden;
  background: #ffffff;
  @media (max-width: 915px) {
    width: 100%;
    height: 180px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #3a4374;
`;

const View = styled(Link)`
  font-weight: 600;
  font-size: 13px;
  color: #4661e6;
  text-decoration: underline;
`;
