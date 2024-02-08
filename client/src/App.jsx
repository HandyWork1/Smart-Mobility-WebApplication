import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegistrationPage />} />

      </Routes>
    </Router>
    
  );
}

export default App;
