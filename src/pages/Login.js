import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Email or Username" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

const inputStyle = {
  display: 'block',
  width: '100%',
  marginBottom: '15px',
  padding: '10px',
  fontSize: '1rem'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#0B5ED7',
  color: '#fff',
  border: 'none',
  width: '100%',
  fontSize: '1rem',
  cursor: 'pointer'
};

export default Login;
