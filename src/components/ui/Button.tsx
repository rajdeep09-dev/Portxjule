'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, className, onClick }: ButtonProps) {
  // If href is provided, use Link, otherwise use button or div
  const Wrapper = href ? Link : 'button';

  return (
    <Wrapper
      href={href || ''}
      onClick={onClick}
      className={twMerge(
        "group relative overflow-hidden rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase text-white transition-colors",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 z-0 bg-white"
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      />
      <span className="relative z-10 mix-blend-difference text-white">
        {children}
      </span>
    </Wrapper>
  );
}
