export function fetchUsingNetlify(
  src: string,
  options?: { width?: number; quality?: number }
): string {
  if (process.env.NEXT_PUBLIC_NETLIFY !== 'true') return src;
  const params = new URLSearchParams({ url: src });
  if (options?.width) params.set('w', String(options.width));
  if (options?.quality) params.set('q', String(options.quality));
  return `/.netlify/images?${params}`;
}
