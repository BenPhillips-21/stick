'use client';
import { useEffect } from 'react';

const sections = [
  { id: 'section-gallery', name: 'gallery' },
  { id: 'section-process', name: 'process' },
  { id: 'section-features', name: 'features' },
  { id: 'section-faq', name: 'faq' },
  { id: 'section-final-cta', name: 'final_cta' },
];

export default function SectionTracker() {
  useEffect(() => {
    const fired = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fired.has(entry.target.id)) {
            fired.add(entry.target.id);
            const section = sections.find(s => s.id === entry.target.id);
            if (section) {
              window.gtag('event', 'section_reached', { section: section.name });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
