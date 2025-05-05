import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust path if needed

// ✅ All style definitions at the top
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 40px',
  backgroundColor: '#ffffff', // white navbar
  color: '#000',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  borderBottom: '1px solid #ddd'
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
  color: '#FFD500',
  textDecoration: 'none',
  fontSize: '1.4rem',
  fontWeight: 'bold'
};

const linkContainer = {
  display: 'flex',
  gap: '20px'
};

const navLinkStyle = {
  color: '#000000',
  textDecoration: 'none',
  fontWeight: 'bold'
};

// ✅ Component function after styles
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

export default Navbar;
