import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';
import NetlifyImage from '../components/NetlifyImage';
import DeckPergolaContactForm from './DeckPergolaContactForm';
import DeckPergolaModal from './DeckPergolaModal';
import DeckPergolaButtons from './DeckPergolaButtons';
import GallerySlideshow from './GallerySlideshow';

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
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center h-20">
          <Link href="/" className="relative flex items-center" style={{ height: 75, width: 220 }}>
            <NetlifyImage
              src="/stickBuildContent/stickBuildConstructionLogo.PNG"
              alt="Stick Build Construction"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </Link>
        </div>
      </header>
      {/* Hero */}
      <section className="bg-navy pt-5 pb-16 md:pt-8 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">

            {/* Left column — text */}
            <div className="text-center md:text-left">
              <div className="text-[5vw] md:text-2xl lg:text-3xl mb-6">
                <h1 className="text-[1.85em] font-bold text-white leading-tight">
                  <span className="block">Your <span style={{ color: '#FF7F00' }}>Dream Deck</span></span>
                  <span className="block">Built In <span style={{ color: '#FF7F00' }}>72 Hours</span></span>
                </h1>
                <p className="text-[0.82em] text-white font-medium leading-tight mt-1.5">
                  (<span className="underline decoration-bright-orange decoration-2">Without</span> Postpones, Permits or Paperwork)
                </p>
              </div>

              <div className="-mx-4 sm:-mx-6 px-4 sm:px-6 bg-white py-4 mb-6 md:bg-transparent md:mx-0 md:px-0 md:py-0 md:mb-0">
                <p className="text-gray-700 md:text-white text-base md:text-lg leading-relaxed mb-4 md:mb-8 max-w-lg mx-auto md:mx-0">
                  Whether it&apos;s the peak of summer and you&apos;re hosting a monster BBQ; or it&apos;s the depth of winter and you&apos;re roasting marshmallows over the firepit... You will be eating and sleeping on these elegant, hand crafted timber decks.
                </p>

              {/* Before/After — mobile only */}
              <div className="flex gap-3 md:hidden">
                <div className="flex-1 relative aspect-3/4 rounded-xl overflow-hidden">
                  <NetlifyImage
                    src="/stickBuildContent/deckBefore.avif"
                    alt="Deck before restoration"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="45vw"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded">Before</span>
                </div>
                <div className="flex-1 relative aspect-3/4 rounded-xl overflow-hidden">
                  <NetlifyImage
                    src="/stickBuildContent/deckAfter.avif"
                    alt="Deck after restoration"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="45vw"
                  />
                  <span className="absolute bottom-2 left-2 bg-burnt-orange/90 text-white text-xs font-semibold px-2 py-1 rounded">After</span>
                </div>
              </div>
              </div>

              <ul className="space-y-3 mb-4 flex flex-col items-start">
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

              <DeckPergolaButtons variant="light" />

              <div className="flex items-center gap-2 mt-4 mb-1 justify-center md:justify-start">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="#facc15">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>

            {/* Right column — Before/After, desktop only */}
            <div className="hidden md:flex flex-col gap-4">
              <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
                <NetlifyImage
                  src="/stickBuildContent/deckBefore.avif"
                  alt="Deck before restoration"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="360px"
                />
                <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Before</span>
              </div>
              <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
                <NetlifyImage
                  src="/stickBuildContent/deckAfter.avif"
                  alt="Deck after restoration"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="360px"
                />
                <span className="absolute bottom-3 left-3 bg-burnt-orange/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">After</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote form + before/afters */}
      <section id="quote" className="py-4 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Contact form */}
          {/* <div className="max-w-xl bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-xl font-bold text-navy mb-1">Get Your Free Quote</h2>
            <p className="text-gray-500 text-sm mb-5">We&apos;ll get back to you within the hour.</p>
            <DeckPergolaContactForm />
          </div> */}

          {/* Long Nguyen review */}
          <div className="max-w-xl mt-2 bg-white rounded-2xl shadow-md border border-gray-100 p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0" style={{ backgroundColor: '#1a73e8' }}>
                  LN
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm leading-tight">Long Nguyen</p>
                  <p className="text-gray-400 text-xs">2 months ago</p>
                </div>
              </div>
              <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#fbbc04">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">Proper tradesman, knowledgeable and clear communications. He provides and explains several options before commencing work. Really happy with the service!!</p>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-xs text-gray-500 font-medium">Google Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery + testimonial */}
      <section className="py-10 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Real decks. Real Melbourne homes.
          </h2>
          <div className="mb-8">
            <GallerySlideshow />
          </div>
          <div className="mb-10 max-w-md">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0" style={{ backgroundColor: '#34a853' }}>
                    FA
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm leading-tight">Faizan Asghar</p>
                    <p className="text-gray-400 text-xs">4 months ago</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#fbbc04">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">Clean carpentry work, strong build, completed on time and at a very good price. Highly recommend.</p>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs text-gray-500 font-medium">Google Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 md:py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12">
            How we build your deck in 4 steps.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
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
      <section className="py-16 md:py-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <DeckPergolaButtons size="large" />
        </div>
      </section>

      {/* Final CTA (old form) */}
      {/* <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Get your free quote today.
            </h2>
            <p className="text-gray-500 mb-8">One quick form. We&apos;ll be in touch within the hour.</p>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <DeckPergolaContactForm />
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
      <DeckPergolaModal />

    </>
  );
}
