import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backgroundImage from "../images/sukant-sharma-b6rs6V_9lH4-unsplash.jpg";
import logo from "../images/infectiouscontent-icon-1080x1080px.png";

/**
 * TermsOfService Component
 *
 * This component renders the Terms of Service page for Infectious Content LLC.
 * It maintains a consistent style with the main LandingPage and PrivacyPolicy components.
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
          content="Terms of Service for Infectious Content LLC - Understand the service agreement and user responsibilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div 
        className="wrapper"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
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
            The Terms of Service for Infectious Content LLC are currently under review to ensure clarity and fairness in the service agreement. The company is committed to providing transparent and equitable terms for all users.
          </p>
          <p>Key points of the terms of service include:</p>
          <ul>
            <li>Description of services provided by Infectious Content LLC</li>
            <li>User responsibilities and acceptable use of services</li>
            <li>Intellectual property rights and content ownership</li>
            <li>Limitation of liability and disclaimer of warranties</li>
            <li>Procedures for account termination and cancellation</li>
          </ul>
          <p>
            For immediate questions or concerns about the terms of service, please contact:
            {" "}
            <a href="mailto:legal@infectiouscontent.com">
              legal@infectiouscontent.com
            </a>
          </p>
          <p>
            Infectious Content LLC appreciates user patience as the comprehensive terms of service are being finalized. Please check back soon for the full version.
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