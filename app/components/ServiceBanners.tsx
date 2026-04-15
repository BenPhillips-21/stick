import NetlifyImage from './NetlifyImage';

const banners = [
  {
    title: 'Weatherboard Repair Melbourne',
    description: 'Expert restoration of rotting or damaged weatherboards — matched profiles, structural repairs, and waterproof repainting.',
    href: '/weatherboard-repair',
    image: '/stickBuildContent/weatherboards/IMG_5158_result.avif',
    alt: 'Weatherboard repair Melbourne',
  },
  {
    title: 'Deck Builders Melbourne',
    description: 'Deck repair, restoration, and new builds using quality Merbau and treated MGP10 H3 timber. Pergolas too.',
    href: '/deck-builders',
    image: '/stickBuildContent/deckingAndPergolas/IMG_6067_result.avif',
    alt: 'Deck builders Melbourne',
  },
  {
    title: 'Fence & Gate Installation',
    description: 'Timber paling, Colorbond, and custom fencing built straight and strong — plus gate repairs and new installs.',
    href: '/fence-gate-installation',
    image: '/stickBuildContent/fences/IMG_5548_result.avif',
    alt: 'Fence and gate installation Melbourne',
  },
];

export default function ServiceBanners() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4">
          Specialist Services
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
          Deep-dive guides on our most requested services — with full details on process, pricing factors, and what to expect.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {banners.map((banner) => (
            <a
              key={banner.href}
              href={banner.href}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 block"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <NetlifyImage
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {banner.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  {banner.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-soft-peach font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
