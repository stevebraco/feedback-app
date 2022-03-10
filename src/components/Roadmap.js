import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../context/data_context';
import RoadmapType from './RoadmapType';
const Roadmap = () => {
  const { productRequests } = useDataContext();
  let number;
  let unique = [
    ...new Set(
      productRequests
        .map((product) => {
          console.log('STATUS', product.status);
          return product.status;
        })
        .filter((c) => c !== 'suggestion')
    ),
  ];

  return (
    <Container>
      <WrapperInfo>
        <Title>Roadmap</Title>
        <View>View</View> {/* Transform link  */}
      </WrapperInfo>
      {unique.map((product) => (
        <RoadmapType type={product} />
      ))}
      <RoadmapType type="Planned" number="2" />
      <RoadmapType type="In-Progress" number="3" />
      <RoadmapType type="Live" number="1" />
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

const View = styled.h3`
  font-weight: 600;
  font-size: 13px;
  color: #4661e6;
  text-decoration: underline;
`;
