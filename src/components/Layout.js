import React from 'react'
import styled from 'styled-components';
import FeedBackBoard from './FeedBackBoard';
import FilterList from './FilterList';
import Roadmap from './Roadmap';
import SuggestionsFeed from './SuggestionsFeed';

const Layout = ({children}) => {
  return (
    <Container>
      <Aside>
      <FeedBackBoard />
      <FilterList />
      <Roadmap />
      </Aside>
      <div>
    <SuggestionsFeed />
      <Main>
        {children}
        </Main>
        </div>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  display: flex;
  gap: 30px;
  max-width: 1110px;
  margin: 0 auto;
  padding-top: 35px;
`;
const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;