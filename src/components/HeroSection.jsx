import React, { useState, useEffect, useRef } from 'react';
import SectionFooter from './SectionFooter';

export default function HeroSection({ onSelectCategory, onNotify }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Subtle interactive 3D parallax on mousemove
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 16;
    const y = (e.clientY / innerHeight - 0.5) * 16;
    setTilt({ x, y });
  };

  const handleCategoryClick = (category) => (e) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <div 
      className="hero-page-wrapper"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="hero-content"
        style={{
          transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0px)`
        }}
      >
        <h1 className="hero-title" aria-label="Ayomide Ogunjobi">
          <span className="title-row title-row-top">AYOMIDE</span>
          <span className="title-row title-row-bottom">OGUNJOBI</span>
        </h1>

        <div className="hero-categories">
          <button 
            type="button" 
            className="cat-link" 
            onClick={handleCategoryClick('Web Design')}
          >
            Web Design
          </button>
          <button 
            type="button" 
            className="cat-link" 
            onClick={handleCategoryClick('UI/UX Design')}
          >
            UI/UX Design
          </button>
          <button 
            type="button" 
            className="cat-link" 
            onClick={handleCategoryClick('Graphic Design')}
          >
            Graphic Design
          </button>
        </div>
      </div>

      <SectionFooter onNotify={onNotify} />
    </div>
  );
}
