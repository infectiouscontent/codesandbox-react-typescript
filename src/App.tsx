import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import "./styles/index.css";

/**
 * App Component
 *
 * This is the root component of the application. It sets up the routing
 * structure for the entire app using React Router 6.
 *
 * The component uses:
 * - BrowserRouter: For handling routing in the app
 * - Routes: To define the routing structure (replaces Switch in v6)
 * - Route: To define individual routes
 *
 * Routes:
 * - /: The main landing page
 * - /privacy-policy: The privacy policy page
 * - /terms-of-service: The terms of service page
 *
 * @returns {JSX.Element} The rendered App component
 */
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 
         Main Landing Page Route
         The 'index' prop replaces 'exact' in v6 for the root route
        */}
        <Route path="/" element={<LandingPage />} />
        {/* Privacy Policy Page Route */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Terms of Service Page Route */}
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
};

export default App;