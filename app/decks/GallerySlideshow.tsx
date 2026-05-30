'use client';
import { useEffect, useState } from 'react';
import NetlifyImage from '../components/NetlifyImage';

const images = [
  '/stickBuildContent/deckingAndPergolas/IMG_5340_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_5498_result.avif',
  '/stickBuildContent/deckingAndPergolas/deck_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_6067_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_6104_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_6520_result.avif',
];

export default function GallerySlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-gray-200">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <NetlifyImage
            src={src}
            alt={`Deck and pergola Melbourne example ${i + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
        aria-label="Previous image"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
        aria-label="Next image"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
