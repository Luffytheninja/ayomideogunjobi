import React, { useState, useEffect } from 'react';

export default function MediaLightboxModal({ isOpen, onClose, media = [], initialIndex = 0, title = '' }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsZoomed(false);
  }, [initialIndex, isOpen]);

  // Keyboard navigation: Escape to close, Arrow keys to navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % media.length);
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, media.length, onClose]);

  if (!isOpen || !media.length) return null;

  const currentItem = media[currentIndex] || media[0];
  const hasMultiple = media.length > 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsZoomed(false);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsZoomed(false);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed((prev) => !prev);
  };

  return (
    <div 
      className="cs-lightbox-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Full resolution media viewer"
    >
      {/* Top Toolbar */}
      <div className="cs-lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
        <div className="cs-lightbox-meta">
          <span className="cs-lightbox-title">{title}</span>
          {hasMultiple && (
            <span className="cs-lightbox-counter">
              {String(currentIndex + 1).padStart(2, '0')} / {String(media.length).padStart(2, '0')}
            </span>
          )}
        </div>

        <div className="cs-lightbox-actions">
          {currentItem.type !== 'video' && (
            <button 
              type="button" 
              className={`cs-lightbox-btn ${isZoomed ? 'active' : ''}`}
              onClick={toggleZoom}
              title={isZoomed ? 'Zoom out (Fit)' : 'Zoom in (1.5x)'}
            >
              {isZoomed ? '🔍 Fit' : '🔍 1.5x'}
            </button>
          )}

          <button 
            type="button" 
            className="cs-lightbox-close-btn"
            onClick={onClose}
            aria-label="Close fullscreen view"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Main Center Content Viewport */}
      <div className="cs-lightbox-viewport" onClick={(e) => e.stopPropagation()}>
        {hasMultiple && (
          <button 
            type="button" 
            className="cs-lightbox-nav-btn cs-nav-prev"
            onClick={handlePrev}
            aria-label="Previous image"
            title="Previous (Left Arrow)"
          >
            ‹
          </button>
        )}

        <div className={`cs-lightbox-media-wrap ${isZoomed ? 'is-zoomed' : ''}`}>
          {currentItem.type === 'video' ? (
            <video
              src={currentItem.src}
              controls
              autoPlay
              loop
              playsInline
              className="cs-lightbox-video"
            />
          ) : (
            <img
              src={currentItem.src}
              alt={`${title} - ${currentIndex + 1}`}
              className="cs-lightbox-img"
              onClick={toggleZoom}
            />
          )}
        </div>

        {hasMultiple && (
          <button 
            type="button" 
            className="cs-lightbox-nav-btn cs-nav-next"
            onClick={handleNext}
            aria-label="Next image"
            title="Next (Right Arrow)"
          >
            ›
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip (for multi-asset collections) */}
      {hasMultiple && (
        <div className="cs-lightbox-thumb-strip" onClick={(e) => e.stopPropagation()}>
          {media.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className={`cs-lightbox-thumb ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(idx);
                setIsZoomed(false);
              }}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {item.type === 'video' ? (
                <div className="cs-thumb-video-badge">▶</div>
              ) : (
                <img src={item.src} alt="" className="cs-thumb-img" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
