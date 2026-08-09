'use client'
import { useState } from 'react';
import NetlifyImage from './NetlifyImage';

const navLinks = [
  { label: 'Decks', href: '/deck-builders' },
  { label: 'Fencing & Gates', href: '/fence-gate-installation' },
  { label: 'Weatherboards', href: '/weatherboard-repair' },
  { label: 'About Us', href: '/about' },
];

const PHONE = '0468347781';

function CallButton() {
  return (
    <a
      href={`tel:${PHONE}`}
      onClick={() => window.gtag?.('event', 'call_umer_clicked')}
      className="inline-flex items-center gap-2 bg-burnt-orange text-white px-4 sm:px-5 py-2.5 rounded font-medium hover:bg-soft-peach transition-colors whitespace-nowrap"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 animate-phone-buzz">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
      </svg>
      Call Now
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-24">
        <a href="/" className="relative flex items-center" style={{ height: 92, width: 280 }}>
          <NetlifyImage
            src="/stickBuildContent/stickBuildConstructionLogo_result.PNG"
            alt="Stick Build Construction"
            fill
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-navy font-medium hover:text-burnt-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallButton />

          {/* Mobile burger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded text-navy hover:bg-gray-100 transition-colors"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-navy font-medium border-b border-gray-100 last:border-b-0 hover:text-burnt-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
