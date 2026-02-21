'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';

export default function Navbar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm bg-black/50">
      <Link href="/" className="relative h-8 w-28">
        <Image
          src="https://framerusercontent.com/images/7DxEQJZyMH75MGHNGk6E7oWsws.svg"
          alt="Portx Logo"
          fill
          className="object-contain object-left"
        />
      </Link>

      <div className="hidden md:flex items-center gap-12 text-xs font-medium text-gray-400 uppercase tracking-wide">
        <span>LOS ANGELES, FL</span>
        <span className="w-16 text-center tabular-nums">{time}</span>
        <a href="mailto:hello.portx@gmail.com" className="hover:text-white transition-colors">HELLO@PORTX.DESIGN</a>
      </div>

      <Button href="/contact">Contact Now</Button>
    </nav>
  );
}
