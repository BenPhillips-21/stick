'use client'

export default function DeckPergolaButtons({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const callClass = variant === 'light'
    ? 'inline-flex items-center gap-2 border-2 border-white text-white px-6 py-4 rounded-lg font-bold hover:bg-white hover:text-navy transition-colors'
    : 'inline-flex items-center gap-2 border-2 border-navy text-navy px-6 py-4 rounded-lg font-bold hover:bg-navy hover:text-white transition-colors';

  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      <button
        onClick={() => window.dispatchEvent(new Event('open-deck-pergola-modal'))}
        className="relative overflow-hidden inline-flex items-center gap-2 bg-burnt-orange text-white px-6 py-4 rounded-lg font-bold hover:bg-soft-peach transition-colors shadow-[0_0_20px_4px_rgba(204,76,4,0.5)] hover:shadow-[0_0_28px_6px_rgba(204,76,4,0.65)]"
      >
        <span className="relative z-10">Get My Free Quote</span>
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shine" />
      </button>
      <a href="tel:0468347781" className={callClass}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
        </svg>
        Call Stick Build
      </a>
    </div>
  );
}
