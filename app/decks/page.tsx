import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';
import NetlifyImage from '../components/NetlifyImage';
import DeckPergolaModal from './DeckPergolaModal';
import DeckPergolaButtons from './DeckPergolaButtons';
import GallerySlideshow from './GallerySlideshow';
import FaqAccordion from './FaqAccordion';
import SectionTracker from './SectionTracker';
import FreeQuoteNavButton from './FreeQuoteNavButton';
import HeroCTA from './HeroCTA';

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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-[54px] md:h-[60px]">
          <Link href="/" className="relative block h-[62px] md:h-[62px] w-[188px] md:w-[220px] shrink-0">
            <NetlifyImage
              src="/stickBuildContent/stickBuildConstructionLogo_result.PNG"
              alt="Stick Build Construction"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
          </Link>
          <div className="flex items-center gap-4 md:gap-6">
            <FreeQuoteNavButton />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        {/* Radial glow blobs — mobile only */}
        <div className="md:hidden" style={{ position: 'absolute', top: -160, left: -120, width: 640, height: 640, background: 'radial-gradient(circle, rgba(255,127,0,.28) 0%, rgba(255,127,0,0) 68%)', pointerEvents: 'none' }} />
        <div className="md:hidden" style={{ position: 'absolute', right: -140, bottom: -180, width: 520, height: 520, background: 'radial-gradient(circle, rgba(255,145,77,.18) 0%, rgba(255,145,77,0) 70%)', pointerEvents: 'none' }} />

        <div className="relative max-w-[1160px] mx-auto px-[18px] md:px-[40px] pt-[14px] pb-[20px] md:pt-[32px] md:pb-[36px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] md:gap-[52px] items-start">

            {/* Left column */}
            <div>
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 md:gap-[10px] rounded-full px-3 md:px-[14px] py-[6px] md:py-[7px] mb-3 md:mb-[16px]" style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.16)' }}>
                <span className="inline-flex gap-[1px] md:gap-[2px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-[15px] md:h-[15px]" viewBox="0 0 20 20" fill="#FFD000">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] shrink-0" aria-label="Google">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="w-[3px] h-[3px] md:w-1 md:h-1 rounded-full" style={{ background: 'rgba(255,255,255,.4)' }} />
                <span className="font-bold text-[11.5px] md:text-[13px]" style={{ color: '#FF914D' }}>Licensed &amp; Insured</span>
              </div>

              {/* H1 */}
              <h1 className="text-[36px] md:text-[58px] font-black text-white leading-[1.04] md:leading-[1.03] tracking-[-0.02em] m-0">
                Your <span style={{ color: '#FF7F00' }}>Dream Deck</span>{' '}
                <span className="md:block">Built In{' '}
                  <span className="relative" style={{ color: '#FF7F00' }}>
                    72 Hours
                    <span className="absolute left-0 right-0 bottom-[1px] md:bottom-[2px] h-[7px] md:h-[10px] rounded-[3px] -z-10" style={{ background: 'rgba(255,127,0,.22)' }} />
                  </span>
                </span>
              </h1>

              {/* Subhead */}
              <p className="text-[14.5px] md:text-[18px] font-medium mt-[6px] md:mt-2 m-0 text-white">
                (Without Postpones, Permits or Paperwork)
              </p>

              {/* Before/After — mobile only (appears above checklist) */}
              <div className="relative flex gap-[10px] mt-[13px] md:hidden">
                {/* 72-hour sticker */}
                <div className="absolute top-[-14px] right-[-8px] z-[5] w-[62px] h-[62px] rounded-full flex flex-col items-center justify-center rotate-[8deg]" style={{ background: '#FF7F00', color: '#042C5C', boxShadow: '0 10px 24px -6px rgba(255,127,0,.7)' }}>
                  <span className="text-[19px] font-black leading-none">72</span>
                  <span className="text-[8px] font-extrabold tracking-[.06em]">HOURS</span>
                </div>
                <div className="flex-1 relative aspect-5/6 rounded-xl overflow-hidden">
                  <NetlifyImage
                    src="/stickBuildContent/deckBefore_result.avif"
                    alt="Deck before restoration"
                    fill
                    preload
                    style={{ objectFit: 'cover', transform: 'scale(1.25)', transformOrigin: 'center' }}
                    sizes="45vw"
                  />
                  <span className="absolute bottom-2 left-2 text-white text-[11px] font-bold px-[9px] py-[3px] rounded-md" style={{ background: 'rgba(0,0,0,.6)' }}>Before</span>
                </div>
                <div className="flex-1 relative aspect-5/6 rounded-xl overflow-hidden">
                  <NetlifyImage
                    src="/stickBuildContent/newAfter.avif"
                    alt="Deck after restoration"
                    fill
                    preload
                    style={{ objectFit: 'cover' }}
                    sizes="45vw"
                  />
                  <span className="absolute bottom-2 left-2 text-white text-[11px] font-bold px-[9px] py-[3px] rounded-md" style={{ background: 'rgba(204,76,4,.92)' }}>After</span>
                </div>
              </div>

              {/* Checklist */}
              <ul className="mt-[13px] md:mt-[20px] flex flex-col gap-[8px] md:gap-[11px] list-none p-0 m-0">
                {[
                  'Permits handled for you - no red tape headaches.',
                  "Fixed pricing, so you won't get any surprises.",
                  'Fully licensed & insured for total peace of mind.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-[10px] md:gap-3 text-[14px] md:text-[15.5px] leading-[1.4] md:leading-[1.45]" style={{ color: '#e4e9f0' }}>
                    <span className="w-5 h-5 md:w-[22px] md:h-[22px] rounded-full bg-burnt-orange flex items-center justify-center shrink-0 mt-[1px]">
                      <svg className="w-[11px] h-[11px] md:w-3 md:h-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <HeroCTA />

              {/* Review quote */}
              <div className="mt-[16px] md:mt-[22px] max-w-full md:max-w-[520px] rounded-xl px-[16px] py-[12px] md:px-[20px] md:py-[15px]" style={{ background: 'rgba(255,255,255,.06)', borderTop: '1px solid rgba(255,255,255,.12)', borderRight: '1px solid rgba(255,255,255,.12)', borderBottom: '1px solid rgba(255,255,255,.12)', borderLeft: '4px solid #FF7F00' }}>
                <p className="text-[14px] md:text-[16px] leading-relaxed font-medium m-0" style={{ color: '#f1f4f8' }}>
                  &ldquo;Proper tradesman, knowledgeable and clear communications.{' '}
                  <span className="hidden md:inline">He provides and explains several options before commencing work. </span>
                  Really happy with the service!&rdquo;
                </p>
                <div className="flex items-center gap-[9px] md:gap-[10px] mt-[8px] md:mt-[10px]">
                  <span className="w-[27px] h-[27px] md:w-[30px] md:h-[30px] rounded-full flex items-center justify-center text-white text-[11px] md:text-xs font-bold shrink-0" style={{ background: '#1a73e8' }}>LN</span>
                  <span className="text-white text-[13px] md:text-sm font-semibold">Long Nguyen</span>
                  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] md:w-[15px] md:h-[15px] ml-auto shrink-0">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="text-[12.5px]" style={{ color: '#9fb0c4' }}>Google Review</span>
                </div>
              </div>
            </div>

            {/* Right column — Before/After, desktop only */}
            <div className="hidden md:flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden" style={{ boxShadow: '0 24px 50px -18px rgba(0,0,0,.6)' }}>
                <NetlifyImage
                  src="/stickBuildContent/deckBefore_result.avif"
                  alt="Deck before restoration"
                  fill
                  preload
                  style={{ objectFit: 'cover', transform: 'scale(1.12)', transformOrigin: 'center' }}
                  sizes="400px"
                />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold px-3 py-[5px] rounded-full" style={{ background: 'rgba(0,0,0,.6)' }}>Before</span>
              </div>
              <div className="relative">
                {/* 72-hour sticker */}
                <div className="absolute top-[-16px] right-[-10px] z-5 w-[70px] h-[70px] rounded-full flex flex-col items-center justify-center rotate-[8deg]" style={{ background: '#FF7F00', color: '#042C5C', boxShadow: '0 10px 24px -6px rgba(255,127,0,.7)' }}>
                  <span className="text-[21px] font-black leading-none">72</span>
                  <span className="text-[8.5px] font-extrabold tracking-[.06em]">HOURS</span>
                </div>
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden" style={{ boxShadow: '0 24px 50px -18px rgba(0,0,0,.6)' }}>
                  <NetlifyImage
                    src="/stickBuildContent/newAfter.avif"
                    alt="Deck after restoration"
                    fill
                    preload
                    style={{ objectFit: 'cover' }}
                    sizes="400px"
                  />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-bold px-3 py-[5px] rounded-full" style={{ background: 'rgba(204,76,4,.92)' }}>After</span>
                </div>
              </div>
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
          <div className="flex flex-col gap-6 mb-10 max-w-md md:max-w-2xl mx-0 md:mx-auto">

            {/* Faizan Asghar */}
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

            {/* Jack Williams */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-8">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-sm md:text-xl font-semibold shrink-0" style={{ backgroundColor: '#1a73e8' }}>
                    JW
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-lg leading-tight">Jack Williams</p>
                    <p className="text-gray-400 text-xs md:text-base">1 month ago</p>
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
              <p className="text-gray-700 text-sm md:text-xl leading-relaxed">Highly recommend Stickbuild Construction! We had a side pergola that was incredibly rotten and dangerous. The team came out and took the entire thing down within a single day. They cleared away all the rubbish, leaving the side path clean. We are very happy with their fast, professional service and can&apos;t wait to work with them again soon to build our new pergola!</p>
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

      {/* Abdul Ahad review */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-md md:max-w-2xl mx-0 md:mx-auto">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-8">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-sm md:text-xl font-semibold shrink-0" style={{ backgroundColor: '#e53935' }}>
                    AA
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-lg leading-tight">Abdul Ahad</p>
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
              <p className="text-gray-700 text-sm md:text-xl leading-relaxed">Very happy with the work done by StickBuild Construction. They removed the wall between two rooms at my home in Caulfield to create one large room for my kids. The job was completed professionally, on time, and the quality of the work exceeded my expectations. The new space looks amazing, and I would definitely recommend them to anyone needing renovation or wall removal work. Great team and great service!</p>
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
