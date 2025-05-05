import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={textStyle}>
        &copy; 2025 NextBoolean. Empowering Future Coders.
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#000',
  color: '#FFD500',
  textAlign: 'center',
  padding: '20px',
  marginTop: '40px'
};

const textStyle = {
  fontSize: '0.9rem'
};

export default Footer;
