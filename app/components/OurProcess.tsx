const steps = [
  {
    number: '1',
    title: 'Free Same-Day Quote',
    description: 'Contact us and we\'ll visit your site the same day to provide a free, detailed estimate with no obligation.',
  },
  {
    number: '2',
    title: 'Clear & Transparent Pricing',
    description: 'Receive a comprehensive quote with full itemisation. No hidden costs, no guesswork — just honest pricing.',
  },
  {
    number: '3',
    title: 'Work Starts Within 3 Days',
    description: 'Once your quote is accepted, we guarantee a team member on-site to begin work within three days.',
  },
];

export default function OurProcess() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4">
          Our Process
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl">
          What sets us apart is the speed and transparency of our workflow. We move quickly from problem to solution — delivering a level of efficiency rarely seen in the trades.
        </p>
        <p className="text-gray-600 mb-12 leading-relaxed max-w-3xl">
          From the moment you reach out, we're focused on getting you a fast, accurate quote and starting work without delay.
        </p>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" style={{ left: '8.33%', right: '8.33%' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center md:items-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-burnt-orange flex items-center justify-center text-white text-2xl font-bold mb-6 shrink-0">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
