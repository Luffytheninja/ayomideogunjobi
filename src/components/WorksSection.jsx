import React, { useState, useEffect, useRef } from 'react';
import { caseStudies } from '../data';
import SectionFooter from './SectionFooter';

export default function WorksSection({ filter = 'ALL', onClearFilter, onSelectProject, onNotify }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringList, setIsHoveringList] = useState(false);
  const listRef = useRef(null);

  const filteredProjects = filter === 'ALL'
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === filter);

  // Active project to show in the right metadata panel
  const activeProj = (hoveredId ? caseStudies.find(p => p.id === hoveredId) : null) 
    || filteredProjects[0] 
    || caseStudies[0];

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Get preview image or video for the floating thumbnail
  const activeMedia = activeProj?.media?.[0];

  const handleItemClick = (projectId) => (e) => {
    e.stopPropagation();
    if (onSelectProject) {
      onSelectProject(projectId);
    }
  };

  return (
    <div 
      className="works-page-wrapper"
      onMouseMove={handleMouseMove}
    >
      <div className="works-container">
        <div className="works-header-row">
          <h2 className="works-heading">Works</h2>
          {filter !== 'ALL' && (
            <div className="works-filter-indicator">
              <span>Showing: <strong>{filter}</strong></span>
              <button 
                type="button" 
                className="clear-filter-btn" 
                onClick={onClearFilter}
              >
                Clear Filter ✕
              </button>
            </div>
          )}
        </div>

        <div className="works-layout">
          {/* Left Column: Project List */}
          <div 
            className="works-list"
            ref={listRef}
            onMouseEnter={(e) => {
              setIsHoveringList(true);
              setMousePos({ x: e.clientX, y: e.clientY });
            }}
            onMouseLeave={() => {
              setIsHoveringList(false);
              setHoveredId(null);
            }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`work-item ${hoveredId === project.id ? 'active' : ''}`}
                onMouseEnter={(e) => {
                  setHoveredId(project.id);
                  setIsHoveringList(true);
                  setMousePos({ x: e.clientX, y: e.clientY });
                }}
                onFocus={() => {
                  setHoveredId(project.id);
                }}
                onBlur={() => {
                  setHoveredId(null);
                }}
                onClick={handleItemClick(project.id)}
                role="button"
                tabIndex={0}
                aria-label={`View ${project.name} case study`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (onSelectProject) onSelectProject(project.id);
                  }
                }}
              >
                <span className="work-item-name">{project.name}</span>
              </div>
            ))}
          </div>

          {/* Right Column: Metadata Panel */}
          <div className="works-meta-panel parallax-meta">
            <div className="meta-card">
              <div className="meta-row">
                <span className="meta-label">Date:</span>
                <span className="meta-value">{activeProj?.date || '—'}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Roles:</span>
                <span className="meta-value">{activeProj?.roles || '—'}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Client Feedback:</span>
                <span className="meta-value">{activeProj?.clientFeedback || '—'}</span>
              </div>

              <div className="meta-cta-row">
                <button 
                  type="button" 
                  className="meta-view-btn"
                  onClick={handleItemClick(activeProj?.id)}
                >
                  <div>
                    <span>View Case Study →</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Interactive Hover Media Preview */}
      {isHoveringList && activeMedia && (
        <div 
          className="floating-work-preview"
          style={{
            left: `${mousePos.x + 24}px`,
            top: `${mousePos.y - 80}px`,
          }}
          aria-hidden="true"
        >
          {activeMedia.type === 'video' ? (
            <video 
              src={activeMedia.src} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="preview-media"
            />
          ) : (
            <img 
              src={activeMedia.src} 
              alt="" 
              className="preview-media"
            />
          )}
          <span className="preview-label">{activeProj?.name}</span>
        </div>
      )}

      <SectionFooter onNotify={onNotify} />
    </div>
  );
}
