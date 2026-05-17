import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import NetlifyImage from '../components/NetlifyImage';
import QuoteButton from '../components/QuoteButton';
import DeckPergolaContactForm from './DeckPergolaContactForm';

export const metadata: Metadata = {
  title: 'Deck & Pergola Builders Melbourne | Building, Repair & Restoration | Stick Build Construction',
  description:
    'Melbourne specialists in deck building, deck restoration, pergola construction and pergola repair. Free quotes, quality Merbau and MGP10 H3 timber, same-day inspection available. Call 0468 347 781.',
  openGraph: {
    title: 'Deck & Pergola Builders Melbourne | Building, Repair & Restoration',
    description:
      'Melbourne specialists in deck building, deck restoration, pergola construction and pergola repair. Free quotes, quality timber, same-day inspection.',
    locale: 'en_AU',
    type: 'website',
  },
};

const images = [
  '/stickBuildContent/deckingAndPergolas/deckingAfter_result.avif',
  '/stickBuildContent/deckingAndPergolas/deckingBefore_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_4440_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_5340_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_5498_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_6061_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_6067_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_6104_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_6520_result.avif',
];

const heritageSuburbs = [
  'Altona', 'Newport', 'Williamstown', 'Spotswood', 'Yarraville',
  'Seddon', 'Footscray', 'Essendon', 'Moonee Ponds', 'Brunswick',
  'Brunswick West', 'Coburg', 'Northcote', 'Fitzroy', 'Fitzroy North',
  'Carlton', 'Carlton North', 'Clifton Hill', 'Thornbury', 'Preston', 'Pascoe Vale',
];

export default function DecksAndPergolas() {
  return (
    <>
      <Navbar />

      {/* Hero — contact form & phone number above the fold */}
      <section className="bg-navy pt-6 pb-14 md:pt-10 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left — headline + phone */}
            <div>
              <p className="text-soft-peach font-semibold uppercase tracking-wide text-sm mb-3">
                Melbourne Deck &amp; Pergola Specialists
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Deck &amp; Pergola<br className="hidden sm:block" /> Builders Melbourne
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                New builds, repairs, or full restorations — we handle decks and pergolas
                from the ground up. Trusted across Melbourne&apos;s inner west and heritage suburbs.
              </p>

              {/* Phone — primary CTA */}
              <a
                href="tel:0468347781"
                className="flex items-center gap-4 group mb-6"
              >
                <div className="w-14 h-14 rounded-full bg-burnt-orange flex items-center justify-center shrink-0 group-hover:bg-soft-peach transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">Call us now — free quote</p>
                  <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-soft-peach transition-colors">
                    0468 347 781
                  </span>
                </div>
              </a>

              <p className="text-gray-400 text-sm mb-8">Same-day inspection available · No obligation</p>
            </div>

            {/* Right — inline contact form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-navy mb-1">Get a Free Quote Today</h2>
              <p className="text-gray-500 text-sm mb-5">We&apos;ll get back to you within the hour.</p>
              <DeckPergolaContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy mb-6">Our Recent Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <NetlifyImage
                  src={src}
                  alt={`Deck and pergola Melbourne example ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deck building & restoration */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-1 bg-burnt-orange rounded" />
            <p className="text-burnt-orange font-semibold uppercase tracking-wide text-sm">Service 01</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Deck Building &amp; Restoration</h2>
          <p className="text-gray-600 mb-12 max-w-2xl leading-relaxed">
            Whether you need a brand-new deck or your existing one is sagging, soft, or looking tired,
            we have the skills and materials to fix it right — the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">Why Decks Fail</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Most decking issues come from weather, materials, and neglect. Catching the problem early
                can save you from a full rebuild.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Moisture damaging the subframe',
                  'Poor installation or low-quality materials',
                  'Lack of regular oiling or staining',
                  'Loose screws, nails popping out, or timber movement',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-navy mb-4">Signs Your Deck Needs Repair</h3>
              <ul className="space-y-3">
                {[
                  'Sagging or uneven boards',
                  'Soft or spongy timber',
                  'Loose fixings',
                  'Rot in posts or bearers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy mb-4">Can It Be Fixed Without Rebuilding?</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Yes — in many cases we repair rather than replace:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Replace only the damaged deck boards',
                  'Strengthen the existing structure',
                  'Re-secure loose fixings',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mb-4 leading-relaxed">
                If the structure is compromised, we rebuild using:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Treated MGP10 H3 timber (highly weather-resistant)',
                  'Quality Merbau decking',
                  'Proper spacing and drainage techniques',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="text-base font-bold text-navy mb-2">How Long Does a Deck Last?</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-soft-peach shrink-0" />
                    Merbau decking can last <strong>10+ years</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-soft-peach shrink-0" />
                    With proper oiling and maintenance — even longer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pergola building & restoration */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-1 bg-burnt-orange rounded" />
            <p className="text-burnt-orange font-semibold uppercase tracking-wide text-sm">Service 02</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Pergola Building &amp; Restoration</h2>
          <p className="text-gray-600 mb-12 max-w-2xl leading-relaxed">
            A pergola transforms your outdoor space — but only when it&apos;s built or restored properly.
            We handle everything from new pergola construction to replacing rotten posts and repairing structural timber.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'New Pergola Construction',
                items: [
                  'Custom design to suit your space',
                  'Treated structural timber',
                  'Compliant with local regulations',
                  'Attached or freestanding options',
                ],
              },
              {
                title: 'Pergola Restoration & Repairs',
                items: [
                  'Replace rotten or damaged posts',
                  'Fascia and rafter repairs',
                  'Re-tighten or replace fixings',
                  'Structural assessment included',
                ],
              },
              {
                title: 'Structural Timber Work',
                items: [
                  'Load-bearing post replacement',
                  'Decorative post restoration',
                  'Beam and bearer repairs',
                  'Heritage-sympathetic materials',
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy mb-4">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Built to Last in Australian Conditions</h3>
                <p className="text-gray-300 leading-relaxed">
                  We don&apos;t cut corners on materials or technique. Every pergola and deck we build is
                  designed to handle Melbourne&apos;s climate — from summer heat to winter rain.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0468347781"
                  className="flex-1 flex items-center justify-center gap-2 bg-burnt-orange text-white px-6 py-4 rounded-lg font-bold hover:bg-soft-peach transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                  0468 347 781
                </a>
                <QuoteButton className="flex-1 flex items-center justify-center border-2 border-white text-white px-6 py-4 rounded-lg font-bold hover:bg-white hover:text-navy transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local areas */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Local Experts Across Melbourne
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl">
            We proudly service Melbourne&apos;s heritage and character-filled suburbs. Our team understands
            the unique construction styles and materials found in older homes, delivering work that
            maintains character while upgrading durability for modern living.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {heritageSuburbs.map((suburb) => (
              <div key={suburb} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-soft-peach shrink-0">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.083 3.218-4.467 3.218-7.327a7.5 7.5 0 1 0-15 0c0 2.86 1.274 5.244 3.218 7.327a19.579 19.579 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200 text-sm">{suburb}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-blue-900 pt-8 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-300">Don&apos;t see your suburb? We service all Melbourne areas.</p>
            <a
              href="tel:0468347781"
              className="bg-burnt-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-soft-peach transition-colors whitespace-nowrap"
            >
              Call 0468 347 781
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal />
    </>
  );
}
