const testimonials = [
  {
    name: 'Sarah M.',
    suburb: 'Brighton',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Exceptionally professional team — our deck looks absolutely stunning. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'James T.',
    suburb: 'Essendon',
    review: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. They replaced our weatherboards and the result was beyond our expectations. Consectetur adipiscing elit.',
  },
  {
    name: 'Michelle K.',
    suburb: 'Williamstown',
    review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Kitchen renovation came in on time and on budget. Ut enim ad minim veniam.',
  },
  {
    name: 'David R.',
    suburb: 'Brunswick',
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Our fence was leaning badly and they had it fixed within the week. Quis nostrud exercitation.',
  },
  {
    name: 'Priya N.',
    suburb: 'Caulfield',
    review: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. From quote to completion, the communication was excellent. Ut aliquip ex ea commodo.',
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-burnt-orange">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Trusted by homeowners and businesses across Melbourne.
        </p>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex-shrink-0 w-72 md:w-auto"
            >
              <StarRating />
              <p className="text-gray-700 leading-relaxed mb-4 italic">"{t.review}"</p>
              <div>
                <p className="font-semibold text-navy">{t.name}</p>
                <p className="text-sm text-gray-500">{t.suburb}, Melbourne</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
