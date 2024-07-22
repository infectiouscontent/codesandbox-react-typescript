import React from "react"; // Import React for component creation
import { Helmet } from "react-helmet"; // Import Helmet for managing document head
import { motion } from "framer-motion"; // Import motion from framer-motion for animations
import { Link } from "react-router-dom"; // Import Link for navigation
import backgroundImage from "../images/sukant-sharma-b6rs6V_9lH4-unsplash.jpg"; // Import background image
import logo from "../images/infectiouscontent-icon-1080x1080px.png"; // Import logo image

/**
 * TermsOfService Component
 *
 * This component renders a minimal Terms of Service page for Infectious Content LLC.
 * It's designed to be more approachable and suitable for a new marketing strategy consultancy.
 *
 * @returns {JSX.Element} The rendered TermsOfService component
 */
const TermsOfService: React.FC = () => {
  // Return JSX for the component
  return (
    <>
      {/* Helmet for SEO and metadata */}
      <Helmet>
        <title>Terms of Service - Infectious Content LLC</title> {/* Set page title */}
        <meta
          name="description"
          content="Simplified Terms of Service for Infectious Content LLC - Key points about services, responsibilities, and contact information."
        /> {/* Set meta description */}
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Set viewport for responsiveness */}
        <meta name="robots" content="noindex, nofollow" /> {/* Instruct search engines not to index this page */}
      </Helmet>
      {/* Main wrapper div with background image */}
      <div 
        className="wrapper"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Animated container for content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation end state
          transition={{ duration: 0.8 }} // Animation duration
          className="container"
        >
          {/* Logo container */}
          <div className="logo-container">
            <img src={logo} alt="Infectious Content LLC" className="logo" /> {/* Company logo */}
          </div>
          <h1>Terms of Service</h1> {/* Page title */}
          <p>
            Infectious Content LLC is committed to providing clear and fair terms for all clients.
          </p> {/* Introductory statement */}
          <p>Key points of the terms of service:</p> {/* Subheading for key points */}
          <ul>
            <li>Tailored marketing strategy consulting services</li> {/* Brief service description */}
            <li>Client collaboration and communication expectations</li> {/* User responsibilities */}
            <li>Respect for intellectual property rights</li> {/* IP rights statement */}
            <li>Limited liability for consulting advice</li> {/* Limitation of liability */}
            <li>Flexible engagement terms</li> {/* Engagement terms */}
          </ul>
          <p>
            Full terms will be provided upon service engagement. For questions, contact:
            {" "}
            <a href="mailto:legal@infectiouscontent.com">
              legal@infectiouscontent.com
            </a> {/* Contact information */}
          </p>
          <p>
            Infectious Content LLC is dedicated to building strong client relationships and delivering exceptional service.
          </p> {/* Closing statement */}
          <Link to="/" className="btn">
            Back to Home
          </Link> {/* Navigation button back to home page */}
        </motion.div>
      </div>
    </>
  );
};

export default TermsOfService; // Export the component