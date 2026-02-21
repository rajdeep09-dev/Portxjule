'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  category?: string;
  image: string;
  href: string;
}

export default function Card({ title, category, image, href }: CardProps) {
  return (
    <Link href={href} className="group block w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1a1a1a]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        {category && <p className="text-sm text-gray-400">{category}</p>}
      </div>
    </Link>
  );
}
