import './App.css';
import Layout from './components/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import FeedBackDetail from './screens/FeedBackDetail';

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route  path="/feedback-detail:id" element={<FeedBackDetail />} />
    </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
