const suburbs = [
  'Altona', 'Brighton', 'Williamstown', 'Newport', 'Caulfield',
  'Essendon', 'Brunswick', 'Coburg', 'St Kilda', 'Port Melbourne',
  'Footscray', 'Yarraville', 'Moonee Ponds', 'Hawthorn', 'Richmond',
  'South Yarra', 'Fitzroy', 'Collingwood', 'Prahran', 'Albert Park',
];

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-soft-peach shrink-0 mt-0.5">
      <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.083 3.218-4.467 3.218-7.327a7.5 7.5 0 1 0-15 0c0 2.86 1.274 5.244 3.218 7.327a19.579 19.579 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
    </svg>
  );
}

export default function AreasOfService() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Servicing Melbourne & Surrounding Areas
        </h2>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl">
          Providing construction and carpentry services across all Melbourne suburbs, including residential, commercial, and large-scale building projects.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {suburbs.map((suburb) => (
            <div key={suburb} className="flex items-start gap-2">
              <LocationIcon />
              <span className="text-gray-200">{suburb}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-900 pt-8 text-center">
          <p className="text-gray-300 mb-4">
            Don't see your suburb? We service all Melbourne areas.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded font-semibold transition-colors bg-burnt-orange text-white hover:bg-soft-peach"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
