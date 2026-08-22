import React, { useState, useEffect, useRef } from 'react';
import { caseStudies } from '../data';
import SectionFooter from './SectionFooter';
import CaseStudyStage from './CaseStudyStage';
import MediaLightboxModal from './MediaLightboxModal';

export default function CaseStudy({ caseStudyId, onBack, onNotify }) {
  const study = caseStudies.find((item) => item.id === caseStudyId) || caseStudies[0];
  const containerRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [caseStudyId]);

  const media = study.media || [];
  const heroMedia = media.length > 0 ? [media[0]] : [];
  const secondaryMedia = media.length > 1 ? media.slice(1) : [];

  const handleOpenLightbox = (indexOffset = 0, isSecondary = false) => {
    const targetIdx = isSecondary ? indexOffset + 1 : indexOffset;
    setLightboxIndex(targetIdx);
    setLightboxOpen(true);
  };

  return (
    <article className="case-study-container" ref={containerRef}>
      {/* Top Back Navigation Bar */}
      <div className="case-study-nav-bar">
        <button 
          type="button" 
          className="cs-back-btn" 
          onClick={onBack}
        >
          ← Back to Works
        </button>
        <span className="cs-category-badge">{study.category}</span>
      </div>

      {/* Case Study Header & Title */}
      <header className="cs-header">
        <div className="cs-meta-top">
          <span className="cs-date">{study.date}</span>
          <span className="cs-roles">{study.roles}</span>
        </div>
        <h1 className="case-study-title">{study.name}</h1>
      </header>

      {/* Paragraph 1: Discovery & Problem Context */}
      {study.paragraphs?.[0] && (
        <p className="case-study-paragraph">{study.paragraphs[0]}</p>
      )}

      {/* Primary Hero Stage Showcase */}
      {heroMedia.length > 0 && (
        <CaseStudyStage
          items={heroMedia}
          study={study}
          onOpenLightbox={(idx) => handleOpenLightbox(idx, false)}
          stageTitle="Hero Showcase"
        />
      )}

      {/* Paragraph 2: Solution & Architecture Narrative */}
      {study.paragraphs?.[1] && (
        <p className="case-study-paragraph">{study.paragraphs[1]}</p>
      )}

      {/* Secondary Gallery Stage for Multiple Media / Deliverables */}
      {secondaryMedia.length > 0 && (
        <CaseStudyStage
          items={secondaryMedia}
          study={study}
          onOpenLightbox={(idx) => handleOpenLightbox(idx, true)}
          stageTitle="Design Deliverables & Visual Studies"
        />
      )}

      {/* Paragraph 3: Outcomes, Feedback & Metrics */}
      {study.paragraphs?.[2] && (
        <p className="case-study-paragraph">{study.paragraphs[2]}</p>
      )}

      {/* Bottom Back Button */}
      <div className="cs-bottom-bar">
        <button 
          type="button" 
          className="cs-back-btn-bottom" 
          onClick={onBack}
        >
          ← Back to All Works
        </button>
      </div>

      {/* Fullscreen Pan/Zoom Lightbox Modal */}
      <MediaLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        media={media}
        initialIndex={lightboxIndex}
        title={study.name}
      />

      <SectionFooter onNotify={onNotify} />
    </article>
  );
}
