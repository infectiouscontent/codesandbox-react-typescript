import React from "react"; // Import React for component creation
import { Helmet } from "react-helmet"; // Import Helmet for managing document head
import { motion } from "framer-motion"; // Import motion from framer-motion for animations
import { Link } from "react-router-dom"; // Import Link for navigation
import backgroundImage from "../images/sukant-sharma-b6rs6V_9lH4-unsplash.jpg"; // Import background image
import logo from "../images/infectiouscontent-icon-1080x1080px.png"; // Import logo image

/**
 * PrivacyPolicy Component
 *
 * This component renders a concise Privacy Policy page for Infectious Content LLC.
 * It's designed to be more approachable and suitable for a new marketing strategy consultancy.
 *
 * @returns {JSX.Element} The rendered PrivacyPolicy component
 */
const PrivacyPolicy: React.FC = () => {
  // Return JSX for the component
  return (
    <>
      {/* Helmet for SEO and metadata */}
      <Helmet>
        <title>Privacy Policy - Infectious Content LLC</title> {/* Set page title */}
        <meta
          name="description"
          content="Privacy Policy for Infectious Content LLC - Commitment to data protection and transparency."
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
          <h1>Privacy Policy</h1> {/* Page title */}
          <p>
            Infectious Content LLC is committed to protecting client privacy and handling data responsibly.
          </p> {/* Introductory statement */}
          <p>Key privacy principles:</p> {/* Subheading for key points */}
          <ul>
            <li>Data collection limited to essential business purposes</li> {/* Data collection principle */}
            <li>No sale of client information to third parties</li> {/* Data sharing policy */}
            <li>Implementation of industry-standard security measures</li> {/* Security measures */}
            <li>Client rights to access and control their data</li> {/* User data rights */}
            <li>Transparency in data handling practices</li> {/* Transparency commitment */}
          </ul>
          <p>
            A comprehensive privacy policy will be provided upon engagement of services.
          </p> {/* Policy availability */}
          <p>
            For privacy-related inquiries, please contact:
            {" "}
            <a href="mailto:privacy@infectiouscontent.com">
              privacy@infectiouscontent.com
            </a> {/* Contact information */}
          </p>
          <p>
            Infectious Content LLC values client trust and is dedicated to maintaining the highest standards of data protection.
          </p> {/* Closing statement */}
          <Link to="/" className="btn">
            Back to Home
          </Link> {/* Navigation button back to home page */}
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicy; // Export the component