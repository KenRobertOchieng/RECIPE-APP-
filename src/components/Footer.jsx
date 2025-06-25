
import React from 'react';
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";



function Footer() {

    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Recipe App. All rights reserved.</p>
            <p>Discover delicious recipes and share your culinary creations with the world.</p>
            <div className="footer-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="footer-social">
                <p>Follow us on:</p>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Our Website</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );

  return (
    <footer>
      <p>© {new Date().getFullYear()} Recipe App. All rights reserved.</p>
      <p>
        Discover delicious recipes and share your culinary creations with the
        world.
      </p>

      <div>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>

      <div>
        <p>Follow us on:</p>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Our Website"
        >
          <FaGlobe />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );

}

export default Footer;
