import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import NetlifyImage from "../components/NetlifyImage";
import QuoteButton from "../components/QuoteButton";

export const metadata: Metadata = {
  title: "Deck Builders Melbourne | Deck Repair, Restoration & New Decking | Stick Build Construction",
  description:
    "Melbourne deck builders specialising in deck repair, restoration, and new decking solutions. We fix sagging decks, replace damaged boards, and build pergolas using quality Merbau and treated MGP10 H3 timber.",
  openGraph: {
    title: "Deck Builders Melbourne | Deck Repair, Restoration & New Decking",
    description:
      "Melbourne deck builders specialising in deck repair, restoration, and new decking solutions. We fix sagging decks, replace damaged boards, and build pergolas.",
    locale: "en_AU",
    type: "website",
  },
};

const images = [
  "/stickBuildContent/deckingAndPergolas/deckingAfter_result.avif",
  "/stickBuildContent/deckingAndPergolas/deckingBefore_result.avif",
  "/stickBuildContent/deckingAndPergolas/IMG_4440_result.avif",
  "/stickBuildContent/deckingAndPergolas/IMG_5340_result.avif",
  "/stickBuildContent/deckingAndPergolas/IMG_5498_result.avif",
  "/stickBuildContent/deckingAndPergolas/IMG_6061_result.avif",
  "/stickBuildContent/deckingAndPergolas/IMG_6067_result.avif",
  "/stickBuildContent/deckingAndPergolas/IMG_6104_result.avif",
  "/stickBuildContent/deckingAndPergolas/IMG_6520_result.avif",
];

const heritageSuburbs = [
  "Altona", "Newport", "Williamstown", "Spotswood", "Yarraville",
  "Seddon", "Footscray", "Essendon", "Moonee Ponds", "Brunswick",
  "Brunswick West", "Coburg", "Northcote", "Fitzroy", "Fitzroy North",
  "Carlton", "Carlton North", "Clifton Hill", "Thornbury", "Preston", "Pascoe Vale",
];

export default function DeckBuilders() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-soft-peach font-semibold uppercase tracking-wide text-sm mb-3">
            Melbourne Deck Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Deck Builders Melbourne
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Looking for a deck builder near me or wondering how to fix a broken or sagging deck?
            Your deck is one of the most valuable outdoor features — but it takes a beating from
            Melbourne weather. We specialise in deck repair, restoration, and new decking solutions.
          </p>
          <QuoteButton />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <NetlifyImage
                  src={src}
                  alt={`Deck building and repair Melbourne example ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Decks Fail & Signs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Why Decks Fail</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Most decking issues come from a combination of weather, materials, and maintenance. Catching
                the problem early can save you from a full rebuild.
              </p>
              <ul className="space-y-3">
                {[
                  "Moisture damaging the subframe",
                  "Poor installation or low-quality materials",
                  "Lack of regular oiling or staining",
                  "Loose screws, nails popping out, or timber movement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Signs Your Deck Needs Repair</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Sagging or uneven boards",
                  "Soft or spongy timber",
                  "Loose fixings",
                  "Rot in posts or bearers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy mb-2">How Long Does a Deck Last?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-soft-peach shrink-0" />
                    Merbau decking can last <strong>10+ years</strong>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-soft-peach shrink-0" />
                    With proper oiling and maintenance — even longer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Can It Be Fixed & Pergolas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Can It Be Fixed Without Rebuilding?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Yes — in many cases we can repair rather than replace:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Replace only damaged deck boards",
                  "Strengthen the existing structure",
                  "Re-secure loose fixings",
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
              <ul className="space-y-3">
                {[
                  "Treated MGP10 H3 timber (highly weather-resistant)",
                  "Proper spacing and drainage techniques",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Pergolas & Structural Timber Repairs</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">We also handle:</p>
              <ul className="space-y-3 mb-10">
                {[
                  "Pergola construction & repairs",
                  "Replacing rotten posts (load-bearing or decorative)",
                  "Fascia and rafter repairs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-navy rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Our Focus</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We build decks that don&apos;t just look good — they{" "}
                  <strong className="text-white">last in Australian conditions</strong>.
                </p>
                <QuoteButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Experts — Heritage Areas */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Local Experts in Melbourne&apos;s Heritage Areas
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl">
            We proudly service Melbourne&apos;s heritage and character-filled suburbs where older
            homes require experienced hands for proper deck repair and restoration. Our team
            understands the unique construction styles, materials, and common issues found in
            these areas, delivering work that maintains the original character while upgrading
            durability for modern living.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {heritageSuburbs.map((suburb) => (
              <div key={suburb} className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-soft-peach shrink-0 mt-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.083 3.218-4.467 3.218-7.327a7.5 7.5 0 1 0-15 0c0 2.86 1.274 5.244 3.218 7.327a19.579 19.579 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-200">{suburb}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-blue-900 pt-8 text-center">
            <p className="text-gray-300 mb-4">Don&apos;t see your suburb? We service all Melbourne areas.</p>
            <QuoteButton />
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal />
    </>
  );
}
