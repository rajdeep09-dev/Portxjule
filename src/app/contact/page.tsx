'use client';

import FadeIn from '@/components/animations/FadeIn';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-20 min-h-[60vh] flex flex-col justify-center">
      <FadeIn>
        <h1 className="text-6xl md:text-9xl font-bold uppercase mb-20 tracking-tighter">Contact</h1>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-20">
        <FadeIn delay={0.2} className="flex flex-col gap-8">
          <div>
            <p className="text-sm text-gray-500 uppercase mb-4">Email</p>
            <a
              href="mailto:hello.portx@gmail.com"
              className="text-2xl md:text-4xl font-medium hover:text-gray-400 transition-colors break-words"
            >
              hello.portx@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm text-gray-500 uppercase mb-4">Phone</p>
            <a
              href="tel:+1234567890"
              className="text-2xl md:text-4xl font-medium hover:text-gray-400 transition-colors"
            >
              +1 (555) 000-0000
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col gap-8">
           <div>
            <p className="text-sm text-gray-500 uppercase mb-4">Socials</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-2xl hover:text-gray-400 transition-colors">Instagram</a>
              <a href="#" className="text-2xl hover:text-gray-400 transition-colors">Twitter</a>
              <a href="#" className="text-2xl hover:text-gray-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-2xl hover:text-gray-400 transition-colors">Dribbble</a>
            </div>
           </div>
        </FadeIn>
      </div>
    </div>
  );
}
