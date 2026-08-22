import React, { useState, useEffect, useRef, useCallback } from 'react';
import HeroSection from './HeroSection';
import WorksSection from './WorksSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

export default function CubeContainer({
  activeFace,
  setActiveFace,
  onNavigateFace,
  worksFilter,
  setWorksFilter,
  onSelectProject,
  onOpenResume,
  onNotify
}) {
  // Continuous rotation angle in degrees (Face 0 = 0deg, Face 1 = 90deg, Face 2 = 180deg, Face 3 = 270deg)
  const [rotationAngle, setRotationAngle] = useState(() => (activeFace % 4) * 90);
  const [currentFace, setCurrentFace] = useState(activeFace);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const containerRef = useRef(null);
  const faceRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Authoritative State Tracking Refs
  const rotationAngleRef = useRef(rotationAngle);
  const currentFaceRef = useRef(activeFace);
  const isTransitioningRef = useRef(false);
  const pendingTargetFaceRef = useRef(null);
  const transitionCooldownRef = useRef(0);

  // Wheel & Touch Accumulators
  const wheelBufferRef = useRef(0);
  const wheelLastTimeRef = useRef(0);
  const boundaryArriveTimeRef = useRef({ top: 0, bottom: 0 });
  const touchStartRef = useRef({ x: 0, y: 0, time: 0, atTop: false, atBottom: false });

  // Keep tracking refs in sync
  rotationAngleRef.current = rotationAngle;
  currentFaceRef.current = currentFace;
  isTransitioningRef.current = isTransitioning;

  // Authoritative Deterministic 3D Cube Transition Engine
  const executeTransition = useCallback((targetIndex, direction = null) => {
    const normalizedTarget = ((targetIndex % 4) + 4) % 4;
    const currentNorm = ((currentFaceRef.current % 4) + 4) % 4;

    // If already on the target face and no explicit sequential direction requested, it's a no-op
    if (normalizedTarget === currentNorm && direction === null) return;

    // If currently animating, queue the latest intended destination
    if (isTransitioningRef.current) {
      pendingTargetFaceRef.current = normalizedTarget;
      return;
    }

    setIsTransitioning(true);
    isTransitioningRef.current = true;
    transitionCooldownRef.current = Date.now() + 1000;

    let stepDelta = 0;
    if (direction === 'next') {
      stepDelta = 1;
    } else if (direction === 'prev') {
      stepDelta = -1;
    } else {
      // Calculate shortest continuous angular step on 4-face ring
      let diff = normalizedTarget - currentNorm;
      if (diff === 3) diff = -1;
      if (diff === -3) diff = 1;
      stepDelta = diff;
    }

    const nextAngle = rotationAngleRef.current + stepDelta * 90;
    rotationAngleRef.current = nextAngle;
    setRotationAngle(nextAngle);
    currentFaceRef.current = normalizedTarget;
    setCurrentFace(normalizedTarget);

    // Reset scroll of destination face to top
    const targetScrollEl = faceRefs[normalizedTarget]?.current;
    if (targetScrollEl) {
      targetScrollEl.scrollTop = 0;
    }

    // Inform parent of new active face
    if (onNavigateFace) {
      onNavigateFace(normalizedTarget);
    } else if (setActiveFace) {
      setActiveFace(normalizedTarget);
    }

    // Reset boundary timers and accumulators
    boundaryArriveTimeRef.current = { top: 0, bottom: 0 };
    wheelBufferRef.current = 0;

    setTimeout(() => {
      setIsTransitioning(false);
      isTransitioningRef.current = false;

      // If another destination was queued while animating, execute it cleanly
      if (pendingTargetFaceRef.current !== null) {
        const queuedTarget = pendingTargetFaceRef.current;
        pendingTargetFaceRef.current = null;
        if (queuedTarget !== currentFaceRef.current) {
          executeTransition(queuedTarget);
        }
      }
    }, 850);
  }, [onNavigateFace, setActiveFace]);

  // Synchronize when activeFace prop changes from HeaderNav or Hash Router
  useEffect(() => {
    const normProp = ((activeFace % 4) + 4) % 4;
    const currentNorm = ((currentFaceRef.current % 4) + 4) % 4;

    if (normProp !== currentNorm) {
      executeTransition(normProp);
    }
  }, [activeFace, executeTransition]);

  // Controlled, Low-Sensitivity Wheel Event Controller for Cube Rotation
  useEffect(() => {
    const handleWheel = (e) => {
      const now = Date.now();

      // Absorb wheel events during transitions or momentum cooldown
      if (isTransitioningRef.current || now < transitionCooldownRef.current) {
        return;
      }

      const activeEl = faceRefs[currentFaceRef.current]?.current;
      if (!activeEl) return;

      const { scrollTop, scrollHeight, clientHeight } = activeEl;
      const isScrollable = scrollHeight > clientHeight + 8;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 6;
      const isAtTop = scrollTop <= 6;

      // Ignore micro-deltas (trackpad drift)
      if (Math.abs(e.deltaY) < 6) return;

      if (now - wheelLastTimeRef.current > 350) {
        wheelBufferRef.current = 0;
      }
      wheelLastTimeRef.current = now;

      if (e.deltaY > 0) {
        // Scrolling Downward
        if (!isScrollable || isAtBottom) {
          if (!boundaryArriveTimeRef.current.bottom) {
            boundaryArriveTimeRef.current.bottom = now;
          }

          if (now - boundaryArriveTimeRef.current.bottom >= 450) {
            wheelBufferRef.current += e.deltaY;
            if (wheelBufferRef.current >= 320) {
              wheelBufferRef.current = 0;
              boundaryArriveTimeRef.current.bottom = 0;
              boundaryArriveTimeRef.current.top = 0;
              executeTransition(currentFaceRef.current + 1, 'next');
            }
          }
        } else {
          wheelBufferRef.current = 0;
          boundaryArriveTimeRef.current.bottom = 0;
        }
      } else if (e.deltaY < 0) {
        // Scrolling Upward
        if (!isScrollable || isAtTop) {
          if (!boundaryArriveTimeRef.current.top) {
            boundaryArriveTimeRef.current.top = now;
          }

          if (now - boundaryArriveTimeRef.current.top >= 450) {
            wheelBufferRef.current += e.deltaY;
            if (wheelBufferRef.current <= -320) {
              wheelBufferRef.current = 0;
              boundaryArriveTimeRef.current.bottom = 0;
              boundaryArriveTimeRef.current.top = 0;
              executeTransition(currentFaceRef.current - 1, 'prev');
            }
          }
        } else {
          wheelBufferRef.current = 0;
          boundaryArriveTimeRef.current.top = 0;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [executeTransition]);

  // Touch Gesture Controller
  useEffect(() => {
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      const activeEl = faceRefs[currentFaceRef.current]?.current;
      let atTop = true;
      let atBottom = true;

      if (activeEl) {
        const { scrollTop, scrollHeight, clientHeight } = activeEl;
        const isScrollable = scrollHeight > clientHeight + 8;
        atTop = !isScrollable || scrollTop <= 8;
        atBottom = !isScrollable || scrollTop + clientHeight >= scrollHeight - 8;
      }

      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
        atTop,
        atBottom
      };
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (isTransitioningRef.current || now < transitionCooldownRef.current) return;

      const touch = e.changedTouches[0];
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaTime = now - touchStartRef.current.time;

      if (Math.abs(deltaY) > 80 && Math.abs(deltaY) > Math.abs(deltaX) * 1.4 && deltaTime < 500) {
        if (deltaY < 0 && touchStartRef.current.atBottom) {
          // Swiped Up at bottom -> Next Face
          executeTransition(currentFaceRef.current + 1, 'next');
        } else if (deltaY > 0 && touchStartRef.current.atTop) {
          // Swiped Down at top -> Previous Face
          executeTransition(currentFaceRef.current - 1, 'prev');
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [executeTransition]);

  // Keyboard Controller
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioningRef.current) return;

      const activeEl = faceRefs[currentFaceRef.current]?.current;
      const { scrollTop, scrollHeight, clientHeight } = activeEl || { scrollTop: 0, scrollHeight: 0, clientHeight: 0 };
      const isScrollable = scrollHeight > clientHeight + 8;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 8;
      const isAtTop = scrollTop <= 8;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (!isScrollable || isAtBottom) {
          e.preventDefault();
          executeTransition(currentFaceRef.current + 1, 'next');
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (!isScrollable || isAtTop) {
          e.preventDefault();
          executeTransition(currentFaceRef.current - 1, 'prev');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [executeTransition]);

  // Scroll Parallax Handler
  const handleScroll = (faceIdx) => (e) => {
    const el = e.target;
    const parallaxItems = el.querySelectorAll('.parallax-layer');
    parallaxItems.forEach((item) => {
      const speed = parseFloat(item.getAttribute('data-speed') || '0.2');
      item.style.transform = `translate3d(0, ${-el.scrollTop * speed}px, 0)`;
    });
  };

  const handleHeroCategorySelect = (category) => {
    if (setWorksFilter) setWorksFilter(category);
    executeTransition(1); // Go directly to Page 2: Works face
  };

  return (
    <div className="cube-scene" ref={containerRef}>
      {/* 3D Animated Cube World */}
      <div 
        className={`cube-box ${!isTransitioning ? 'is-idle' : ''}`}
        style={{
          transform: isTransitioning ? `translateZ(-50vh) rotateX(${rotationAngle}deg)` : undefined
        }}
      >
        {/* Face 0: Hero (Page 1) */}
        <div className={`cube-face face-front ${currentFace === 0 ? 'face-active' : ''}`}>
          <div 
            className="cube-face-scroll"
            ref={faceRefs[0]}
            onScroll={handleScroll(0)}
          >
            <HeroSection 
              onSelectCategory={handleHeroCategorySelect} 
              onNotify={onNotify}
            />
          </div>
        </div>

        {/* Face 1: Works (Page 2) */}
        <div className={`cube-face face-bottom ${currentFace === 1 ? 'face-active' : ''}`}>
          <div 
            className="cube-face-scroll"
            ref={faceRefs[1]}
            onScroll={handleScroll(1)}
          >
            <WorksSection 
              filter={worksFilter}
              onClearFilter={() => setWorksFilter && setWorksFilter('ALL')}
              onSelectProject={onSelectProject}
              onNotify={onNotify}
            />
          </div>
        </div>

        {/* Face 2: About Me (Page 3) */}
        <div className={`cube-face face-back ${currentFace === 2 ? 'face-active' : ''}`}>
          <div 
            className="cube-face-scroll"
            ref={faceRefs[2]}
            onScroll={handleScroll(2)}
          >
            <AboutSection 
              onOpenResume={onOpenResume}
              onNotify={onNotify}
            />
          </div>
        </div>

        {/* Face 3: Contact (Page 4) */}
        <div className={`cube-face face-top ${currentFace === 3 ? 'face-active' : ''}`}>
          <div 
            className="cube-face-scroll"
            ref={faceRefs[3]}
            onScroll={handleScroll(3)}
          >
            <ContactSection onNotify={onNotify} />
          </div>
        </div>
      </div>
    </div>
  );
}
