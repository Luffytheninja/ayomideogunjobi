import React, { useState, useRef } from 'react';
import SectionFooter from './SectionFooter';

export default function AboutSection({ onOpenResume, onNotify }) {
  const [imgOffset, setImgOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 12;
    const y = (e.clientY / innerHeight - 0.5) * 12;
    setImgOffset({ x, y });
  };

  return (
    <div 
      className="about-page-wrapper"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="about-layout">
        {/* Left Column: Portrait */}
        <div className="about-image-column">
          <div 
            className="about-image-container"
            style={{
              transform: `translate3d(${imgOffset.x * 0.7}px, ${imgOffset.y * 0.7}px, 0)`
            }}
          >
            <picture>
              <source srcSet="/works/about-me.png" type="image/png" />
              <source srcSet="/about-me.png" type="image/png" />
              <img 
                src="/works/about-me.png" 
                alt="Ayomide Ogunjobi - Multidisciplinary Designer" 
                className="about-portrait-img"
                loading="eager"
              />
            </picture>
          </div>
        </div>

        {/* Right Column: Editorial Copy */}
        <div className="about-text-column">
          <div className="about-text-inner">
            <h2 className="about-heading">
              <span className="about-heading-underline">About Me</span>
            </h2>

            <div className="about-paragraphs">
              <p className="about-p">
                A multidisciplinary designer based in Lagos, Nigeria. I work across UI/UX, visual design, branding, and digital experiences, with a curiosity for how ideas can become things people actually connect with.
              </p>
              <p className="about-p">
                I like exploring different forms of design, from building digital products and identities to creating artwork and experimenting with new technologies. My work is driven by curiosity, storytelling, and a constant desire to make things a little more interesting.
              </p>
              <p className="about-p">
                I’m still learning, still experimenting, and probably already thinking about the next thing.
              </p>
            </div>

            {/* CV Viewer / Download Button */}
            <div className="about-cta-row">
              <button
                type="button"
                onClick={onOpenResume}
                className="meta-view-btn"
                title="Open and view CV PDF"
                aria-label="View Ayomide Ogunjobi Curriculum Vitae"
              >
                <div>
                  <span>View C.V →</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <SectionFooter onNotify={onNotify} />
    </div>
  );
}
