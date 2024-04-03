import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// Import toastify  for notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Pages 
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import CarbonFootprintPage from "./pages/CarbonFootprintPage";
import ChallengesTipsPage from "./pages/ChallengesTipsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegistrationPage />} />
        <Route exact path="/carbon-footprint" element={<CarbonFootprintPage />} />
        <Route path="/challenges-tips" element={<ChallengesTipsPage />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboardPage />} />
      </Routes>
      <ToastContainer />
    </Router>
    
  );
}

export default App;
