// src/components/ProjectsSection.jsx
import React, { useState } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'frontend',
      description: 'A productivity application with drag-and-drop functionality, team collaboration features, and progress tracking.',
      tags: ['React', 'TypeScript', 'Tailwind', 'DnD'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      category: 'ai',
      description: 'AI-powered content generation tool with multiple templates and real-time suggestions.',
      tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      category: 'mobile',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and fitness goals.',
      tags: ['React Native', 'Firebase', 'Redux', 'Charts'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 5,
      title: 'Real Estate Dashboard',
      category: 'frontend',
      description: 'Interactive dashboard for real estate analytics with maps, charts, and property listings.',
      tags: ['React', 'D3.js', 'Mapbox', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 6,
      title: 'Social Media API',
      category: 'backend',
      description: 'RESTful API for social media platform with authentication, posts, comments, and real-time notifications.',
      tags: ['Node.js', 'Express', 'Socket.io', 'JWT'],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      github: 'https://github.com',
      live: 'https://demo.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of my recent work</p>
          <div className="title-line"></div>
        </div>

        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="github-icon">G</i>
                    </a>
                    <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="live-icon">🔗</i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <span className="project-category">{project.category}</span>
                  <a href={project.live} className="project-view" target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more? Check out my GitHub for additional projects and contributions.</p>
          <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;