import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import NotFound from './components/NotFound';
import "./styles/index.css";

/**
 * App Component
 * 
 * This is the root component of the application. It sets up the routing
 * structure for the entire app using React Router.
 * 
 * The component uses:
 * - BrowserRouter: For handling routing in the app
 * - Routes: To define the routing structure
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
      {/* 
        Routes component is used to group and render Route components.
        It ensures that only one Route is rendered at a time.
      */}
      <Routes>
        {/* 
          Landing Page Route
          This route renders the LandingPage component when the path is exactly "/"
          The element prop is used to specify the component to render
        */}
        <Route path="/" element={<LandingPage />} />

        {/* 
          Privacy Policy Page Route
          This route renders the PrivacyPolicy component when the path is "/privacy-policy"
        */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* 
          Terms of Service Page Route
          This route renders the TermsOfService component when the path is "/terms-of-service"
        */}
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* 
          Note: If you want to add a 404 Not Found page, you can add it here like this:
          <Route path="*" element={<NotFound />} />
        */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Export the App component as the default export
export default App;