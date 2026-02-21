'use client';

import { motion } from 'framer-motion';

export default function TextReveal({ children, className }: { children: string, className?: string }) {
  return (
    <div className={`relative overflow-hidden h-[1.2em] inline-block ${className}`}>
      <div className="group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
        <span className="block">{children}</span>
        <span className="block absolute top-full left-0">{children}</span>
      </div>
    </div>
  );
}
