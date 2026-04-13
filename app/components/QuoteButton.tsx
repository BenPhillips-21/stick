'use client'

export default function QuoteButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
      className={
        className ??
        'inline-block bg-burnt-orange text-white px-8 py-4 rounded font-semibold text-lg hover:bg-soft-peach transition-colors'
      }
    >
      Get a Free Quote
    </button>
  );
}
