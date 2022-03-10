import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import FeedBackDetail from './screens/FeedBackDetail';
import AddFeedBack from './screens/AddFeedBack';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/feedback-detail:id" element={<FeedBackDetail />} />
          <Route path="/addFeedback" element={<AddFeedBack />} />
          <Route path="/addFeedback" element={<AddFeedBack />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
