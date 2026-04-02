'use client'
import Image, { ImageProps } from 'next/image';
import { fetchUsingNetlify } from '@/lib/netlifyImage';

const netlifyLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) =>
  fetchUsingNetlify(src, { width, quality });

export default function NetlifyImage(props: ImageProps) {
  return <Image {...props} loader={netlifyLoader} />;
}
