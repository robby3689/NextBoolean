import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const allCourses = [
  {
    title: 'Java Full Stack',
    category: 'Web',
    description: 'Master Java, Spring Boot, and React with real-world projects.',
    image: 'https://i.ibb.co/qM02SRz/java-fullstack.png',
    link: '/courses/java',
  },
  {
    title: 'Cloud Computing',
    category: 'Cloud',
    description: 'Learn AWS, Azure, and GCP. Build scalable cloud apps.',
    image: 'https://i.ibb.co/hZBDtPC/cloud.png',
    link: '/courses/cloud',
  },
  {
    title: 'Business Development',
    category: 'Business',
    description: 'Learn client acquisition, B2B models, and startup strategy.',
    image: 'https://i.ibb.co/fv8Q3Q0/business.png',
    link: '/courses/business',
  },
];

const filters = ['All', 'Web', 'Cloud', 'Business'];

const Courses = () => {
  const [selected, setSelected] = useState('All');
  const navigate = useNavigate();

  const filteredCourses =
    selected === 'All'
      ? allCourses
      : allCourses.filter((course) => course.category === selected);

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ marginBottom: '20px' }}>Explore Our Programs</h1>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelected(filter)}
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: selected === filter ? '#0B5ED7' : '#eee',
              color: selected === filter ? '#fff' : '#333',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            onClick={() => navigate(course.link)}
            style={{
              flex: '1 1 300px',
              maxWidth: '300px',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '16px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={course.image}
              alt={course.title}
              style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }}
            />
            <h3>{course.title}</h3>
            <p style={{ fontSize: '0.95rem', color: '#444' }}>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
