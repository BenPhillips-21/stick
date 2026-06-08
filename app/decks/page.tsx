import type { Metadata } from 'next';
import Footer from '../components/Footer';
import NetlifyImage from '../components/NetlifyImage';
import DeckPergolaContactForm from './DeckPergolaContactForm';
import DeckPergolaModal from './DeckPergolaModal';
import DeckPergolaButtons from './DeckPergolaButtons';
import GallerySlideshow from './GallerySlideshow';
import ReviewsCarousel from './ReviewsCarousel';

export const metadata: Metadata = {
  title: 'Deck Builders Melbourne | Building, Repair & Restoration | Stick Build Construction',
  description:
    'Melbourne deck specialists delivering new builds, restoration and repairs. Free quotes, quality Merbau and MGP10 H3 timber, same-day inspection available. Call 0468 347 781.',
  openGraph: {
    title: 'Deck Builders Melbourne | Building, Repair & Restoration',
    description:
      'Melbourne deck specialists delivering new builds, restoration and repairs. Free quotes, quality timber, same-day inspection.',
    locale: 'en_AU',
    type: 'website',
  },
};

const steps = [
  {
    num: '01',
    title: 'Free on-site quote',
    desc: "We visit your property, assess the space, and give you a clear, itemised quote — usually within the hour. No obligation.",
  },
  {
    num: '02',
    title: 'Design & permits',
    desc: "We handle all council drawings and permit applications where required. You approve everything before a single board is cut.",
  },
  {
    num: '03',
    title: 'Build on site',
    desc: "Our qualified team builds your deck, typically within 1–2 weeks. We leave the site clean and tidy each day.",
  },
  {
    num: '04',
    title: 'Final walkthrough',
    desc: "We walk you through the finished job together. Not happy with something? We fix it before you sign off. Guaranteed.",
  },
];

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

export default function Decks() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy mt-7 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Melbourne Deck Builders.
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
            New builds, repairs, and full restorations. We handle design, permits, and construction
            — trusted across Melbourne&apos;s inner west and heritage suburbs. Fully insured, satisfaction guaranteed.
          </p>

          {/* Before / After */}
          <div className="flex gap-3 mb-10 max-w-2xl mx-auto md:mx-0">
            <div className="flex-1">
              <div className="relative aspect-3/4 rounded-xl overflow-hidden">
                <NetlifyImage
                  src="/stickBuildContent/deckBefore.avif"
                  alt="Deck before restoration"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 45vw, 300px"
                />
                <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded">
                  Before
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative aspect-3/4 rounded-xl overflow-hidden">
                <NetlifyImage
                  src="/stickBuildContent/deckAfter.avif"
                  alt="Deck after restoration"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 45vw, 300px"
                />
                <span className="absolute bottom-2 left-2 bg-burnt-orange/90 text-white text-xs font-semibold px-2 py-1 rounded">
                  After
                </span>
              </div>
            </div>
          </div>

          <ul className="space-y-3 mb-10 flex flex-col items-center md:items-start">
            {[
              'Fixed price — no surprises',
              'Council permits handled for you',
              'Fully licensed & insured',
              'Heritage suburb specialists',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-200">
                <span className="w-5 h-5 rounded-full bg-burnt-orange flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mb-3"><DeckPergolaButtons variant="light" /></div>
          <p className="text-gray-400 text-sm mb-12">No obligation. We&apos;ll get back to you within the hour.</p>
        </div>
      </section>

      {/* Quote form + before/afters */}
      <section id="quote" className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Contact form */}
          <div className="max-w-xl bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-xl font-bold text-navy mb-1">Get Your Free Quote</h2>
            <p className="text-gray-500 text-sm mb-5">We&apos;ll get back to you within the hour.</p>
            <DeckPergolaContactForm />
          </div>
        </div>
      </section>

      {/* Gallery + testimonial */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
            Real decks. Real Melbourne homes.
          </h2>
          <p className="text-gray-500 mb-8">Here&apos;s some of our recent work.</p>
          <div className="mb-8">
            <GallerySlideshow />
          </div>
          <div className="mb-10 max-w-md">
            <ReviewsCarousel />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12">
            How we build your deck in 4 steps.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-burnt-orange text-white font-bold text-lg flex items-center justify-center mb-4 shrink-0">
                  {num}
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <DeckPergolaButtons />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
            Questions Melbourne homeowners ask us.
          </h2>
          <div className="space-y-2">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-xl overflow-hidden">
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
                Get your free quote today.
              </h2>
              <p className="text-gray-500 mb-8">One quick form. We&apos;ll be in touch within the hour.</p>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <DeckPergolaContactForm />
              </div>
            </div>
            <div className="lg:pt-20">
              <p className="text-gray-500 text-sm mb-4">Or call us directly</p>
              <a
                href="tel:0468347781"
                className="flex items-center gap-4 group mb-6 w-fit"
              >
                <div className="w-14 h-14 rounded-full bg-burnt-orange flex items-center justify-center shrink-0 group-hover:bg-soft-peach transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-3xl md:text-4xl font-bold text-navy group-hover:text-burnt-orange transition-colors">
                  0468 347 781
                </span>
              </a>
              <p className="text-gray-400 text-sm">Same-day inspection available · No obligation</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <DeckPergolaModal />

      {/* Sticky call button — mobile only */}
      <a
        href="tel:0468347781"
        className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 bg-burnt-orange active:bg-orange-700 text-white font-bold text-base py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] cursor-pointer select-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0 animate-phone-buzz">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
        </svg>
        Call Now For A Free Quote
      </a>
    </>
  );
}
