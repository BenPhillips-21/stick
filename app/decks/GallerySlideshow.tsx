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

  const nextIndex = (current + 1) % images.length;
  const toRender = new Set([current, nextIndex]);
  if (exiting !== null) toRender.add(exiting);

  return (
    <>
      {/* Feature image */}
      <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-[0_24px_50px_-22px_rgba(4,44,92,.45)]">
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

        {/* Bottom gradient scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(4,44,92,0) 55%, rgba(4,44,92,.55) 100%)' }}
        />

        {/* Arrows — top-right */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => {
              goTo((current - 1 + images.length) % images.length);
              trackNavigation('prev');
            }}
            className="w-[38px] h-[38px] rounded-full bg-white/90 shadow flex items-center justify-center text-navy hover:bg-white transition-colors"
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
            className="w-[38px] h-[38px] rounded-full bg-white/90 shadow flex items-center justify-center text-navy hover:bg-white transition-colors"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Thumbnail filmstrip */}
      <div className="flex gap-2.5 mt-3.5">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => { goTo(i); trackNavigation('dot', i); }}
            className={`relative flex-1 aspect-square rounded-[10px] overflow-hidden cursor-pointer transition-opacity outline-solid outline-[3px] -outline-offset-2
              ${i === current
                ? 'opacity-100 outline-burnt-orange'
                : 'opacity-50 outline-transparent hover:opacity-80'}`}
            aria-label={`Show image ${i + 1}`}
          >
            <NetlifyImage src={src} alt="" fill style={{ objectFit: 'cover' }} sizes="120px" />
          </button>
        ))}
      </div>
    </>
  );
}
