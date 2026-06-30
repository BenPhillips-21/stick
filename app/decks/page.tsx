import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';
import NetlifyImage from '../components/NetlifyImage';
import DeckPergolaContactForm from './DeckPergolaContactForm';
import DeckPergolaModal from './DeckPergolaModal';
import DeckPergolaButtons from './DeckPergolaButtons';
import GallerySlideshow from './GallerySlideshow';
import FaqAccordion from './FaqAccordion';
import SectionTracker from './SectionTracker';

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

const features = [
  'Hidden screws resulting in barefoot-friendly surface with zero risk of a stubbed toe.',
  'Moisture and stain resistant timber prevents wood rot, eliminating grueling constant maintenance.',
  'Splinter free finish so the kids can play and you can relax.',
  'Fade-proof colour technology that keeps the wood looking brand new for decades.',
];

const steps = [
  {
    num: '01',
    title: 'Same-day Quote',
    desc: "We visit your property, assess the space, and hand you a clear itemised quote — usually within the hour. You're approved and locked in before we leave.",
  },
  {
    num: '02',
    title: 'Permits Sorted Overnight',
    desc: "We handle all council drawings and permit applications. For standard decks under 800mm, we can begin within 24 hours of your sign-off — no waiting around.",
  },
  {
    num: '03',
    title: 'Built In 72 hours',
    desc: "Our crew arrives with every board pre-cut and every fixing ready. Most standard decks are fully built within 72 hours of breaking ground — clean site left each day.",
  },
  {
    num: '04',
    title: 'Walk it. Love it. Sign off.',
    desc: "We walk you through together the moment we're done. Anything not right, we fix on the spot before you sign off. That's the 72-hour promise — start to finish, no excuses.",
  },
];


export default function Decks() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center h-20">
          <Link href="/" className="relative flex items-center" style={{ height: 75, width: 220 }}>
            <NetlifyImage
              src="/stickBuildContent/stickBuildConstructionLogo_result.PNG"
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
                  <span className="block"><span>Your</span> <span style={{ color: '#FF7F00' }}>Dream Deck</span></span>
                  <span className="block">Built In <span style={{ color: '#FF7F00' }}>72 Hours</span></span>
                </h1>
                <p className="text-[0.82em] text-white font-medium leading-tight mt-1.5">
                  (<span>Without</span> Postpones, Permits or Paperwork)
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
                    src="/stickBuildContent/deckBefore_result.avif"
                    alt="Deck before restoration"
                    fill
                    preload
                    style={{ objectFit: 'cover', transform: 'scale(1.25)', transformOrigin: 'center' }}
                    sizes="45vw"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded">Before</span>
                </div>
                <div className="flex-1 relative aspect-3/4 rounded-xl overflow-hidden">
                  <NetlifyImage
                    src="/stickBuildContent/newAfter.avif"
                    alt="Deck after restoration"
                    fill
                    preload
                    style={{ objectFit: 'cover' }}
                    sizes="45vw"
                  />
                  <span className="absolute bottom-2 left-2 bg-burnt-orange/90 text-white text-xs font-semibold px-2 py-1 rounded">After</span>
                </div>
              </div>
              </div>

              <ul className="space-y-3 mb-4 flex flex-col items-start text-left">
                {[
                  'Permits handled for you so you don\'t need to spend your time on bureaucratic headaches.',
                  'Fixed pricing so you won\'t get any surprises.',
                  'Fully Licensed & Insured Builders: Guarantees absolute structural compliance so you eliminate any legal or financial risk to your property.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-200 text-base leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-burnt-orange flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="-mt-0.25">{item}</span>
                  </li>
                ))}
              </ul>

              <DeckPergolaButtons variant="light" location="hero" align="left" />

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
                  src="/stickBuildContent/deckBefore_result.avif"
                  alt="Deck before restoration"
                  fill
                  preload
                  style={{ objectFit: 'cover', transform: 'scale(1.15)', transformOrigin: 'center' }}
                  sizes="360px"
                />
                <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Before</span>
              </div>
              <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
                <NetlifyImage
                  src="/stickBuildContent/newAfter.avif"
                  alt="Deck after restoration"
                  fill
                  preload
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
          <div className="max-w-xl md:max-w-3xl mt-2 mx-0 md:mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-3 md:p-8">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-sm md:text-xl font-semibold shrink-0" style={{ backgroundColor: '#1a73e8' }}>
                  LN
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-lg leading-tight">Long Nguyen</p>
                  <p className="text-gray-400 text-xs md:text-base">2 months ago</p>
                </div>
              </div>
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 md:w-7 md:h-7" viewBox="0 0 20 20" fill="#fbbc04">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm md:text-xl leading-relaxed">Proper tradesman, knowledgeable and clear communications. He provides and explains several options before commencing work. Really happy with the service!!</p>
            <div className="mt-4 pt-3 md:mt-6 md:pt-4 border-t border-gray-100 flex items-center gap-1.5 md:gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-xs md:text-base text-gray-500 font-medium">Google Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery + testimonial */}
      <section id="section-gallery" className="py-10 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Real Decks. Real Melbourne Homes.
          </h2>
          <div className="mb-8">
            <GallerySlideshow />
          </div>
          <div className="mb-10 max-w-md md:max-w-2xl mx-0 md:mx-auto">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-8">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-sm md:text-xl font-semibold shrink-0" style={{ backgroundColor: '#34a853' }}>
                    FA
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-lg leading-tight">Faizan Asghar</p>
                    <p className="text-gray-400 text-xs md:text-base">4 months ago</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-7 md:h-7" viewBox="0 0 20 20" fill="#fbbc04">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-xl leading-relaxed">Clean carpentry work, strong build, completed on time and at a very good price. Highly recommend.</p>
              <div className="mt-4 pt-3 md:mt-6 md:pt-4 border-t border-gray-100 flex items-center gap-1.5 md:gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs md:text-base text-gray-500 font-medium">Google Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="section-process" className="py-10 md:py-10 bg-gray-50">
        <div className="max-w-5xl md:max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12">
            How We Build Your Deck In 72 Hours.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-7">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-2xl p-6 md:p-9 shadow-sm flex flex-col items-center">
                <div className="w-12 h-12 md:w-[68px] md:h-[68px] rounded-full bg-burnt-orange text-white font-bold text-lg md:text-2xl flex items-center justify-center mb-4 shrink-0">
                  {num}
                </div>
                <h3 className="font-bold text-navy text-lg md:text-2xl mb-2">{title}</h3>
                <p className="text-gray-600 text-sm md:text-lg leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <DeckPergolaButtons location="process" size="large" />
        </div>
      </section>

      {/* Features */}
      <section id="section-features" className="py-16 md:py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Features You Will Love About Your New Deck
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-gray-300 text-base leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-burnt-orange flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="section-faq" className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
            Questions Melbourne Homeowners Ask
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* Final CTA */}
      <section id="section-final-cta" className="py-16 md:py-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <DeckPergolaButtons size="large" location="final" />
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
      <SectionTracker />

    </>
  );
}
