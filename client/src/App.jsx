import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
// Import toastify  for notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Pages 
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
      <ToastContainer />
    </Router>
    
  );
}

export default App;
