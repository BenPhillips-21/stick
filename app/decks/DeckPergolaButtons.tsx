'use client'

export default function DeckPergolaButtons({ variant = 'dark', size = 'default', location = 'unknown', align = 'center' }: { variant?: 'dark' | 'light'; size?: 'default' | 'large' | 'xl'; location?: string; align?: 'center' | 'left' }) {
  const btnClass = size === 'xl'
    ? 'relative overflow-hidden inline-flex items-center gap-3 bg-burnt-orange text-white px-12 py-7 rounded-xl font-bold text-3xl hover:bg-soft-peach transition-colors shadow-[0_0_32px_8px_rgba(204,76,4,0.55)] hover:shadow-[0_0_44px_12px_rgba(204,76,4,0.7)]'
    : size === 'large'
    ? 'relative overflow-hidden inline-flex items-center gap-3 bg-burnt-orange text-white px-10 py-6 rounded-xl font-bold text-2xl hover:bg-soft-peach transition-colors shadow-[0_0_32px_8px_rgba(204,76,4,0.55)] hover:shadow-[0_0_44px_12px_rgba(204,76,4,0.7)]'
    : 'relative overflow-hidden inline-flex items-center gap-2 bg-burnt-orange text-white px-6 py-4 rounded-lg font-bold hover:bg-soft-peach transition-colors shadow-[0_0_20px_4px_rgba(204,76,4,0.5)] hover:shadow-[0_0_28px_6px_rgba(204,76,4,0.65)]';

  function handleClick() {
    window.gtag('event', `cta_${location}_clicked`);
    window.dispatchEvent(new Event('open-deck-pergola-modal'));
  }

  return (
    <div className={`flex flex-wrap gap-3 ${align === 'left' ? 'justify-start' : 'justify-center'}`}>
      <button onClick={handleClick} className={btnClass}>
        <span className="relative z-10">Get My Free Quote</span>
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shine" />
      </button>
    </div>
  );
}
