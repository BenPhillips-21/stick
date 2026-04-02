import NetlifyImage from './NetlifyImage';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="/" className="relative flex items-center" style={{ height: 48, width: 160 }}>
          <NetlifyImage
            src="/stickBuildContent/stickBuildConstructionLogo.PNG"
            alt="Stick Build Construction"
            fill
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </a>
        <a
          href="#contact"
          className="bg-burnt-orange text-white px-5 py-2.5 rounded font-medium hover:bg-soft-peach transition-colors whitespace-nowrap"
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}
