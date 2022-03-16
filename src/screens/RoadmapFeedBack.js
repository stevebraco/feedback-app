import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardRoadmap from '../components/CardRoadmap';
import RoadmapType from '../components/RoadmapType';
import { useDataContext } from '../context/data_context';

const RoadmapFeedBack = () => {
  const { productRequests } = useDataContext();

  let unique = [
    productRequests
      .map((product) => {
        return product.status;
      })
      .filter((c) => c !== 'suggestion'),
  ];
  const counts = {};

  const filterStatus = (status) =>
    productRequests.filter((item) => item.status === status);

  let filterPlanned = filterStatus('planned');
  let filterInProgress = filterStatus('in-progress');
  let filterLive = filterStatus('live');

  unique[0].map(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  Object.entries(counts).map((t) => console.log(t[0]));

  const subTitle = (title) => {
    if (title === 'planned') {
      let color = '#F49F85';
      return (
        <div>
          <SubTitle>Ideas prioritized for research</SubTitle>
          {filterPlanned.map((item, index) => (
            <CardRoadmap color={color} key={index} item={item} title={title} />
          ))}
        </div>
      );
    } else if (title === 'in-progress') {
      let color = '#AD1FEA';
      return (
        <div>
          <SubTitle>Currently being developed</SubTitle>
          {filterInProgress.map((item, index) => (
            <CardRoadmap color={color} key={index} item={item} title={title} />
          ))}
        </div>
      );
    } else {
      let color = '#62BCFA';
      return (
        <div>
          <SubTitle>Released features</SubTitle>
          {filterLive.map((item, index) => (
            <CardRoadmap color={color} key={index} item={item} title={title} />
          ))}
        </div>
      );
    }
  };

  return (
    <Container>
      <Wrapper>
        <HeaderRoad>
          <div>
            <GoBack to="/">
              <img src="images/icon-arrow-left.svg" alt="Go back" /> Go back
            </GoBack>
            <BigTitle>Roadmap</BigTitle>
          </div>
          <ButtonLink to="/addFeedback">
            <span>+ Add Feedback</span>
          </ButtonLink>
        </HeaderRoad>
        <ContainerStatus>
          {Object.entries(counts).map((t, index) => {
            return (
              <div key={index}>
                <Title>
                  {t[0]} ({t[1]})
                </Title>
                <span>{subTitle(t[0])}</span>
              </div>
            );
          })}
        </ContainerStatus>
      </Wrapper>
    </Container>
  );
};

export default RoadmapFeedBack;

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2;
  background: #f7f8fd;
  width: 100%;
  padding: 80px 10px 0 10px;
  overflow: scroll;
`;

const Wrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;

const HeaderRoad = styled.div`
  width: 100%;
  height: 113px;
  background: #373f68;
  border-radius: 10px;
  padding: 27px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GoBack = styled(Link)`
  border: none;
  background: transparent;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 4px;
  img {
    filter: brightness(0) invert(1);
  }
`;

const BigTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.33px;
  color: #ffffff;
`;

const ButtonLink = styled(Link)`
  font-family: Jost;
  border: none;
  background: #ad1fea;
  border-radius: 10px;
  span {
    display: inline-block;
    font-size: 14px;
    color: rgba(242, 244, 254, 1);
    font-weight: 700;
    padding: 12.5px 24px;
  }
`;

const ContainerStatus = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-top: 48px;
  @media (max-width: 915px) {
    grid-gap: 15px;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
  padding-bottom: 4px;
  text-transform: capitalize;
`;

const SubTitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #647196;
`;
