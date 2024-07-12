import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../images/infectiouscontent-icon-1080x1080px.png';
import backgroundImage from '../images/sukant-sharma-b6rs6V_9lH4-unsplash.jpg';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Infectious Content LLC</title>
        <meta name="description" content="We apologize, but the page you're looking for cannot be found. Please return to our homepage or contact us for assistance." />
      </Helmet>
      <div
        className="wrapper"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <motion.div
          className="container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="logo-container">
            <img src={logo} alt="Infectious Content LLC" className="logo" />
          </div>
          <h1>404 - Page Not Found</h1>
          <p>We apologize, but the page you're looking for cannot be found.</p>
          <p>Our team is continuously working to improve and update our content. It's possible that the link you followed may have been moved or removed.</p>
          <motion.div
            className="cta-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link to="/" className="btn">
              Return to Homepage
            </Link>
            <a href="mailto:support@infectiouscontent.com" className="btn btn-secondary">
              Contact Support
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;