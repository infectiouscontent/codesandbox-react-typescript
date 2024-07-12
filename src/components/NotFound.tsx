import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../images/infectiouscontent-icon-1080x1080px.png';
import backgroundImage from '../images/sukant-sharma-b6rs6V_9lH4-unsplash.jpg';

const NotFound: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const virusVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Infectious Content LLC</title>
        <meta name="description" content="Oops! The page you're looking for seems to have gone viral and disappeared. Let's get you back to our contagious content!" />
      </Helmet>
      <div
        className="wrapper"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          overflow: 'hidden',
        }}
      >
        <motion.div
          className="container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="logo-container">
            <img src={logo} alt="Infectious Content LLC" className="logo" />
          </div>
          <h1>404 - Page Not Found</h1>
          <p>Oops! The content you're looking for seems to have gone viral and disappeared.</p>
          <p>Don't worry, we've got the cure for your lost page blues!</p>
          <Link to="/" className="btn">
            Return to Home
          </Link>
        </motion.div>

        {/* Animated virus particles */}
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="virus-particle"
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: position.x * 0.02 * (index + 1),
              y: position.y * 0.02 * (index + 1),
            }}
            transition={{ type: 'spring', stiffness: 50 }}
            variants={virusVariants}
            whileHover="hover"
          >
            🦠
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default NotFound;