import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import backgroundImage from "../images/sukant-sharma-b6rs6V_9lH4-unsplash.jpg";
import logo from "../images/infectiouscontent-icon-1080x1080px.png";
import "../styles/index.css";

/**
 * LandingPage Component
 * 
 * This component renders the main landing page for Infectious Content LLC.
 * It includes a contact form, social media links, SEO metadata, and a footer with legal links.
 * 
 * @returns {JSX.Element} The rendered LandingPage component
 */
const LandingPage: React.FC = () => {
  // State for form inputs and submission status
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  /**
   * Handle form submission
   * 
   * This function prevents the default form submission, sends the form data
   * to a Formspree endpoint, and updates the status based on the response.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/xjkbkbgd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thanks for your submission!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <>
      {/* Helmet for SEO and metadata */}
      <Helmet>
        <title>Infectious Content LLC - Crafting Contagious Content</title>
        <meta
          name="description"
          content="Infectious Content LLC crafts contagious marketing messages based on exhaustive market research and business strategy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.infectiouscontent.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.infectiouscontent.com" />
        <meta
          property="og:title"
          content="Infectious Content LLC - Crafting Contagious Content"
        />
        <meta
          property="og:description"
          content="Infectious Content LLC crafts contagious marketing messages based on exhaustive market research and business strategy."
        />
        <meta
          property="og:image"
          content={`https://www.infectiouscontent.com${logo}`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.infectiouscontent.com" />
        <meta
          name="twitter:title"
          content="Infectious Content LLC - Crafting Contagious Content"
        />
        <meta
          name="twitter:description"
          content="Infectious Content LLC crafts contagious marketing messages based on exhaustive market research and business strategy."
        />
        <meta
          name="twitter:image"
          content={`https://www.infectiouscontent.com${logo}`}
        />

        <meta name="author" content="Infectious Content LLC" />
        <meta
          name="keywords"
          content="content marketing, market research, business strategy, contagious content"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Font Awesome for social media icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4L2RVYBE2D"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4L2RVYBE2D');
          `}
        </script>
      </Helmet>

      {/* Main content wrapper */}
      <div
        className="wrapper"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Animated content container */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          {/* Logo */}
          <div className="logo-container">
            <img src={logo} alt="Infectious Content LLC" className="logo" />
          </div>

          {/* Main content */}
          <p>
            Ready to exponentially raise awareness for your brand? Ignite
            customer engagement and watch your business explode with viral
            marketing.
          </p>
          <p>
            Get market research and business development support today. Schedule
            a free consultation, leverage proven strategies, craft contagious
            content, watch it spread organically, and drive your commercial
            success.
          </p>

          {/* Contact form */}
          <form onSubmit={handleSubmit}>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              className="form-control"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="form-control"
              required
            />
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
              className="form-control"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn"
            >
              Contact Us
            </motion.button>
          </form>
          {status && <p className="form-status">{status}</p>}

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@infectiouscontent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com/infectiouscontent/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.threads.net/@infectiouscontent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
            >
              <i className="fab fa-threads"></i>
            </a>
            <a
              href="https://infectiouscontent.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Substack"
            >
              <i className="fas fa-newspaper"></i>
            </a>
          </div>
        </motion.div>

        {/* Footer with Legal Links */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Infectious Content LLC. All rights reserved.</p>
            <nav className="footer-nav">
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;