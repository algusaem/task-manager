import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.jsx';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  
  return (
    <Router>
      <div className="w-screen h-screen bg-green-500">
        <Routes>
        <Route path="*" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
