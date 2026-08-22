import React, { useState, useEffect, useRef } from 'react';
import HeaderNav from './components/HeaderNav';
import CubeContainer from './components/CubeContainer';
import CaseStudy from './components/CaseStudy';
import PdfViewerModal from './components/PdfViewerModal';
import Toast from './components/Toast';
import './portfolio.css';

export default function App() {
  // Page mapping: 0: Hero, 1: Works, 2: About Me, 3: Contact
  const [activeFace, setActiveFace] = useState(0);
  const [worksFilter, setWorksFilter] = useState('ALL');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Guard: suppress hashchange handler when we set hash programmatically
  const isProgrammaticHashChange = useRef(false);

  const notify = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Hash-based routing synchronization
  useEffect(() => {
    const handleHash = () => {
      // Skip if we triggered this hash change ourselves
      if (isProgrammaticHashChange.current) {
        isProgrammaticHashChange.current = false;
        return;
      }
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash.startsWith('work/')) {
        const id = hash.replace('work/', '');
        setActiveCaseStudyId(id);
      } else if (hash === 'works') {
        setActiveCaseStudyId(null);
        setActiveFace(1); // Page 2: Works
      } else if (hash === 'about') {
        setActiveCaseStudyId(null);
        setActiveFace(2); // Page 3: About Me
      } else if (hash === 'contact') {
        setActiveCaseStudyId(null);
        setActiveFace(3); // Page 4: Contact
      } else if (!hash || hash === '/') {
        setActiveCaseStudyId(null);
        setActiveFace(0); // Page 1: Hero
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigateFace = (faceIndex) => {
    setActiveCaseStudyId(null);
    setActiveFace(faceIndex);
    // Mark as programmatic so hashchange handler ignores this
    isProgrammaticHashChange.current = true;
    const hashes = ['', 'works', 'about', 'contact'];
    window.location.hash = hashes[faceIndex] ? `#/${hashes[faceIndex]}` : '';
  };

  const handleSelectProject = (projectId) => {
    setActiveCaseStudyId(projectId);
    isProgrammaticHashChange.current = true;
    window.location.hash = `#/work/${projectId}`;
  };

  const handleBackToWorks = () => {
    setActiveCaseStudyId(null);
    setActiveFace(1); // Page 2: Works
    isProgrammaticHashChange.current = true;
    window.location.hash = '#/works';
  };

  return (
    <div className="app-root">
      {/* Top Header Navigation */}
      <HeaderNav
        activeFace={activeFace}
        onNavigate={handleNavigateFace}
        isCaseStudy={!!activeCaseStudyId}
        onBackToWorks={handleBackToWorks}
      />

      {/* Main View Area */}
      <main className="app-main">
        {activeCaseStudyId ? (
          <CaseStudy
            caseStudyId={activeCaseStudyId}
            onBack={handleBackToWorks}
            onNotify={notify}
          />
        ) : (
          <CubeContainer
            activeFace={activeFace}
            setActiveFace={setActiveFace}
            onNavigateFace={handleNavigateFace}
            worksFilter={worksFilter}
            setWorksFilter={setWorksFilter}
            onSelectProject={handleSelectProject}
            onOpenResume={() => setIsPdfModalOpen(true)}
            onNotify={notify}
          />
        )}
      </main>

      {/* PDF Viewer & Download Modal */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Action Toast Feedback */}
      <Toast message={toastMessage} />
    </div>
  );
}
