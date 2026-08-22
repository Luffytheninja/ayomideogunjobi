import React from 'react';

export default function HeaderNav({ activeFace, onNavigate, isCaseStudy, onBackToWorks }) {
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(0); // Page 1: Hero
    }
  };

  const handleWorksClick = (e) => {
    e.preventDefault();
    if (isCaseStudy && onBackToWorks) {
      onBackToWorks();
    } else if (onNavigate) {
      onNavigate(1); // Page 2: Works
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(2); // Page 3: About Me
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(3); // Page 4: Contact
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <a 
          href="#/" 
          className={`brand-logo ${activeFace === 0 && !isCaseStudy ? 'active' : ''}`} 
          onClick={handleLogoClick}
          title="Ayomide Ogunjobi — Home"
        >
          Ayomide Ogunjobi
        </a>

        <nav className="site-nav">
          <ul className="nav-list">
            <li>
              <a 
                href="#works" 
                className={`nav-link ${activeFace === 1 && !isCaseStudy ? 'active' : ''}`}
                onClick={handleWorksClick}
              >
                Works
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeFace === 2 && !isCaseStudy ? 'active' : ''}`}
                onClick={handleAboutClick}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeFace === 3 && !isCaseStudy ? 'active' : ''}`}
                onClick={handleContactClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
