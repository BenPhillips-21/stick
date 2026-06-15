'use client';

const faqs = [
  {
    q: 'How much does a deck cost in Melbourne?',
    a: 'Most deck builds range from $5,000 to $30,000+ depending on size, material, and complexity. The only way to give you a real number is a free on-site quote — ranges are just guesses.',
  },
  {
    q: 'Are your prices fixed?',
    a: "Yes. We provide a written, itemised quote upfront. That's the number you pay — no variations, no surprise invoices at the end.",
  },
  {
    q: 'Do I need council permits for a deck?',
    a: "In Victoria, decks over 800mm above ground level typically require a building permit. Heritage overlays can add extra requirements. We handle all the paperwork and fees — you don't need to deal with council at all.",
  },
  {
    q: 'How long does the build take?',
    a: 'Most decks take 1–2 weeks on site. If permits are required, allow an additional 2–4 weeks for the approval process before we start.',
  },
  {
    q: 'Do you repair existing decks, or only build new?',
    a: "Both. We assess what you've got and recommend the most cost-effective approach — sometimes that's targeted repairs, sometimes a partial or full rebuild. We'll be straight with you either way.",
  },
  {
    q: 'What timber do you use?',
    a: 'We work with Merbau hardwood, treated MGP10 H3 structural pine, and can source composites on request. We recommend the right material for your situation, budget, and suburb.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes — fully insured with public liability coverage. We can provide certificates before work begins.',
  },
  {
    q: "What if I'm not happy with the finished job?",
    a: "We do a final walkthrough together before you sign off. Anything that's not right, we fix at no extra cost. It's written into every contract.",
  },
];

export default function FaqAccordion() {
  return (
    <div className="space-y-2">
      {faqs.map(({ q, a }) => (
        <details
          key={q}
          className="group border border-gray-200 rounded-xl overflow-hidden"
          onToggle={(e) => {
            if ((e.currentTarget as HTMLDetailsElement).open) {
              window.gtag('event', 'faq_opened', { question: q });
            }
          }}
        >
          <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-navy text-sm md:text-base list-none select-none">
            {q}
            <span className="shrink-0 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-open:rotate-45 transition-transform">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </summary>
          <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{a}</p>
        </details>
      ))}
    </div>
  );
}
