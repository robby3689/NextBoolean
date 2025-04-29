import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Resources from './pages/Resources';
import Login from './pages/Login';

import Java from './pages/coursePages/Java';
import Cloud from './pages/coursePages/Cloud';
import Business from './pages/coursePages/Business';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses/java" element={<Java />} />
        <Route path="/courses/cloud" element={<Cloud />} />
        <Route path="/courses/business" element={<Business />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
