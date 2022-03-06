import React from 'react'
import styled from 'styled-components';
import RoadmapType from './RoadmapType';

const Roadmap = () => {
  return (
    <Container>
      <WrapperInfo>
      <Title>Roadmap</Title>
      <View>View</View> {/* Transform link  */}
      </WrapperInfo>
      <RoadmapType type='Planned' number='2' />
      <RoadmapType type='In-Progress' number='3' />
      <RoadmapType type='Live' number='1' />
    </Container>
  )
}

export default Roadmap

const Container = styled.div`
  max-width: 255px;
  height: 178px;
  border-radius: 15px;
  padding: 19px 24px 0;
  overflow: hidden;
  background: #FFFFFF;
`;

const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #3A4374;
`;

const View = styled.h3`
  font-weight: 600;
  font-size: 13px;
  color: #4661E6;
  text-decoration: underline;
  `;