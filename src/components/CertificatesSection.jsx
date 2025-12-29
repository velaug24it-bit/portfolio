// src/components/CertificatesSection.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import './CertificatesSection.css';

const CertificatesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const scrollSpeed = 1; // pixels per frame (adjust as needed)

  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'View Certificate',
      link: '#',
      icon: '☁️',
      category: 'cloud'
    },
    {
      id: 2,
      title: 'Google Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: '2023',
      credential: 'View Certificate',
      link: '#',
      icon: '🔧',
      category: 'cloud'
    },
    {
      id: 3,
      title: 'Microsoft Azure Developer',
      issuer: 'Microsoft',
      date: '2022',
      credential: 'View Certificate',
      link: '#',
      icon: '💻',
      category: 'cloud'
    },
    {
      id: 4,
      title: 'React Advanced Certification',
      issuer: 'Meta',
      date: '2022',
      credential: 'View Certificate',
      link: '#',
      icon: '⚛️',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'Node.js Backend Certification',
      issuer: 'The Linux Foundation',
      date: '2021',
      credential: 'View Certificate',
      link: '#',
      icon: '🚀',
      category: 'backend'
    },
    {
      id: 6,
      title: 'UI/UX Design Specialization',
      issuer: 'Google',
      date: '2021',
      credential: 'View Certificate',
      link: '#',
      icon: '🎨',
      category: 'design'
    },
    {
      id: 7,
      title: 'Python Data Science',
      issuer: 'Coursera',
      date: '2023',
      credential: 'View Certificate',
      link: '#',
      icon: '📊',
      category: 'data'
    },
    {
      id: 8,
      title: 'Docker & Kubernetes',
      issuer: 'Docker Inc.',
      date: '2022',
      credential: 'View Certificate',
      link: '#',
      icon: '🐳',
      category: 'devops'
    },
    {
      id: 9,
      title: 'Machine Learning Engineer',
      issuer: 'Stanford University',
      date: '2023',
      credential: 'View Certificate',
      link: '#',
      icon: '🤖',
      category: 'ai'
    },
    {
      id: 10,
      title: 'Advanced JavaScript',
      issuer: 'MDN Web Docs',
      date: '2022',
      credential: 'View Certificate',
      link: '#',
      icon: '📝',
      category: 'frontend'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certificates' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'devops', name: 'DevOps' },
    { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'Design' }
  ];

  const achievements = [
    { number: '25+', label: 'Projects Completed' },
    { number: '15+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '12+', label: 'Certifications' }
  ];

  // Filter certificates based on active filter
  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  // ✅ FIXED: Wrap auto-scroll functions in useCallback
  const startAutoScroll = useCallback(() => {
    if (!scrollContainerRef.current || !isAutoScrolling || isHovering) return;

    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll) {
          // Reset to start when reaching the end
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollSpeed, behavior: 'auto' });
        }
      }
    }, 16); // ~60fps
  }, [isAutoScrolling, isHovering, scrollSpeed]); // ✅ Include dependencies

  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []); // ✅ No dependencies needed

  // Toggle auto-scroll on click
  const toggleAutoScroll = useCallback(() => {
    setIsAutoScrolling(prev => !prev);
  }, []); // ✅ No dependencies needed

  // Manual scroll functions
  const scrollLeft = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  }, []); // ✅ No dependencies needed

  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  }, []); // ✅ No dependencies needed

  // Reset scroll position when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeFilter]);

  // ✅ FIXED: Handle auto-scrolling based on state
  useEffect(() => {
    if (isAutoScrolling && !isHovering) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [isAutoScrolling, isHovering, startAutoScroll, stopAutoScroll]); // ✅ Include all dependencies

  // Update scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      // This updates the progress bar visually via CSS
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">Professional credentials and milestones</p>
          <div className="title-line"></div>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-label">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Auto-scroll controls */}
        <div className="scroll-controls">
          <div className="scroll-status">
            <span className={`status-indicator ${isAutoScrolling ? 'active' : 'paused'}`}>
              {isAutoScrolling ? 'Auto-scrolling: ON' : 'Auto-scrolling: PAUSED'}
            </span>
            <button 
              className="toggle-scroll-btn"
              onClick={toggleAutoScroll}
              title={isAutoScrolling ? 'Pause auto-scroll' : 'Start auto-scroll'}
            >
              {isAutoScrolling ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
          
          <div className="manual-scroll-buttons">
            <button 
              className="scroll-btn left-btn"
              onClick={scrollLeft}
              title="Scroll left"
            >
              ←
            </button>
            <button 
              className="scroll-btn right-btn"
              onClick={scrollRight}
              title="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="certificates-filter">
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

        {/* Scrollable certificates container */}
        <div 
          className="certificates-scroll-container"
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="certificates-scroll-content">
            {filteredCertificates.map(cert => (
              <div 
                key={cert.id} 
                className="certificate-card"
                onClick={toggleAutoScroll} // Click on card also toggles scrolling
              >
                <div className="certificate-icon">
                  <span className="icon">{cert.icon}</span>
                </div>
                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <div className="certificate-meta">
                    <span className="issuer">{cert.issuer}</span>
                    <span className="date">{cert.date}</span>
                  </div>
                  <p className="certificate-description">
                    Validated skills in {cert.category} architecture and development best practices
                  </p>
                  <a 
                    href={cert.link} 
                    className="certificate-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent toggle when clicking link
                  >
                    {cert.credential} →
                  </a>
                </div>
                <div className="certificate-badge">
                  <span className="badge-text">Verified</span>
                </div>
                <div className="click-hint">
                  Click to {isAutoScrolling ? 'pause' : 'resume'} scroll
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="scroll-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: scrollContainerRef.current 
                  ? `${(scrollContainerRef.current.scrollLeft / 
                      (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth)) * 100 || 0}%` 
                  : '0%' 
              }}
            ></div>
          </div>
          <div className="progress-text">
            Scroll to view all certificates
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Technical Expertise</h3>
            <div className="expertise-list">
              <div className="expertise-item">
                <span className="expertise-category">Frontend:</span>
                <span className="expertise-skills">React, Vue.js, TypeScript, Next.js</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-category">Backend:</span>
                <span className="expertise-skills">Node.js, Python, Java, Go</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-category">Cloud:</span>
                <span className="expertise-skills">AWS, GCP, Azure, Docker, Kubernetes</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-category">Database:</span>
                <span className="expertise-skills">MongoDB, PostgreSQL, Redis, Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;