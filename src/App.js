/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import FeedBackDetail from './screens/FeedBackDetail';
import AddFeedBack from './screens/AddFeedBack';
import EditFeedBack from './screens/EditFeedBack';
import RoadmapFeedBack from './screens/RoadmapFeedBack';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/roadmap" element={<RoadmapFeedBack />} />
          <Route exact path="/editFeedback:id" element={<EditFeedBack />} />
          <Route
            exact
            path="/feedback-detail:id"
            element={<FeedBackDetail />}
          />
          <Route exact path="/addFeedback" element={<AddFeedBack />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
