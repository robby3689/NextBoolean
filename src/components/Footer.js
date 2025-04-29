import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <h3>NextBoolean</h3>
          <p>Your career, coded right. Get trained by professionals in Full Stack, Cloud & Business Dev.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul style={listStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/courses" style={linkStyle}>Courses</Link></li>
            <li><Link to="/resources" style={linkStyle}>Resources</Link></li>
            <li><Link to="/login" style={linkStyle}>Login</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: Hello@nextboolean.com</p>
          <p>Phone: +1-1112223344</p>
        </div>
      </div>
      <div style={copyright}>
        © {new Date().getFullYear()} NextBoolean. All rights reserved.
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#0B132B',
  color: '#fff',
  padding: '40px 20px 20px'
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '30px',
  maxWidth: '1000px',
  margin: '0 auto'
};

const listStyle = {
  listStyleType: 'none',
  padding: 0
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
};

const copyright = {
  marginTop: '30px',
  textAlign: 'center',
  fontSize: '0.9rem',
  color: '#bbb'
};

export default Footer;
