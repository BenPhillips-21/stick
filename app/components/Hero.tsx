'use client'
import NetlifyImage from './NetlifyImage';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      <div className="order-2 md:order-1 md:w-[55%] bg-navy flex items-center">
        <div className="px-8 py-16 md:py-20 md:px-12 lg:px-16 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Your One-Stop Construction & Carpentry Solution
          </h1>
          <p className="text-gray-200 leading-relaxed mb-4">
            Delivering high-quality construction, renovation, and carpentry services across Melbourne, we handle everything from small repairs to full-scale builds. With a strong focus on workmanship, durability, and detail, every project is completed to meet Australian standards.
          </p>
          <p className="text-gray-200 leading-relaxed mb-8">
            Whether it's a home upgrade, commercial fit-out, or a brand-new build, all services are managed from start to finish — making the process simple, efficient, and stress-free.
          </p>
          <button
            onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
            className="inline-block px-6 py-3 rounded font-semibold transition-colors bg-burnt-orange text-white hover:bg-soft-peach"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
      <div className="order-1 md:order-2 md:w-[45%] relative min-h-[300px] md:min-h-0">
        <NetlifyImage
          src="/stickBuildContent/heroImage.jpg"
          alt="Stick Build Construction — Melbourne carpentry and construction"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>
    </section>
  );
}
