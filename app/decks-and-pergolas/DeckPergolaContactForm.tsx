'use client'

import { useState, FormEvent } from 'react';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function DeckPergolaContactForm() {
  const [fields, setFields] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
        body: encode({ 'form-name': 'decks-pergolas', ...fields }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-burnt-orange mb-4">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
        <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thanks for reaching out — we&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form name="decks-pergolas" method="POST" onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="form-name" value="decks-pergolas" />
      <div>
        <label htmlFor="dp-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text" id="dp-name" name="name" required
          value={fields.name} onChange={handleChange} placeholder="Your name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-gray-900 placeholder-gray-400"
        />
      </div>
      <div>
        <label htmlFor="dp-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="tel" id="dp-phone" name="phone" required
          value={fields.phone} onChange={handleChange} placeholder="Your phone number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-gray-900 placeholder-gray-400"
        />
      </div>
      <div>
        <label htmlFor="dp-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email" id="dp-email" name="email" autoComplete="email" required
          value={fields.email} onChange={handleChange} placeholder="your.email@example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-gray-900 placeholder-gray-400"
        />
      </div>
      <div>
        <label htmlFor="dp-message" className="block text-sm font-medium text-gray-700 mb-1">Tell Us About Your Project</label>
        <textarea
          id="dp-message" name="message" rows={4} required
          value={fields.message} onChange={handleChange} placeholder="Deck repair, new deck, pergola build..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong — please try again or call us directly.</p>
      )}
      <button
        type="submit" disabled={status === 'submitting'}
        className="w-full px-6 py-4 rounded font-bold text-lg transition-colors bg-burnt-orange text-white hover:bg-soft-peach disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Get My Free Quote'}
      </button>
    </form>
  );
}
