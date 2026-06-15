'use client'
import { useState, useEffect } from 'react';
import DeckPergolaContactForm, { type FormFields, type FormStatus } from './DeckPergolaContactForm';

const emptyFields: FormFields = { name: '', phone: '', email: '', message: '' };

export default function DeckPergolaModal() {
  const [open, setOpen] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [fields, setFields] = useState<FormFields>(emptyFields);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  useEffect(() => {
    function handleOpen() {
      if (formStatus === 'success') {
        setFields(emptyFields);
        setFormStatus('idle');
      }
      setShowExitConfirm(false);
      setOpen(true);
      window.gtag('event', 'quote_modal_opened');
    }
    window.addEventListener('open-deck-pergola-modal', handleOpen);
    return () => window.removeEventListener('open-deck-pergola-modal', handleOpen);
  }, [formStatus]);

  function attemptClose() {
    if (formStatus !== 'success') {
      setShowExitConfirm(true);
    } else {
      forceClose();
    }
  }

  function forceClose() {
    if (formStatus !== 'success') {
      window.gtag('event', 'quote_modal_abandoned');
    }
    setShowExitConfirm(false);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/60" onClick={attemptClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {showExitConfirm && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center gap-3 p-8 z-10">
            <p className="text-lg font-bold text-navy text-center">Leave without finishing?</p>
            <p className="text-sm text-gray-500 text-center">Your details will still be here when you come back.</p>
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="px-5 py-2.5 rounded-lg border border-gray-300 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Keep going
              </button>
              <button
                onClick={forceClose}
                className="px-5 py-2.5 rounded-lg bg-navy text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Leave
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-navy">Get Your Free Quote</h2>
          <button onClick={attemptClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6">
          <DeckPergolaContactForm
            fields={fields}
            onFieldChange={(name, value) => setFields(prev => ({ ...prev, [name]: value }))}
            status={formStatus}
            onStatusChange={setFormStatus}
          />
        </div>
      </div>
    </div>
  );
}
