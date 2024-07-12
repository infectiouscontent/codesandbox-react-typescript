import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../images/infectiouscontent-icon-1080x1080px.png";

/**
 * PrivacyPolicy Component
 *
 * This component renders the Privacy Policy page for Infectious Content LLC.
 * It maintains a consistent style with the main LandingPage component.
 *
 * Features:
 * - SEO optimization using React Helmet
 * - Animated content using Framer Motion
 * - Consistent styling with the main landing page
 * - Navigation back to the home page
 *
 * @returns {JSX.Element} The rendered PrivacyPolicy component
 */
const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Infectious Content LLC</title>
        <meta
          name="description"
          content="Privacy Policy for Infectious Content LLC - Learn how user data is protected and privacy is respected."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <div className="logo-container">
            <img src={logo} alt="Infectious Content LLC" className="logo" />
          </div>
          <h1>Privacy Policy</h1>
          <p>
            The Privacy Policy of Infectious Content LLC is currently being updated to ensure compliance
            with the latest data protection regulations. The company is committed to
            protecting user privacy and handling data with transparency and
            care.
          </p>
          <p>Key points of the privacy practices include:</p>
          <ul>
            <li>
              Collection of information is limited to what is necessary for providing
              services
            </li>
            <li>User data is not sold to third parties</li>
            <li>
              Industry-standard security measures are employed to protect user
              information
            </li>
            <li>
              Users have the right to access, modify, or delete their personal data
            </li>
          </ul>
          <p>
            For immediate questions or concerns about privacy practices, please contact:
            {" "}
            <a href="mailto:privacy@infectiouscontent.com">
              privacy@infectiouscontent.com
            </a>
          </p>
          <p>
            Infectious Content LLC appreciates user patience as the comprehensive privacy
            policy is being finalized. Please check back soon for the full version.
          </p>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicy;