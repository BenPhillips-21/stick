import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import NetlifyImage from "../components/NetlifyImage";
import QuoteButton from "../components/QuoteButton";

export const metadata: Metadata = {
  title: "About Us | Stick Build Construction — Melbourne Construction & Carpentry",
  description:
    "Stick Build Construction is a Melbourne-based construction and carpentry team delivering renovations, decks, fencing, framing, and weatherboard restoration with honest advice and quality workmanship.",
  openGraph: {
    title: "About Stick Build Construction | Melbourne Construction & Carpentry",
    description:
      "Meet Stick Build Construction — a Melbourne team delivering quality carpentry, renovations, decks, fencing, framing, and weatherboard restoration across all suburbs.",
    locale: "en_AU",
    type: "website",
  },
};

const gallery = [
  { src: "/stickBuildContent/new1_result.avif", alt: "Interior wooden partition by Stick Build Construction" },
  { src: "/stickBuildContent/deckingAndPergolas/IMG_6067_result.avif", alt: "Merbau deck build in Melbourne" },
  { src: "/stickBuildContent/framing/IMG_4170_result.avif", alt: "Structural framing on an extension" },
  { src: "/stickBuildContent/weatherboards/IMG_5158_result.avif", alt: "Weatherboard restoration in progress" },
  { src: "/stickBuildContent/fences/IMG_5548_result.avif", alt: "Completed fencing in Melbourne" },
  { src: "/stickBuildContent/stairs/IMG_1409_result.avif", alt: "Custom staircase construction" },
];

const values = [
  {
    title: "Honest, upfront advice",
    body: "We tell you what actually needs doing — no upselling, no band-aid fixes. If there's a smarter or cheaper way to solve it, we'll say so.",
  },
  {
    title: "Quality that lasts",
    body: "From Merbau decking to structural framing, we use the right materials for Melbourne's climate and build things to stand the test of time.",
  },
  {
    title: "Start to finish, one team",
    body: "We handle everything from the first inspection to the final clean-up, so you always know who's responsible and what's happening next.",
  },
  {
    title: "Local and reliable",
    body: "Based in Newport and working across every Melbourne suburb, we turn up when we say we will and keep you updated the whole way through.",
  },
];

const services = [
  { label: "Interior renovations, flooring, doors & staircases", href: "/#services" },
  { label: "Deck & pergola builds and repairs", href: "/deck-builders" },
  { label: "Timber, Colorbond & custom fencing and gates", href: "/fence-gate-installation" },
  { label: "House framing, extensions & new construction", href: "/#services" },
  { label: "Weatherboard restoration & cladding", href: "/weatherboard-repair" },
];

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-soft-peach font-semibold uppercase tracking-wide text-sm mb-3">
            About Stick Build Construction
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Melbourne&apos;s trusted construction &amp; carpentry team
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed">
            Stick Build Construction is a Melbourne-based building and carpentry company delivering
            high-quality construction, renovation, and repair work across every suburb. From small
            fixes to full-scale builds, we handle each project from start to finish — with the same
            care whether it&apos;s a single door or a whole extension.
          </p>
          <QuoteButton />
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4">
              Who we are
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                We&apos;re a hands-on team of carpenters and builders who genuinely enjoy the craft.
                Every home is different, so we take the time to understand what you&apos;re after,
                diagnose the real issue, and get the details right.
              </p>
              <p>
                Our work spans interior renovations, custom carpentry, decking and pergolas, fencing
                and gates, structural framing and extensions, and weatherboard restoration for
                Melbourne&apos;s coastal and heritage homes. Whatever the job, you deal with the
                people actually doing the work.
              </p>
              <p>
                Based in Newport and operating across all Melbourne suburbs, we&apos;re proud of the
                relationships we build — most of our work comes from happy customers and their
                referrals.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <NetlifyImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we value */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4">
            What you can expect from us
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
            The way we work is simple — do the job properly, communicate clearly, and treat every
            home like it&apos;s our own.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4">
            What we do
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            A full range of construction and carpentry services under one roof:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {services.map((service) => (
              <li key={service.label}>
                <a
                  href={service.href}
                  className="flex items-start gap-3 text-gray-700 hover:text-burnt-orange transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-burnt-orange shrink-0 mt-0.5">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                  <span>{service.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <QuoteButton />
        </div>
      </section>

      <Footer />
      <ContactModal />
    </>
  );
}
