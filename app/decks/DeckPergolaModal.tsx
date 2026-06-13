'use client'
import { useState, useEffect, useRef } from 'react';
import DeckPergolaContactForm from './DeckPergolaContactForm';

export default function DeckPergolaModal() {
  const [open, setOpen] = useState(false);
  const wasSubmitted = useRef(false);

  useEffect(() => {
    function handleOpen() {
      wasSubmitted.current = false;
      setOpen(true);
      window.gtag('event', 'quote_modal_opened');
    }
    window.addEventListener('open-deck-pergola-modal', handleOpen);
    return () => window.removeEventListener('open-deck-pergola-modal', handleOpen);
  }, []);

  function handleClose() {
    if (!wasSubmitted.current) {
      window.gtag('event', 'quote_modal_abandoned');
    }
    setOpen(false);
  }

  function handleSuccess() {
    wasSubmitted.current = true;
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/60" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-navy">Get Your Free Quote</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-6">
          <DeckPergolaContactForm onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
}
