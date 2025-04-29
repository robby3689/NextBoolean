import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '60px 40px' }}>
      <h1 style={{ fontSize: '3rem', color: '#1f1f1f' }}>Build A High Paying Career In Tech</h1>
      <p style={{ fontSize: '1.2rem', color: '#333', maxWidth: '700px' }}>
      <ul style={{ fontSize: '1.2rem', color: '#333', maxWidth: '700px', lineHeight: '1.8' }}>
  <li>Learn live from tech experts</li>
  <li>Hands-on experience on real-world projects</li>
  <li>Empower yourself to crack job interviews</li>
  <li>Interview Prep</li>
  <li>Resume Building</li>
</ul>

      </p>
      <button style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        fontSize: '1rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Book a Free Demo
      </button>
    </div>
  );
};

export default Home;
