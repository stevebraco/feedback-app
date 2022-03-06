import React from 'react'
import FeedBackBoard from '../components/FeedBackBoard'
import FilterCategory from '../components/FilterList'
import Roadmap from '../components/Roadmap'

const HomeScreen = () => {
  return (
    <div>
      <FeedBackBoard />
      <FilterCategory />
      <Roadmap />
    </div>
  )
}

export default HomeScreen
