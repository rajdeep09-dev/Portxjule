'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  category?: string;
  image: string;
  href: string;
}

export default function Card({ title, category, image, href }: CardProps) {
  return (
    <Link href={href} className="group block w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[30px] bg-[#1a1a1a]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Optional overlay effect matching Framer style often seen */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
      </div>
      <div className="mt-6 flex flex-col gap-1">
        <h3 className="text-2xl font-clash font-semibold text-white uppercase tracking-wide">{title}</h3>
        {category && <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{category}</p>}
      </div>
    </Link>
  );
}
