'use client';

export default function FreeQuoteNavButton() {
  function handleClick() {
    window.gtag('event', 'cta_nav_clicked');
    window.dispatchEvent(new Event('open-deck-pergola-modal'));
  }

  return (
    <button
      onClick={handleClick}
      className="bg-burnt-orange text-white font-bold text-[13px] md:text-sm px-[15px] md:px-[18px] py-[9px] md:py-2.5 rounded-lg hover:bg-soft-peach transition-colors"
    >
      <span className="md:hidden">Free Quote</span>
      <span className="hidden md:inline">Get A Free Quote</span>
    </button>
  );
}
