'use client';

import FadeIn from '@/components/animations/FadeIn';
import Card from '@/components/ui/Card';
import { WORKS } from '@/lib/data';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-32 flex flex-col items-center justify-center text-center pt-12">
        <FadeIn>
          <h1 className="text-[15vw] font-bold uppercase leading-[0.8] tracking-tighter text-white mix-blend-difference">
            Portx
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-12">
          <p className="text-xl md:text-2xl text-gray-400 max-w-lg mx-auto">
            A sleek and modern portfolio template for creative professionals.
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {WORKS.map((work, index) => (
          <FadeIn key={work.id} delay={index * 0.1}>
            <Card
              title={work.title}
              category={work.category}
              image={work.image}
              href={`/works/${work.id}`}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
