import React, { useState, useEffect, useRef } from 'react';

function useFadeInOnScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('media-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('media-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function CaseStudyStage({
  items = [],
  study,
  frameType = 'auto', // 'auto' | 'browser' | 'mobile' | 'museum'
  onOpenLightbox,
  stageTitle
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const fadeRef = useFadeInOnScroll();

  if (!items || items.length === 0) return null;

  const currentItem = items[activeIndex] || items[0];
  const hasMultiple = items.length > 1;

  // Determine frame style automatically if frameType is 'auto'
  const resolvedFrameType = frameType !== 'auto' 
    ? frameType 
    : study?.category === 'Web Design' || currentItem.type === 'video'
      ? 'browser'
      : study?.category === 'UI/UX Design' && (study.id === 'hachi' || study.id === 'helpa-services')
        ? 'mobile'
        : 'museum';

  // Domain URL for browser mockups
  const domainUrl = `${study?.id || 'project'}.design`;

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handleStageClick = () => {
    if (onOpenLightbox) {
      onOpenLightbox(activeIndex);
    }
  };

  return (
    <div ref={fadeRef} className="cs-stage-wrapper cs-media-fade">
      {stageTitle && <h3 className="cs-stage-subtitle">{stageTitle}</h3>}

      <div 
        className={`cs-stage-container frame-${resolvedFrameType}`}
        onClick={handleStageClick}
        title="Click to view fullscreen / zoom"
      >
        {/* Top Floating Controls */}
        <div className="cs-stage-floating-header" onClick={(e) => e.stopPropagation()}>
          <span className="cs-stage-frame-badge">
            {resolvedFrameType === 'browser' ? 'Desktop Experience' : resolvedFrameType === 'mobile' ? 'Mobile App UI' : 'Brand Identity & Visuals'}
          </span>

          <button 
            type="button" 
            className="cs-stage-zoom-btn"
            onClick={handleStageClick}
            aria-label="Expand image"
            title="Expand to Fullscreen"
          >
            <span>⤢ Expand</span>
          </button>
        </div>

        {/* Dynamic Frame Wrapper */}
        <div className="cs-frame-body">
          {resolvedFrameType === 'browser' && (
            <div className="cs-browser-window">
              <div className="cs-browser-header">
                <div className="cs-browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="cs-browser-url-bar">
                  <span className="cs-url-text">https://{domainUrl}</span>
                </div>
                <div className="cs-browser-actions-dummy"></div>
              </div>
              <div className="cs-browser-viewport">
                {currentItem.type === 'video' ? (
                  <video
                    src={currentItem.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="cs-stage-video"
                  />
                ) : (
                  <img
                    src={currentItem.src}
                    alt={`${study?.name} - ${activeIndex + 1}`}
                    className="cs-stage-img"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          )}

          {resolvedFrameType === 'mobile' && (
            <div className="cs-mobile-device">
              <div className="cs-mobile-notch"></div>
              <div className="cs-mobile-viewport">
                {currentItem.type === 'video' ? (
                  <video
                    src={currentItem.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="cs-stage-video"
                  />
                ) : (
                  <img
                    src={currentItem.src}
                    alt={`${study?.name} - ${activeIndex + 1}`}
                    className="cs-stage-img"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          )}

          {resolvedFrameType === 'museum' && (
            <div className="cs-museum-matte">
              {currentItem.type === 'video' ? (
                <video
                  src={currentItem.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="cs-stage-video"
                />
              ) : (
                <img
                  src={currentItem.src}
                  alt={`${study?.name} - ${activeIndex + 1}`}
                  className="cs-stage-img"
                  loading="lazy"
                />
              )}
            </div>
          )}
        </div>

        {/* Carousel Navigation Arrows for multi-item stages */}
        {hasMultiple && (
          <>
            <button 
              type="button" 
              className="cs-stage-arrow cs-arrow-prev"
              onClick={handlePrev}
              aria-label="Previous artwork"
              title="Previous"
            >
              ‹
            </button>
            <button 
              type="button" 
              className="cs-stage-arrow cs-arrow-next"
              onClick={handleNext}
              aria-label="Next artwork"
              title="Next"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Interactive Thumbnail Filmstrip for multi-item collections */}
      {hasMultiple && (
        <div className="cs-stage-rail">
          <div className="cs-stage-rail-inner">
            {items.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className={`cs-rail-item ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View slide ${idx + 1}`}
              >
                {item.type === 'video' ? (
                  <div className="cs-rail-video-thumb">
                    <span>▶</span>
                  </div>
                ) : (
                  <img src={item.src} alt="" className="cs-rail-img" />
                )}
                <span className="cs-rail-num">{String(idx + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
