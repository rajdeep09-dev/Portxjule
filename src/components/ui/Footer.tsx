import Link from 'next/link';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center px-6 pb-12 pt-32 text-center overflow-hidden">
      <div className="relative z-10 mb-12 flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-8xl font-bold uppercase leading-tight text-white">
          Ready to<br />Collaborate?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-lg">
          Have a project in mind? Let's create something extraordinary together.
        </p>
        <Button href="/contact" className="mt-8">Contact Now</Button>
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end text-sm text-white font-medium uppercase border-t border-white/10 pt-8 mt-20">
        <p>©2025 PORTX.DESIGN</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link href="https://dribbble.com" target="_blank" className="hover:text-gray-400 transition-colors">Dribbble</Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-gray-400 transition-colors">IG</Link>
          <Link href="https://x.com" target="_blank" className="hover:text-gray-400 transition-colors">X</Link>
          <Link href="https://behance.net" target="_blank" className="hover:text-gray-400 transition-colors">BE</Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-gray-400 transition-colors">IN</Link>
        </div>
        <Link href="#" className="hover:text-gray-400 transition-colors mt-4 md:mt-0">Back to Top</Link>
      </div>
    </footer>
  );
}
