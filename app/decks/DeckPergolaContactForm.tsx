'use client'

import { useRef } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export type FormFields = {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  projectType: string;
  size: string;
  budget: string;
  timeline: string;
  ownership: string;
  message: string;
  gclid: string;
};
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const inputClass = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-gray-900 placeholder-gray-400 bg-white';
const selectClass = `${inputClass} cursor-pointer appearance-none`;
const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

export default function DeckPergolaContactForm({
  fields,
  onFieldChange,
  status,
  onStatusChange,
}: {
  fields: FormFields;
  onFieldChange: (name: string, value: string) => void;
  status: FormStatus;
  onStatusChange: (s: FormStatus) => void;
}) {
  const hasStarted = useRef(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    if (!hasStarted.current) {
      hasStarted.current = true;
      window.gtag('event', 'form_started', { form_name: 'deck_quote' });
    }
    onFieldChange(e.target.name, e.target.value);
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    onStatusChange('submitting');
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'deck-quote', ...fields }),
      });
      window.gtag('set', 'user_data', { email: fields.email, phone_number: fields.phone });
      window.gtag('event', 'deck_quote_submitted');
      window.gtag('event', 'conversion', { send_to: 'AW-18189854724/ulvKCIzdg74cEITQzOFD' });
      onStatusChange('success');
    } catch {
      onStatusChange('error');
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
    <form name="deck-quote" method="POST" onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="form-name" value="deck-quote" />
      <input type="hidden" name="gclid" value={fields.gclid} />

      <div>
        <label htmlFor="dp-name" className={labelClass}>Full Name</label>
        <input
          type="text" id="dp-name" name="name" required
          value={fields.name} onChange={handleChange} placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dp-phone" className={labelClass}>Phone Number</label>
          <input
            type="tel" id="dp-phone" name="phone" required
            value={fields.phone} onChange={handleChange} placeholder="Your phone number"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="dp-email" className={labelClass}>Email</label>
          <input
            type="email" id="dp-email" name="email" autoComplete="email" required
            value={fields.email} onChange={handleChange} placeholder="john.smith@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dp-suburb" className={labelClass}>Suburb</label>
          <input
            type="text" id="dp-suburb" name="suburb" required
            value={fields.suburb} onChange={handleChange} placeholder="e.g. Bentleigh"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="dp-project-type" className={labelClass}>Project Type</label>
          <select id="dp-project-type" name="projectType" required value={fields.projectType} onChange={handleChange} className={selectClass}>
            <option value="">Select one…</option>
            <option>New deck build</option>
            <option>Deck repair / restoration</option>
            <option>Pergola</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dp-size" className={labelClass}>Approximate Size</label>
          <select id="dp-size" name="size" required value={fields.size} onChange={handleChange} className={selectClass}>
            <option value="">Select one…</option>
            <option>Under 20m²</option>
            <option>20m² – 40m²</option>
            <option>40m²+</option>
            <option>Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="dp-budget" className={labelClass}>Rough Budget</label>
          <select id="dp-budget" name="budget" required value={fields.budget} onChange={handleChange} className={selectClass}>
            <option value="">Select one…</option>
            <option>Under $3,000</option>
            <option>$3,000 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000 – $15,000</option>
            <option>$15,000 – $20,000</option>
            <option>$20,000 – $30,000</option>
            <option>$30,000 – $50,000</option>
            <option>$50,000+</option>
            <option>Not sure</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dp-timeline" className={labelClass}>Timeline</label>
          <select id="dp-timeline" name="timeline" required value={fields.timeline} onChange={handleChange} className={selectClass}>
            <option value="">Select one…</option>
            <option>ASAP</option>
            <option>Within 1 month</option>
            <option>1 – 3 months</option>
            <option>3+ months</option>
            <option>Just researching</option>
          </select>
        </div>
        <div>
          <label htmlFor="dp-ownership" className={labelClass}>Do You Own the Property?</label>
          <select id="dp-ownership" name="ownership" required value={fields.ownership} onChange={handleChange} className={selectClass}>
            <option value="">Select one…</option>
            <option>Yes, I own it</option>
            <option>Tenant</option>
            <option>Body corporate</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="dp-message" className={labelClass}>Any Additional Details</label>
        <textarea
          id="dp-message" name="message" rows={4} required
          value={fields.message} onChange={handleChange} placeholder="Any other details we should know before your site visit…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong — please try again or call us directly.</p>
      )}
      <button
        type="submit" disabled={status === 'submitting'}
        className="w-full px-6 py-4 rounded font-bold text-lg transition-colors bg-burnt-orange text-white hover:bg-soft-peach disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Submit Application'}
      </button>
    </form>
  );
}
