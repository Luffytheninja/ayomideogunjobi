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
  const [activeBeforeAfterTab, setActiveBeforeAfterTab] = useState(0);

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

  const handleOpenDirectLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Check if this is a structured living case study (like Helpa)
  const isLivingStudy = Boolean(study.roleDetails && study.problem);

  return (
    <article className="case-study-container" ref={containerRef}>
      {/* Top Back Navigation Bar — back button only */}
      <div className="case-study-nav-bar">
        <button 
          type="button" 
          className="cs-back-btn" 
          onClick={onBack}
        >
          ← Back to Works
        </button>
      </div>

      {/* Badges row: green tag + live site button + category — sits above the title for clean stacking on mobile */}
      <div className="cs-nav-badges">
        {isLivingStudy && (
          <span className="cs-living-badge">
            {study.id === 'helpa-services'
              ? 'Living Case Study · In Progress'
              : study.id === 'hachi'
              ? 'Personal Product · Working MVP'
              : study.id === 'faem'
              ? 'Live Platform · Afro-Electronic Universe'
              : study.id === 'opn-wrld'
              ? 'Live Digital Storefront · Streetwear Label'
              : study.id === 'champion-custard'
              ? 'Brand Campaign · Social Media & Art Direction'
              : study.status || 'Live Project'}
          </span>
        )}
        {study.website && (
          <a 
            href={study.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cs-live-site-link-btn"
            title={`Visit ${study.name} live`}
          >
            <span>Visit Live Site</span>
            <span className="live-link-arrow">↗</span>
          </a>
        )}
        <span className="cs-category-badge">{study.category}</span>
      </div>

      {/* Case Study Header & Title */}
      <header className="cs-header">
        <div className="cs-meta-top">
          <span className="cs-date">{study.date}</span>
          <span className="cs-roles">{study.roles}</span>
        </div>
        <h1 className="case-study-title">{study.name}</h1>
        {study.subtitle && (
          <p className="cs-header-subtitle">{study.subtitle}</p>
        )}
      </header>

      {/* LIVING CASE STUDY LAYOUT */}
      {isLivingStudy ? (
        <div className="living-case-study-body">
          {/* 01. Hero Summary & Showcase */}
          <section className="cs-section cs-hero-section">
            <div className="cs-section-label">01. Overview</div>
            {study.summary && (
              <p className="cs-lead-paragraph">{study.summary}</p>
            )}
            {heroMedia.length > 0 && (
              <CaseStudyStage
                items={heroMedia}
                study={study}
                onOpenLightbox={(idx) => handleOpenLightbox(idx, false)}
                stageTitle={
                  study.id === 'helpa-services'
                    ? "Redesign Showcase (V2)"
                    : study.id === 'faem'
                    ? "Live Platform Showcase · faemous010.com"
                    : study.id === 'opn-wrld'
                    ? "Digital Storefront Showcase · openworlddrops.vercel.app"
                    : study.id === 'champion-custard'
                    ? "Social Media & Visual Campaign Showcase"
                    : "Product MVP Showcase"
                }
              />
            )}
          </section>

          {/* 02. My Role & Collaboration */}
          <section className="cs-section cs-role-section">
            <div className="cs-section-label">02. My Role & Scope</div>
            <div className="cs-role-grid">
              <div className="cs-role-card">
                <span className="role-card-label">Role</span>
                <span className="role-card-value">{study.roleDetails.title}</span>
              </div>
              <div className="cs-role-card">
                <span className="role-card-label">Team / Client</span>
                <span className="role-card-value">{study.roleDetails.team}</span>
              </div>
              <div className="cs-role-card">
                <span className="role-card-label">Scope</span>
                <span className="role-card-value">{study.roleDetails.scope}</span>
              </div>
              <div className="cs-role-card">
                <span className="role-card-label">Collaboration</span>
                <span className="role-card-value">{study.roleDetails.collaboration}</span>
              </div>
              {study.roleDetails.tools && (
                <div className="cs-role-card cs-tools-card">
                  <span className="role-card-label">Tools & Stack</span>
                  <span className="role-card-value">{study.roleDetails.tools}</span>
                </div>
              )}
            </div>
            <blockquote className="cs-quote-box">
              {study.roleDetails.narrative}
            </blockquote>
          </section>

          {/* 03. The Problem / Creative Challenge */}
          <section className="cs-section cs-problem-section">
            <div className="cs-section-label">
              {study.id === 'champion-custard' ? '03. The Creative Challenge' : '03. The Problem'}
            </div>
            <div className="cs-insight-banner">
              <span className="insight-tag">
                {study.id === 'champion-custard' ? 'Creative Focus' : 'Core Insight'}
              </span>
              <h2 className="insight-heading">"{study.problem.headline}"</h2>
            </div>
            <p className="case-study-paragraph">{study.problem.description}</p>
            
            <div className="cs-friction-grid">
              {study.problem.frictionPoints.map((point, idx) => (
                <div key={idx} className="friction-card">
                  <span className="friction-idx">{study.id === 'champion-custard' ? '✦' : '✕'}</span>
                  <span className="friction-text">{point}</span>
                </div>
              ))}
            </div>

            <div className="cs-challenge-box">
              <span className="challenge-label">Design Challenge</span>
              <p className="challenge-question">{study.problem.challenge}</p>
            </div>
          </section>

          {/* 04. Context & Ecosystem */}
          {study.ecosystem && (
            <section className="cs-section cs-ecosystem-section">
              <div className="cs-section-label">
                {study.id === 'faem'
                  ? "04. Designing an Artist's Universe"
                  : study.id === 'opn-wrld'
                  ? "04. Designing the Experience"
                  : "04. Marketplace Context & Ecosystem"}
              </div>
              <h3 className="cs-subheading">
                {study.id === 'faem'
                  ? "Core Interaction Modes & User Journey"
                  : study.id === 'opn-wrld'
                  ? "User Experience Hierarchy & Flow"
                  : "The User Flow Journey"}
              </h3>
              <div className="cs-flow-strip">
                {study.ecosystem.userJourney.map((step, idx) => (
                  <div key={idx} className="flow-step-item">
                    <span className="flow-step-num">{step.step}</span>
                    <span className="flow-step-title">{step.label}</span>
                    <span className="flow-step-desc">{step.desc}</span>
                  </div>
                ))}
              </div>

              <h3 className="cs-subheading" style={{ marginTop: '36px' }}>
                {study.id === 'faem'
                  ? "Ecosystem & Platform Integration"
                  : study.id === 'opn-wrld'
                  ? "Storefront Touchpoints & Visual Language"
                  : "Underlying Marketplace Systems"}
              </h3>
              <div className="cs-systems-grid">
                {study.ecosystem.systems.map((sys, idx) => (
                  <div key={idx} className="system-pill">
                    <span className="system-dot">●</span>
                    <span>{sys}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Editorial & Narrative Strategy */}
          {study.editorialStrategy && (
            <section className="cs-section cs-editorial-section">
              <div className="cs-section-label">05. Editorial & Content Architecture</div>
              <div className="cs-insight-banner cs-editorial-banner">
                <span className="insight-tag">Content Strategy</span>
                <h2 className="insight-heading">"{study.editorialStrategy.headline}"</h2>
              </div>
              <p className="case-study-paragraph">{study.editorialStrategy.description}</p>
              
              {study.editorialStrategy.shift && (
                <div className="cs-shift-box">
                  <span className="shift-tag">Core Paradigm Shift</span>
                  <p className="shift-text">{study.editorialStrategy.shift}</p>
                </div>
              )}

              {study.editorialStrategy.sections && (
                <div className="cs-editorial-cards-grid">
                  {study.editorialStrategy.sections.map((sec, idx) => (
                    <div key={idx} className="editorial-card">
                      <span className="editorial-step">{String(idx + 1).padStart(2, '0')}</span>
                      <h4 className="editorial-title">{sec.title}</h4>
                      <p className="editorial-desc">{sec.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Visual Direction & Aesthetic */}
          {study.visualDirection && (
            <section className="cs-section cs-visual-dir-section">
              <div className="cs-section-label">Visual Direction & Aesthetic North Star</div>
              <div className="cs-visual-dir-card">
                <div className="visual-dir-top">
                  <span className="visual-dir-tag">Brand Character & Visual System</span>
                  <h3 className="visual-dir-heading">"{study.visualDirection.headline}"</h3>
                  {study.visualDirection.tagline && (
                    <p className="visual-dir-tagline">{study.visualDirection.tagline}</p>
                  )}
                </div>
                <p className="case-study-paragraph visual-dir-desc">
                  {study.visualDirection.description}
                </p>
              </div>
            </section>
          )}

          {/* Deliverables Matrix */}
          {study.deliverables && (
            <section className="cs-section cs-deliverables-section">
              <div className="cs-section-label">
                {study.id === 'opn-wrld' 
                  ? "Disciplines & Project Scope" 
                  : study.id === 'champion-custard'
                  ? "Scope of Work & Creative Deliverables"
                  : "What I Worked On"}
              </div>
              <div className="cs-deliverables-grid">
                {study.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliverable-card">
                    <h4 className="deliverable-title">{deliv.title}</h4>
                    <ul className="deliverable-list">
                      {deliv.items.map((item, iIdx) => (
                        <li key={iIdx} className="deliverable-item">
                          <span className="deliverable-dot">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Lessons */}
          {study.lessons && (
            <section className="cs-section cs-lessons-section">
              <div className="cs-section-label">
                {study.id === 'helpa-services'
                  ? "05. V1 Retrospective & Insights"
                  : study.id === 'opn-wrld'
                  ? "What I Learned"
                  : study.id === 'champion-custard'
                  ? "Building My Visual Fundamentals"
                  : "Key Insights & Lessons"}
              </div>
              {study.id === 'helpa-services' && (
                <blockquote className="cs-quote-box">
                  "Because I had worked on the original product, I wasn't approaching the redesign as an external audit. I had context behind many of the original decisions and could identify where the product had evolved beyond the assumptions we initially designed around."
                </blockquote>
              )}
              <div className="cs-lessons-grid">
                {study.lessons.map((lesson, idx) => (
                  <div key={idx} className="lesson-card">
                    <span className="lesson-badge">Lesson {lesson.number}</span>
                    <h4 className="lesson-title">{lesson.title}</h4>
                    <p className="lesson-desc">{lesson.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Product Strategy */}
          {study.strategy && (
            <section className="cs-section cs-strategy-section">
              <div className="cs-section-label">
                {study.id === 'helpa-services'
                  ? "06. Redesign Strategy"
                  : study.id === 'opn-wrld'
                  ? "Storefront & Systems Strategy"
                  : "Product Strategy & Architecture Principles"}
              </div>
              <div className="cs-strategy-grid">
                {study.strategy.map((strat, idx) => (
                  <div key={idx} className="strategy-card">
                    <div className="strategy-card-header">
                      <span className="strategy-num">{strat.number}</span>
                      <h4 className="strategy-title">{strat.title}</h4>
                    </div>
                    <p className="strategy-desc">{strat.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* From Figma to Frontend */}
          {study.figmaToCode && (
            <section className="cs-section cs-code-section">
              <div className="cs-section-label">
                {study.id === 'opn-wrld' ? "Design + Development Pipeline" : "From Figma to Production"}
              </div>
              <h3 className="cs-subheading">{study.figmaToCode.headline}</h3>
              <p className="case-study-paragraph">{study.figmaToCode.description}</p>
              
              <div className="cs-pipeline-grid">
                {study.figmaToCode.pipeline.map((p, idx) => (
                  <div key={idx} className="pipeline-card">
                    <span className="pipeline-step">{p.stage}</span>
                    <h4 className="pipeline-label">{p.label}</h4>
                    <span className="pipeline-detail">{p.detail}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 08. Before / After Transformations (when applicable) */}
          {study.beforeAfter && (
            <section className="cs-section cs-comparisons-section">
              <div className="cs-section-label">08. Before & After Transformations</div>
              
              <div className="cs-tab-bar">
                {study.beforeAfter.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`cs-tab-btn ${idx === activeBeforeAfterTab ? 'active' : ''}`}
                    onClick={() => setActiveBeforeAfterTab(idx)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {study.beforeAfter[activeBeforeAfterTab] && (
                <div className="cs-comparison-viewer">
                  <div className="comparison-columns">
                    {/* Before Column */}
                    <div className="comparison-col before-col">
                      <div className="col-header">
                        <span className="badge-before">BEFORE (V1)</span>
                      </div>
                      <div className="col-img-wrap" onClick={() => handleOpenDirectLightbox(12)}>
                        <img 
                          src={study.beforeAfter[activeBeforeAfterTab].beforeImg} 
                          alt="Before Redesign"
                          className="comparison-img"
                        />
                      </div>
                    </div>

                    {/* What Changed Column */}
                    <div className="comparison-col changes-col">
                      <div className="col-header">
                        <span className="badge-changes">WHAT CHANGED</span>
                      </div>
                      <ul className="changes-list">
                        {study.beforeAfter[activeBeforeAfterTab].changes.map((change, cIdx) => (
                          <li key={cIdx} className="change-item">
                            <span className="change-bullet">→</span>
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* After Column */}
                    <div className="comparison-col after-col">
                      <div className="col-header">
                        <span className="badge-after">AFTER (V2)</span>
                      </div>
                      <div className="col-img-wrap" onClick={() => handleOpenDirectLightbox(2)}>
                        <img 
                          src={study.beforeAfter[activeBeforeAfterTab].afterImg} 
                          alt="After Redesign"
                          className="comparison-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* 09. Where the Product is Now */}
          {study.currentState && (
            <section className="cs-section cs-current-section">
              <div className="cs-section-label">09. Current State</div>
              <div className="cs-status-banner">
                <span className="status-indicator-dot"></span>
                <span className="status-indicator-text">{study.currentState.status}</span>
              </div>
              <p className="case-study-paragraph">{study.currentState.narrative}</p>
              
              <div className="cs-milestones-list">
                {study.currentState.milestones.map((m, idx) => (
                  <div key={idx} className="milestone-item">
                    <span className={`milestone-badge ${m.status.toLowerCase().replace(' ', '-')}`}>
                      {m.status}
                    </span>
                    <span className="milestone-name">{m.label}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 10. Outcomes & What Has Changed */}
          {study.outcomes && (
            <section className="cs-section cs-outcomes-section">
              <div className="cs-section-label">10. Outcomes & Impact</div>
              <h3 className="cs-subheading">{study.outcomes.headline}</h3>
              <ul className="outcomes-checklist">
                {study.outcomes.points.map((pt, idx) => (
                  <li key={idx} className="outcome-item">
                    <span className="outcome-check">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              {study.outcomes.metricsNote && (
                <div className="metrics-note-box">
                  <span className="note-icon">ℹ</span>
                  <span>{study.outcomes.metricsNote}</span>
                </div>
              )}
              {study.website && (
                <div className="cs-live-website-cta">
                  <a
                    href={study.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-primary-live-link"
                  >
                    <span>Visit Live Website ({study.website.replace(/^https?:\/\//, '').replace(/\/$/, '')})</span>
                    <span className="cta-arrow">↗</span>
                  </a>
                </div>
              )}
            </section>
          )}

          {/* 11. Reflection */}
          {study.reflection && (
            <section className="cs-section cs-reflection-section">
              <div className="cs-section-label">11. Reflection</div>
              {study.reflection.map((para, idx) => (
                <p key={idx} className="case-study-paragraph reflection-para">
                  {para}
                </p>
              ))}
            </section>
          )}

          {/* 12. Project Credits (when available) */}
          {study.credits && (
            <section className="cs-section cs-credits-section">
              <div className="cs-section-label">Credits</div>
              <div className="cs-role-grid">
                <div className="cs-role-card">
                  <span className="role-card-label">Design & Art Direction</span>
                  <span className="role-card-value">{study.credits.designer}</span>
                </div>
                <div className="cs-role-card">
                  <span className="role-card-label">{study.credits.agency ? "Agency / Client" : "Brand / Client"}</span>
                  <span className="role-card-value">
                    {study.credits.agency ? `${study.credits.agency} · ${study.credits.client}` : study.credits.client}
                  </span>
                </div>
                <div className="cs-role-card">
                  <span className="role-card-label">Platform / Format</span>
                  <span className="role-card-value">{study.credits.platform}</span>
                </div>
                <div className="cs-role-card">
                  <span className="role-card-label">Timeline / Year</span>
                  <span className="role-card-value">{study.credits.year}</span>
                </div>
              </div>
              {study.credits.liveUrl && (
                <div className="cs-live-website-cta">
                  <a
                    href={study.credits.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-primary-live-link"
                  >
                    <span>Visit the live {study.name} website →</span>
                  </a>
                </div>
              )}
            </section>
          )}

          {/* Complete Visual Deliverables Stage */}
          {secondaryMedia.length > 0 && (
            <section className="cs-section cs-gallery-section">
              <div className="cs-section-label">
                {study.id === 'opn-wrld' 
                  ? "Campaign Visuals, Drop Posters & Archive" 
                  : study.id === 'champion-custard'
                  ? "Campaign Visuals, Social Artboards & Archive"
                  : "Design Deliverables & Screen System"}
              </div>
              <CaseStudyStage
                items={secondaryMedia}
                study={study}
                onOpenLightbox={(idx) => handleOpenLightbox(idx, true)}
                stageTitle={
                  study.id === 'helpa-services'
                    ? "All Screens & Interactive Flows (V2)"
                    : study.id === 'opn-wrld'
                    ? "Campaign Posters, Drop Artwork & Archive"
                    : study.id === 'champion-custard'
                    ? "Social Media Visuals, Campaign Graphics & Artboards"
                    : "App Screens & Visual System"
                }
              />
            </section>
          )}
        </div>
      ) : (
        /* STANDARD CASE STUDY LAYOUT (OPN WRLD, FAEM, ETC.) */
        <>
          {study.paragraphs?.[0] && (
            <p className="case-study-paragraph">{study.paragraphs[0]}</p>
          )}

          {heroMedia.length > 0 && (
            <CaseStudyStage
              items={heroMedia}
              study={study}
              onOpenLightbox={(idx) => handleOpenLightbox(idx, false)}
              stageTitle="Hero Showcase"
            />
          )}

          {study.paragraphs?.[1] && (
            <p className="case-study-paragraph">{study.paragraphs[1]}</p>
          )}

          {secondaryMedia.length > 0 && (
            <CaseStudyStage
              items={secondaryMedia}
              study={study}
              onOpenLightbox={(idx) => handleOpenLightbox(idx, true)}
              stageTitle="Design Deliverables & Visual Studies"
            />
          )}

          {study.paragraphs?.[2] && (
            <p className="case-study-paragraph">{study.paragraphs[2]}</p>
          )}
        </>
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

