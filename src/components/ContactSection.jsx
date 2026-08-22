import React, { useState, useEffect, useRef, useCallback } from 'react';
import SectionFooter from './SectionFooter';

/**
 * Curated display typography personality states for the animated HELLO hero.
 *
 * Each variant transitions between:
 *   - Typeface & Weight (Ojuju, Danfo, Instrument Serif, Shrikhand, Syne, Playfair, Righteous, Space Grotesk)
 *   - Brand color palette (AYO Black #0e0e0e, Earth Green #1c3e24, Blood Red #8f1818)
 *   - Letter proportions, spacing & casing
 *   - Personality-driven cartoon transforms
 */
const HELLO_VARIANTS = [
  {
    name: 'african-contemporary',
    fontFamily: "'Ojuju', sans-serif",
    fontWeight: 800,
    fontStyle: 'normal',
    color: '#0e0e0e', // Black
    letterSpacing: '-0.04em',
    text: 'HELLO',
    personality: 'Contemporary / Sculptural'
  },
  {
    name: 'playful-danfo',
    fontFamily: "'Danfo', cursive",
    fontWeight: 400,
    fontStyle: 'normal',
    color: '#1c3e24', // Earth Green
    letterSpacing: '0.015em',
    text: 'HELLO',
    personality: 'Playful / Expressive'
  },
  {
    name: 'editorial-script-serif',
    fontFamily: "'Instrument Serif', 'Playfair Display', serif",
    fontWeight: 400,
    fontStyle: 'italic',
    color: '#8f1818', // Blood Red
    letterSpacing: '-0.01em',
    text: 'Hello',
    personality: 'Editorial / Calligraphic'
  },
  {
    name: 'chunky-poster',
    fontFamily: "'Shrikhand', cursive",
    fontWeight: 400,
    fontStyle: 'normal',
    color: '#0e0e0e', // Black
    letterSpacing: '0.01em',
    text: 'HELLO',
    personality: 'Chunky / Poster'
  },
  {
    name: 'sixtyfour-pixel',
    fontFamily: "'Sixtyfour', cursive, monospace",
    fontWeight: 400,
    fontStyle: 'normal',
    color: '#1c3e24', // Earth Green
    letterSpacing: '-0.025em',
    text: 'HELLO',
    personality: 'Pixel / Sixtyfour'
  },
  {
    name: 'blackletter-gothic',
    fontFamily: "'UnifrakturMaguntia', cursive",
    fontWeight: 400,
    fontStyle: 'normal',
    color: '#8f1818', // Blood Red
    letterSpacing: '0.015em',
    text: 'Hello',
    personality: 'Gothic / Blackletter'
  },
  {
    name: 'geometric-pop',
    fontFamily: "'Righteous', cursive",
    fontWeight: 400,
    fontStyle: 'normal',
    color: '#0e0e0e', // Black
    letterSpacing: '0.01em',
    text: 'HELLO',
    personality: 'Geometric / Pop'
  },
  {
    name: 'couture-high-serif',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 800,
    fontStyle: 'italic',
    color: '#8f1818', // Blood Red
    letterSpacing: '-0.025em',
    text: 'Hello',
    personality: 'Couture / High-Fashion'
  },
  {
    name: 'modern-techno',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontStyle: 'normal',
    color: '#1c3e24', // Earth Green
    letterSpacing: '-0.035em',
    text: 'HELLO',
    personality: 'Modern / Techno'
  }
];

export default function ContactSection({ onNotify }) {
  const [variantIndex, setVariantIndex] = useState(0);
  const [morphPhase, setMorphPhase] = useState('idle'); // 'idle' | 'morph-out' | 'morph-in'
  const [isClickBouncing, setIsClickBouncing] = useState(false);

  const morphTimerRef = useRef(null);
  const cycleIntervalRef = useRef(null);
  const clickResetRef = useRef(null);

  // Transition to next variant with jumpy cartoon squash-and-stretch
  const transitionToNext = useCallback((targetIdx = null) => {
    // Clear any pending timers
    if (morphTimerRef.current) clearTimeout(morphTimerRef.current);

    // Phase 1: Jumpy Anticipation Wind-up (squash & dip)
    setMorphPhase('morph-out');

    morphTimerRef.current = setTimeout(() => {
      // Phase 2: Switch variant state
      setVariantIndex((prev) => (targetIdx !== null ? targetIdx : (prev + 1) % HELLO_VARIANTS.length));
      // Phase 3: Morph-in cartoon arrival (funky snap & elastic overshoot)
      setMorphPhase('morph-in');

      morphTimerRef.current = setTimeout(() => {
        setMorphPhase('idle');
      }, 340);
    }, 110);
  }, []);

  // Periodic automatic cycling — fast, snappy & lively (1400ms)
  useEffect(() => {
    cycleIntervalRef.current = setInterval(() => {
      transitionToNext();
    }, 1400);

    return () => {
      if (cycleIntervalRef.current) clearInterval(cycleIntervalRef.current);
      if (morphTimerRef.current) clearTimeout(morphTimerRef.current);
      if (clickResetRef.current) clearTimeout(clickResetRef.current);
    };
  }, [transitionToNext]);

  // Interactive click handler: immediate snappy cartoon morph + bounce
  const handleHelloClick = () => {
    // Reset automatic cycle timer on user interaction
    if (cycleIntervalRef.current) {
      clearInterval(cycleIntervalRef.current);
      cycleIntervalRef.current = setInterval(() => {
        transitionToNext();
      }, 1400);
    }

    if (clickResetRef.current) clearTimeout(clickResetRef.current);
    setIsClickBouncing(false);

    requestAnimationFrame(() => {
      transitionToNext();
      setIsClickBouncing(true);
      clickResetRef.current = setTimeout(() => {
        setIsClickBouncing(false);
      }, 500);
    });
  };

  const v = HELLO_VARIANTS[variantIndex];

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">

        {/* ── Upper block: "Get in touch" label + Understated Social Links ── */}
        <div className="contact-upper">
          <p className="contact-label">Get in touch</p>
          <div className="contact-links">
            <a
              href="mailto:ayomide.gunjob@gmail.com"
              className="contact-link"
              onClick={() => {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                  navigator.clipboard.writeText('ayomide.gunjob@gmail.com')
                    .then(() => {
                      if (onNotify) onNotify('Copied email to clipboard');
                    })
                    .catch(() => {});
                }
              }}
            >
              Email
            </a>
            <a
              href="https://wa.me/2348143741574"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              WhatsApp
            </a>
            <a
              href="https://linkedin.com/in/ayomideogunjobi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* ── Visual Hero: Gigantic Animated HELLO spanning viewport width ── */}
        <div
          className={`contact-hello-container ${isClickBouncing ? 'is-click-bouncing' : ''}`}
          onClick={handleHelloClick}
          title="Click to morph typography personality"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleHelloClick(); }}
          aria-label={`HELLO — ${v.personality}. Click to cycle typography personality.`}
        >
          <h2
            className={`contact-hello morph-${morphPhase}`}
            style={{
              fontFamily: v.fontFamily,
              fontWeight: v.fontWeight,
              fontStyle: v.fontStyle,
              color: v.color,
              letterSpacing: v.letterSpacing,
            }}
          >
            <span className="hello-word-inner">
              {v.text}
            </span>
          </h2>
        </div>

      </div>

      <SectionFooter onNotify={onNotify} />
    </div>
  );
}
