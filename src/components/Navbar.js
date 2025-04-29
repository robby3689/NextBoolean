import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // adjust path if needed

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoContainer}>
        <img src={logo} alt="NextBoolean Logo" style={logoStyle} />
        <Link to="/" style={brandText}>NextBoolean</Link>
      </div>
      <div style={linkContainer}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/courses" style={navLinkStyle}>Courses</Link>
        <Link to="/resources" style={navLinkStyle}>Resources</Link>
        <Link to="/login" style={navLinkStyle}>Login</Link>
      </div>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 40px',
  backgroundColor: '#0B132B',
  color: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

const logoStyle = {
  height: '70px',
  width: '80px'
};

const brandText = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.4rem',
  fontWeight: 'bold'
};

const linkContainer = {
  display: 'flex',
  gap: '20px'
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default Navbar;
