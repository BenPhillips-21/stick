'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import NetlifyImage from '../components/NetlifyImage';

const images = [
  '/stickBuildContent/deckingAndPergolas/IMG_5498_result.avif',
  '/stickBuildContent/deckingAndPergolas/deck_result.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_6067_result.avif',
  '/stickBuildContent/newAfter.avif',
  '/stickBuildContent/deckingAndPergolas/IMG_5340_result.avif',
  '/stickBuildContent/b4Afters/afterVertical.avif',
  '/stickBuildContent/b4Afters/afterSquare.avif',
];

const TRANSITION_MS = 700;

export default function GallerySlideshow() {
  const [current, setCurrent] = useState(0);
  const [exiting, setExiting] = useState<number | null>(null);
  const currentRef = useRef(0);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasNavigated = useRef(false);

  const goTo = useCallback((idx: number) => {
    if (exitTimer.current) clearTimeout(exitTimer.current);
    setExiting(currentRef.current);
    currentRef.current = idx;
    setCurrent(idx);
    exitTimer.current = setTimeout(() => setExiting(null), TRANSITION_MS);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((currentRef.current + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [goTo]);

  function trackNavigation(direction: string, imageIndex?: number) {
    if (hasNavigated.current) return;
    hasNavigated.current = true;
    window.gtag('event', 'gallery_navigated', { direction, ...(imageIndex !== undefined && { image_index: imageIndex }) });
  }

  // Only keep 3 images in the DOM: current (visible), exiting (fading out), next (preloading)
  const nextIndex = (current + 1) % images.length;
  const toRender = new Set([current, nextIndex]);
  if (exiting !== null) toRender.add(exiting);

  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-gray-200">
      {images.map((src, i) => {
        if (!toRender.has(i)) return null;
        return (
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
        );
      })}

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              goTo(i);
              trackNavigation('dot', i);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => {
          goTo((current - 1 + images.length) % images.length);
          trackNavigation('prev');
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
        aria-label="Previous image"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => {
          goTo((current + 1) % images.length);
          trackNavigation('next');
        }}
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
