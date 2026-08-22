import React, { useEffect } from 'react';

export default function PdfViewerModal({ isOpen, onClose }) {
  // Support Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfUrl = '/Ayomide Ogunjobi CV 2026 PD.pdf';

  return (
    <div className="pdf-modal-backdrop" onClick={onClose}>
      <div 
        className="pdf-modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Ayomide Ogunjobi CV PDF Viewer"
      >
        {/* Modal Header Toolbar */}
        <div className="pdf-modal-toolbar">
          <div className="pdf-toolbar-info">
            <span className="pdf-doc-badge">PDF</span>
            <span className="pdf-doc-title">Ayomide Ogunjobi — CV 2026</span>
          </div>

          <div className="pdf-toolbar-actions">
            {/* Download Button */}
            <a
              href={pdfUrl}
              download="Ayomide Ogunjobi CV 2026.pdf"
              className="pdf-action-btn pdf-download-btn"
              title="Download PDF"
            >
              <span>↓ Download CV</span>
            </a>

            {/* Open in new tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-action-btn pdf-open-btn"
              title="Open in new browser tab"
            >
              <span>↗ Fullscreen</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              className="pdf-modal-close-btn"
              onClick={onClose}
              aria-label="Close PDF Viewer"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Frame */}
        <div className="pdf-viewer-frame-wrap">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            title="Ayomide Ogunjobi Curriculum Vitae"
            className="pdf-iframe"
          />
        </div>
      </div>
    </div>
  );
}
