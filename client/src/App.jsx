import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

      </Routes>
    </Router>
    
  );
}

export default App;
