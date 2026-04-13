import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import NetlifyImage from "../components/NetlifyImage";
import QuoteButton from "../components/QuoteButton";

export const metadata: Metadata = {
  title: "Fence & Gate Installation Melbourne | Stick Build Construction",
  description:
    "Expert fence repairs, new fence installation, and gate solutions across Melbourne. Timber paling, Colorbond, custom feature fencing and metal gates. Posts installed 600mm deep, built to Australian standards.",
  openGraph: {
    title: "Fence & Gate Installation Melbourne | Stick Build Construction",
    description:
      "Expert fence repairs, new fence installation, and gate solutions across Melbourne. Timber paling, Colorbond, custom feature fencing and metal gates.",
    locale: "en_AU",
    type: "website",
  },
};

const images = [
  "/stickBuildContent/fences/6d04ca39-dbe0-466a-9a26-c5ad0202249f_result.avif",
  "/stickBuildContent/fences/7ac7ac72-a64c-4b56-98e2-83f2a0a751d8_result.avif",
  "/stickBuildContent/fences/be541b21-d686-4f07-877e-e042e0d86866_result.avif",
  "/stickBuildContent/fences/c5927d5b-07c4-4b1f-a1ce-7895c5ea439c_result.avif",
  "/stickBuildContent/fences/IMG_4980_result.avif",
  "/stickBuildContent/fences/IMG_5212_result.avif",
  "/stickBuildContent/fences/IMG_5217_result.avif",
  "/stickBuildContent/fences/IMG_5548_result.avif",
  "/stickBuildContent/fences/IMG_6039_result.avif",
];

const heritageSuburbs = [
  "Altona", "Newport", "Williamstown", "Spotswood", "Yarraville",
  "Seddon", "Footscray", "Essendon", "Moonee Ponds", "Brunswick",
  "Brunswick West", "Coburg", "Northcote", "Fitzroy", "Fitzroy North",
  "Carlton", "Carlton North", "Clifton Hill", "Thornbury", "Preston", "Pascoe Vale",
];

export default function FenceGateInstallation() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-soft-peach font-semibold uppercase tracking-wide text-sm mb-3">
            Melbourne Fencing Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Fence & Gate Installation<br className="hidden sm:block" /> Melbourne
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Searching for fence repair near me or dealing with a leaning or broken fence?
            A solid fence isn&apos;t just about looks — it&apos;s about{" "}
            <strong className="text-white">privacy, security, and property value</strong>.
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
                  alt={`Fence and gate installation Melbourne example ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fences Fail & Can It Be Fixed */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Why Fences Lean or Fail</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Most fence failures come down to a handful of common causes. Addressing these properly
                means your new fence will last — not just look good for a season.
              </p>
              <ul className="space-y-3">
                {[
                  "Rotten timber posts",
                  "Shallow installation depth",
                  "Water damage over time",
                  "Strong winds loosening the structure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Can You Fix Just One Section?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Yes — you don&apos;t always need a full replacement. We can:
              </p>
              <ul className="space-y-3">
                {[
                  "Replace 1 or 2 damaged posts only",
                  "Straighten and reinforce existing fences",
                  "Repair gates without replacing everything",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Standards & Types */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Fence Installation Standards</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Posts installed minimum 600mm deep",
                  "Use of treated timber or steel posts",
                  "Built to meet Australian standards and durability expectations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold text-navy mb-6">Driveway & Height Compliance</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">We ensure all fencing:</p>
              <ul className="space-y-3">
                {[
                  "Meets local council guidelines",
                  "Is safe for driveway visibility",
                  "Built to correct legal heights",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Types of Fences We Build</h2>
              <ul className="space-y-3 mb-10">
                {[
                  "Timber paling fences",
                  "Colorbond fencing",
                  "Custom timber & feature fencing",
                  "Metal and timber gates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-navy rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Our Promise</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We build fences that are{" "}
                  <strong className="text-white">straight, strong, and built to last</strong> — not quick fixes that fail in a year.
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
            homes require experienced hands for proper fence installation and repair. Our team
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
