import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import NetlifyImage from "../components/NetlifyImage";
import QuoteButton from "../components/QuoteButton";

export const metadata: Metadata = {
  title: "Weatherboard Repair Melbourne | Stick Build Construction",
  description:
    "Expert weatherboard repair and restoration across Melbourne. We fix rotting weatherboards, match existing profiles, and repaint with waterproof coatings. Servicing Altona, Newport, Essendon, Brunswick & all Melbourne suburbs.",
  openGraph: {
    title: "Weatherboard Repair Melbourne | Stick Build Construction",
    description:
      "Expert weatherboard repair and restoration across Melbourne. We fix rotting weatherboards, match existing profiles, and repaint with waterproof coatings.",
    locale: "en_AU",
    type: "website",
  },
};

const images = [
  "/stickBuildContent/weatherboards/1db1df92-0f98-49c7-977d-28047b87e574_weatherboards.avif",
  "/stickBuildContent/weatherboards/78ebf9c7-cb48-46be-8412-c91cf3a990db_weatherboards.avif",
  "/stickBuildContent/weatherboards/b72c4746-547c-4abc-a6ff-f3589e63a809_weatherboards.avif",
  "/stickBuildContent/weatherboards/c1d64050-2271-4853-87e6-e1148ed67812_weatherboards.avif",
  "/stickBuildContent/weatherboards/c9e0c433-0393-4999-9456-75da5b321a1a_weatherboards.avif",
  "/stickBuildContent/weatherboards/e220ea7c-89a3-49e3-b81b-435a49e676ce_weatherboards.avif",
  "/stickBuildContent/weatherboards/IMG_4850_result.avif",
  "/stickBuildContent/weatherboards/IMG_4956_result.avif",
  "/stickBuildContent/weatherboards/IMG_5158_result.avif",
];

const heritageSuburbs = [
  "Altona", "Newport", "Williamstown", "Spotswood", "Yarraville",
  "Seddon", "Footscray", "Essendon", "Moonee Ponds", "Brunswick",
  "Brunswick West", "Coburg", "Northcote", "Fitzroy", "Fitzroy North",
  "Carlton", "Carlton North", "Clifton Hill", "Thornbury", "Preston", "Pascoe Vale",
];

export default function WeatherboardRepair() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-soft-peach font-semibold uppercase tracking-wide text-sm mb-3">
            Melbourne Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Weatherboard Repair<br className="hidden sm:block" /> Melbourne
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
            If you&apos;re searching for weatherboard repair near me or wondering why your weatherboards
            are rotting — you&apos;re not alone. This is one of the most common issues in Melbourne homes,
            especially in older and heritage areas like Altona, Newport, Essendon, and Brunswick.
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
                  alt={`Weatherboard repair Melbourne example ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Weatherboards Rot */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Why Weatherboards Rot</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Weatherboard damage usually happens due to a combination of factors. Once paint
                protection wears off, timber absorbs moisture — and that&apos;s when rot begins.
              </p>
              <ul className="space-y-3">
                {[
                  "Failing or old paint (most exterior coatings last around 5 years)",
                  "Constant exposure to rainwater or moisture",
                  "Poor drainage around concrete slabs or soil contact",
                  "Leaking gutters, downpipes, or window frames",
                  "Water sitting on corners and joints",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Do You Need Full Replacement?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A lot of people think they need to replace the whole wall — but in most cases,{" "}
                <strong>you don&apos;t</strong>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">We specialise in:</p>
              <ul className="space-y-3">
                {[
                  "Replacing only the rotten or damaged weatherboards",
                  "Matching existing profiles for a seamless finish",
                  "Full repainting with high-quality waterproof coatings",
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

      {/* Behind the Boards & Problem Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">What Happens Behind the Boards?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When we remove weatherboards, we often find hidden issues. Don&apos;t stress — we handle everything:
              </p>
              <div className="mb-6">
                <p className="font-semibold text-gray-800 mb-3">We commonly find:</p>
                <ul className="space-y-2">
                  {[
                    "Moisture damage to structural studs",
                    "No insulation in older homes",
                    "Hidden rot around windows and corners",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-3">We handle it all:</p>
                <ul className="space-y-2">
                  {[
                    "Structural timber repairs",
                    "Installing insulation batts",
                    "Repairing window frames (no need for full replacement)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Common Problem Areas We Fix</h2>
              <ul className="space-y-3 mb-10">
                {[
                  "Window sills and trims",
                  "External corners",
                  "Areas under leaking gutters",
                  "Box gutter discharge points",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-navy rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We don&apos;t just patch it — we fix the{" "}
                  <strong className="text-white">root cause</strong>, so it doesn&apos;t come back.
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
            weatherboard homes require experienced hands for proper repair and restoration. Our
            team understands the unique construction styles, materials, and common issues found
            in these areas, delivering repairs that maintain the original character while upgrading
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
