// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com' },
    { name: 'Email', icon: '✉️', url: 'mailto:hello@example.com' }
  ];

  const quickLinks = [
    { name: 'Home', url: '#hero' },
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Certificates', url: '#certificates' }
  ];

  const contactInfo = [
    { icon: '📍', text: 'Tamilnadu , India' },
    { icon: '📞', text: '9840994649' },
    { icon: '✉️', text: 'velr012006@gmail.com' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column about-column">
            <div className="footer-logo">
              <span className="logo-icon">VR</span>
              <div className="logo-text">
                <h3>Vel Raj</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <p className="footer-description">
              Passionate about creating beautiful, functional, and user-friendly 
              digital experiences. Let's build something amazing together!
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column links-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column contact-column">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{info.icon}</span>
                  <span className="contact-text">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-column newsletter-column">
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to my newsletter for updates on new projects and articles.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Vel Raj. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;