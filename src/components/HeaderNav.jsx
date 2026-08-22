import React, { useState, useEffect } from 'react';

export default function HeaderNav({ activeFace, onNavigate, isCaseStudy, onBackToWorks }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(0); // Page 1: Hero
    }
  };

  const handleWorksClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isCaseStudy && onBackToWorks) {
      onBackToWorks();
    } else if (onNavigate) {
      onNavigate(1); // Page 2: Works
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(2); // Page 3: About Me
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(3); // Page 4: Contact
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          {/* Brand Logo: Text on Desktop, Green Chair Box on Mobile */}
          <a 
            href="#/" 
            className={`brand-logo ${activeFace === 0 && !isCaseStudy ? 'active' : ''}`} 
            onClick={handleLogoClick}
            title="Ayomide Ogunjobi — Home"
          >
            <span className="brand-logo-text">Ayomide Ogunjobi</span>
            <span className="brand-logo-mobile-box">
              <img src="/favicons/favicon-gb.png" alt="Ayo Logo" className="brand-logo-mobile-icon" />
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="site-nav desktop-nav">
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

          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            className={`mobile-hamburger-btn ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      <div 
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div 
          className="mobile-nav-drawer" 
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal={mobileMenuOpen ? "true" : "false"}
          aria-label="Mobile Navigation"
        >
          <div className="mobile-nav-drawer-header">
            <span className="brand-logo-mobile-box small">
              <img src="/favicons/favicon-gb.png" alt="Ayo Logo" className="brand-logo-mobile-icon" />
            </span>
            <button 
              type="button" 
              className="mobile-nav-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="mobile-nav-links">
            <a 
              href="#/" 
              className={`mobile-nav-item ${activeFace === 0 && !isCaseStudy ? 'active' : ''}`}
              onClick={handleLogoClick}
            >
              Home
            </a>
            <a 
              href="#works" 
              className={`mobile-nav-item ${activeFace === 1 && !isCaseStudy ? 'active' : ''}`}
              onClick={handleWorksClick}
            >
              Works
            </a>
            <a 
              href="#about" 
              className={`mobile-nav-item ${activeFace === 2 && !isCaseStudy ? 'active' : ''}`}
              onClick={handleAboutClick}
            >
              About
            </a>
            <a 
              href="#contact" 
              className={`mobile-nav-item ${activeFace === 3 && !isCaseStudy ? 'active' : ''}`}
              onClick={handleContactClick}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
