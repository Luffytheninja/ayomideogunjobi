import React from 'react';

export default function SectionFooter({ onNotify }) {
  const handleCopy = (text, label) => (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (onNotify) onNotify(`Copied ${label} to clipboard`);
    }
  };

  return (
    <footer className="section-footer">
      <div className="section-footer-inner">
        <a 
          href="https://x.com/studio_ayo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-link footer-left"
          title="Visit Twitter/X profile"
        >
          @luffytheninja
        </a>

        <button 
          type="button"
          onClick={handleCopy('+2348143741574', 'phone number')} 
          className="footer-link footer-center footer-btn"
          title="Click to copy phone number"
        >
          +234 814 374 1574
        </button>

        <a 
          href="mailto:ayomide.gunjob@gmail.com" 
          onClick={(e) => {
            if (navigator.clipboard) {
              navigator.clipboard.writeText('ayomide.gunjob@gmail.com');
              if (onNotify) onNotify('Copied email to clipboard');
            }
          }}
          className="footer-link footer-right"
          title="Email Ayomide Ogunjobi"
        >
          ayomide.gunjob@gmail.com
        </a>
      </div>
    </footer>
  );
}

