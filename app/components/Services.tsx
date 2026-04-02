'use client'
import NetlifyImage from './NetlifyImage';

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-burnt-orange shrink-0 mt-0.5">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
  );
}

interface ServiceCategory {
  title: string;
  description: string;
  services: string[];
  images: { src: string; alt: string }[];
  bg: string;
}

const categories: ServiceCategory[] = [
  {
    title: 'Interior Renovations',
    description: 'From bespoke custom doors to beautiful flooring and detailed stair work, we bring exceptional craftsmanship to every room in your home.',
    services: [
      'Custom doors and digital locks',
      'Flooring (timber, hybrid, tiles, carpet)',
      'Skirting boards & architraves',
      'Stairs & balustrades',
      'Walk-in robes & custom storage',
      'Study rooms and kids room design & build',
    ],
    images: [
      { src: '/stickBuildContent/doors/IMG_3522_result.avif', alt: 'Custom door installation' },
      { src: '/stickBuildContent/stairs/IMG_1166_result.avif', alt: 'Staircase detail' },
      { src: '/stickBuildContent/flooring/keep_result.avif', alt: 'Timber flooring' },
      { src: '/stickBuildContent/doors/IMG_5123_result.avif', alt: 'Door installation' },
      { src: '/stickBuildContent/stairs/IMG_1409_result.avif', alt: 'Staircase construction' },
      { src: '/stickBuildContent/flooring/keeep_result.avif', alt: 'Flooring installation' },
      { src: '/stickBuildContent/stairs/9fb8f0a8-05e4-4e54-9d61-88f3902ea830_result.avif', alt: 'Balustrade detail' },
      { src: '/stickBuildContent/flooring/kep_result.avif', alt: 'Flooring finish' },
      { src: '/stickBuildContent/doors/IMG_6472_result.avif', alt: 'Finished door install' },
      { src: '/stickBuildContent/stairs/IMG_1518_result.avif', alt: 'Stair stringers' },
      { src: '/stickBuildContent/flooring/keeepe_result.avif', alt: 'Hybrid flooring' },
      { src: '/stickBuildContent/stairs/IMG_4603_result.avif', alt: 'Stair balustrade' },
      { src: '/stickBuildContent/flooring/kp_result.avif', alt: 'Flooring layout' },
      { src: '/stickBuildContent/stairs/98400464-3da0-404a-b342-5cf52b9e810a_result.avif', alt: 'Staircase finish' },
      { src: '/stickBuildContent/flooring/keeeeeep_result.avif', alt: 'Floor boards' },
      { src: '/stickBuildContent/stairs/e72c7703-e857-4f12-8966-72fad8951f93_result.avif', alt: 'Handrail detail' },
    ],
    bg: 'bg-white',
  },
  {
    title: 'Outdoor & Structural Works',
    description: "Create outdoor living spaces that complement your lifestyle. From stunning Merbau decks to secure fencing and beautiful pergolas, we build outdoor environments built to last Melbourne's climate.",
    services: [
      'Decking (Merbau & composite decking)',
      'Pergolas & outdoor living spaces',
      'Timber and metal fencing',
      'Gates and entry solutions',
      'Balcony construction, tiling & repairs',
      'Garden sheds & custom outdoor structures',
    ],
    images: [
      { src: '/stickBuildContent/deckingAndPergolas/IMG_4440_result.avif', alt: 'Merbau decking' },
      { src: '/stickBuildContent/fences/IMG_5212_result.avif', alt: 'Timber fencing' },
      { src: '/stickBuildContent/deckingAndPergolas/IMG_5340_result.avif', alt: 'Pergola construction' },
      { src: '/stickBuildContent/fences/IMG_4980_result.avif', alt: 'Fence installation' },
      { src: '/stickBuildContent/deckingAndPergolas/deckingAfter_result.avif', alt: 'Decking after renovation' },
      { src: '/stickBuildContent/fences/IMG_5217_result.avif', alt: 'Fence detail' },
      { src: '/stickBuildContent/deckingAndPergolas/IMG_5498_result.avif', alt: 'Deck construction' },
      { src: '/stickBuildContent/fences/IMG_5548_result.avif', alt: 'Fencing completed' },
      { src: '/stickBuildContent/deckingAndPergolas/IMG_6061_result.avif', alt: 'Deck boards laid' },
      { src: '/stickBuildContent/fences/6d04ca39-dbe0-466a-9a26-c5ad0202249f_result.avif', alt: 'Gate installation' },
      { src: '/stickBuildContent/deckingAndPergolas/IMG_6067_result.avif', alt: 'Outdoor space' },
      { src: '/stickBuildContent/fences/7ac7ac72-a64c-4b56-98e2-83f2a0a751d8_result.avif', alt: 'Timber fence posts' },
      { src: '/stickBuildContent/deckingAndPergolas/IMG_6104_result.avif', alt: 'Pergola detail' },
      { src: '/stickBuildContent/fences/IMG_6039_result.avif', alt: 'Fence panels' },
      { src: '/stickBuildContent/deckingAndPergolas/IMG_6520_result.avif', alt: 'Deck finish' },
      { src: '/stickBuildContent/fences/be541b21-d686-4f07-877e-e042e0d86866_result.avif', alt: 'Colorbond fencing' },
      { src: '/stickBuildContent/deckingAndPergolas/deckingBefore_result.avif', alt: 'Deck before renovation' },
      { src: '/stickBuildContent/fences/c5927d5b-07c4-4b1f-a1ce-7895c5ea439c_result.avif', alt: 'Fence and gate combo' },
    ],
    bg: 'bg-gray-50',
  },
  {
    title: 'Framing & New Construction',
    description: 'Solid structural framing is the backbone of every great build. We handle everything from extensions and new frames to sub-floor systems — delivering the structural integrity your project demands.',
    services: [
      'House framing & extensions',
      'Sub-floor & bearer and joist systems',
      'Structural repairs & alterations',
      'Roof framing & trusses',
      'Decks & pergola framing',
      'New home construction carpentry',
    ],
    images: [
      { src: '/stickBuildContent/framing/IMG_0366_result.avif', alt: 'Wall framing' },
      { src: '/stickBuildContent/framing/IMG_1492_result.avif', alt: 'Frame construction' },
      { src: '/stickBuildContent/framing/IMG_2074_result.avif', alt: 'Structural framing' },
      { src: '/stickBuildContent/framing/IMG_2396_result.avif', alt: 'Floor framing' },
      { src: '/stickBuildContent/framing/IMG_2397_result.avif', alt: 'Joist installation' },
      { src: '/stickBuildContent/framing/IMG_4170_result.avif', alt: 'Extension framing' },
      { src: '/stickBuildContent/framing/IMG_4971_result.avif', alt: 'Roof structure' },
      { src: '/stickBuildContent/framing/IMG_4972_result.avif', alt: 'Framing detail' },
      { src: '/stickBuildContent/framing/IMG_8731_result.avif', alt: 'New frame complete' },
    ],
    bg: 'bg-white',
  },
  {
    title: 'Repairs & Restoration',
    description: "Specialising in weatherboard restoration for Melbourne's coastal and heritage homes, we diagnose and repair structural issues properly — no band-aid fixes, just durable solutions.",
    services: [
      'Rotten timber & weatherboard replacement',
      'Cladding installation (including James Hardie cladding)',
      'Squeaky floor & subfloor repairs',
      'Roof repairs & truss fixes',
      'Tile regrouting & repairs',
      'Fascia & eaves repairs (timber & aluminium)',
    ],
    images: [
      { src: '/stickBuildContent/weatherboards/IMG_4850_result.avif', alt: 'Weatherboard replacement' },
      { src: '/stickBuildContent/weatherboards/1db1df92-0f98-49c7-977d-28047b87e574_weatherboards.avif', alt: 'Weatherboard restoration' },
      { src: '/stickBuildContent/weatherboards/IMG_4956_result.avif', alt: 'Cladding installation' },
      { src: '/stickBuildContent/weatherboards/78ebf9c7-cb48-46be-8412-c91cf3a990db_weatherboards.avif', alt: 'Weatherboard detail' },
      { src: '/stickBuildContent/weatherboards/IMG_5158_result.avif', alt: 'Timber repair' },
      { src: '/stickBuildContent/weatherboards/b72c4746-547c-4abc-a6ff-f3589e63a809_weatherboards.avif', alt: 'Corner weatherboard' },
      { src: '/stickBuildContent/weatherboards/c1d64050-2271-4853-87e6-e1148ed67812_weatherboards.avif', alt: 'Heritage cladding' },
      { src: '/stickBuildContent/weatherboards/c9e0c433-0393-4999-9456-75da5b321a1a_weatherboards.avif', alt: 'Board and batten' },
      { src: '/stickBuildContent/weatherboards/e220ea7c-89a3-49e3-b81b-435a49e676ce_weatherboards.avif', alt: 'Eave restoration' },
    ],
    bg: 'bg-gray-50',
  },
];

function ServiceGallery({ images }: { images: ServiceCategory['images'] }) {
  return (
    <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 mt-12">
      {images.map((img, idx) => (
        <div key={idx} className="break-inside-avoid mb-3">
          <div className="relative rounded-lg overflow-hidden">
            <NetlifyImage
              src={img.src}
              alt={img.alt}
              width={900}
              height={600}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services">
      {categories.map((category, catIdx) => (
        <div key={category.title} className={`${category.bg} py-16 md:py-24`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4">
                {category.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
                {category.services.map((service) => (
                  <div key={service} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded font-semibold transition-colors bg-burnt-orange text-white hover:bg-soft-peach"
              >
                Get a Free Quote
              </a>
            </div>
            <ServiceGallery images={category.images} />
          </div>
        </div>
      ))}
    </section>
  );
}
