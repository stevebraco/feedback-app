import React from 'react';
import styled from 'styled-components';
import FeedBackBoard from './FeedBackBoard';
import FilterList from './FilterList';
import Roadmap from './Roadmap';
import SuggestionsFeed from './SuggestionsFeed';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <Container>
      <Aside>
        <FeedBackBoard />
        <FilterList />
        <Roadmap />
      </Aside>
      <Main>
        <SuggestionsFeed />
        <Body>{children}</Body>
      </Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  gap: 30px;
  max-width: 1110px;
  margin: 0 auto;
  padding-top: 35px;
  @media (max-width: 915px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    padding: 0;
    gap: 0;
  }
`;
const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 255px;
  @media (max-width: 915px) {
    flex-direction: row;
  }
`;

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 825px;
`;

const Body = styled.div`
  @media (max-width: 500px) {
    padding: 0 24px;
  }
`;
