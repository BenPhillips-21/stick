'use client'
import { useState, useEffect, FormEvent } from 'react';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
      setStatus('idle');
      setFields({ name: '', phone: '', email: '', message: '' });
    }
    window.addEventListener('open-contact-modal', handleOpen);
    return () => window.removeEventListener('open-contact-modal', handleOpen);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label="Contact us"
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpen(false)}
      />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-navy">Get a Free Quote</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-burnt-orange mb-4">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">Thanks for reaching out — we'll be in touch shortly.</p>
              <button
                onClick={() => setOpen(false)}
                className="px-6 py-3 rounded font-semibold transition-colors bg-burnt-orange text-white hover:bg-soft-peach"
              >
                Close
              </button>
            </div>
          ) : (
            <form name="contact" method="POST" onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  required
                  value={fields.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  autoComplete="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Project Description
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={4}
                  required
                  value={fields.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
                />
              </div>
              {status === 'error' && (
                <p className="text-sm text-red-600">Something went wrong — please try again or call us directly.</p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3 rounded font-semibold transition-colors bg-burnt-orange text-white hover:bg-soft-peach disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
