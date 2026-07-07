'use client';

export default function HeroCTA() {
  function openModal() {
    window.gtag('event', 'cta_hero_clicked');
    window.dispatchEvent(new Event('open-deck-pergola-modal'));
  }

  return (
    <>
      {/* Mobile: full-width button + price note below */}
      <div className="md:hidden mt-[16px]">
        <button
          onClick={openModal}
          className="relative overflow-hidden w-full flex items-center justify-center gap-[9px] bg-burnt-orange text-white font-extrabold text-[18px] px-[22px] py-4 rounded-xl hover:bg-soft-peach transition-colors shadow-[0_0_28px_6px_rgba(204,76,4,0.55)] hover:shadow-[0_0_40px_10px_rgba(204,76,4,0.7)]"
        >
          <span className="relative z-10">Get A Free Quote</span>
          <svg className="relative z-10 w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shine" />
        </button>
        <p className="text-center text-[12px] font-semibold mt-2" style={{ color: '#FF7F00' }}>
          Deck builds start at <span className="font-bold underline">$5,000</span>
        </p>
      </div>

      {/* Desktop: button + price note inline */}
      <div className="hidden md:flex items-center gap-[18px] mt-[22px]">
        <button
          onClick={openModal}
          className="relative overflow-hidden inline-flex items-center gap-[10px] bg-burnt-orange text-white font-extrabold text-[20px] px-[34px] py-[19px] rounded-xl hover:bg-soft-peach transition-colors shadow-[0_0_34px_8px_rgba(204,76,4,0.55)] hover:shadow-[0_0_44px_12px_rgba(204,76,4,0.7)]"
        >
          <span className="relative z-10">Get A Free Quote</span>
          <svg className="relative z-10 w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shine" />
        </button>
        <p className="text-[13px] font-semibold leading-snug" style={{ color: '#FF7F00' }}>
          Deck builds<br />start at <span className="font-bold underline">$5,000</span>
        </p>
      </div>
    </>
  );
}
