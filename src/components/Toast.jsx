import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="feedback-toast" role="status" aria-live="polite">
      <span className="toast-icon">✓</span>
      <span className="toast-text">{message}</span>
    </div>
  );
}
