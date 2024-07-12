import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../images/infectiouscontent-icon-1080x1080px.png";

/**
 * TermsOfService Component
 *
 * This component renders the Terms of Service page for Infectious Content LLC.
 * It maintains a consistent style with the main LandingPage and PrivacyPolicy components.
 *
 * Features:
 * - SEO optimization using React Helmet
 * - Animated content using Framer Motion
 * - Consistent styling with the main landing page
 * - Navigation back to the home page
 *
 * @returns {JSX.Element} The rendered TermsOfService component
 */
const TermsOfService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Infectious Content LLC</title>
        <meta
          name="description"
          content="Terms of Service for Infectious Content LLC - Understand our service agreement and user responsibilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />  {/* Prevent indexing of incomplete terms */}
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
          <h1>Terms of Service</h1>
          <p>
            Our Terms of Service are currently being updated to ensure clarity and fairness in our service agreement. We are committed to providing transparent and equitable terms for all our users.
          </p>
          <p>Key points of our terms of service include:</p>
          <ul>
            <li>Description of services provided by Infectious Content LLC</li>
            <li>User responsibilities and acceptable use of our services</li>
            <li>Intellectual property rights and content ownership</li>
            <li>Limitation of liability and disclaimer of warranties</li>
            <li>Procedures for account termination and cancellation</li>
          </ul>
          <p>
            If you have any immediate questions or concerns about our terms of service, please contact us at{" "}
            <a href="mailto:legal@infectiouscontent.com">
              legal@infectiouscontent.com
            </a>
            .
          </p>
          <p>
            We appreciate your patience as we finalize our comprehensive terms of service. Check back soon for the full version.
          </p>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default TermsOfService;