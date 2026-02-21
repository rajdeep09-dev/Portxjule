'use client';

import FadeIn from '@/components/animations/FadeIn';
import Card from '@/components/ui/Card';
import { WORKS } from '@/lib/data';

export default function Home() {
  // We will manually position the first few items to replicate the staggered look,
  // then fallback to a responsive grid for mobile or standard flow.
  // The original design had specific positions. We will approximate a "scattered" grid.

  return (
    <div className="relative min-h-[250vh] w-full max-w-[1920px] mx-auto overflow-hidden">

      {/* Hero Section - Off-center */}
      <div className="absolute top-[10%] left-[5%] md:left-[15%] z-10">
        <FadeIn>
          <h1 className="text-[18vw] md:text-[12vw] font-clash font-semibold uppercase leading-[0.8] tracking-tighter text-white mix-blend-difference">
            Portx
          </h1>
        </FadeIn>
      </div>

      <div className="absolute top-[35%] md:top-[30%] right-[5%] md:right-[15%] max-w-xs md:max-w-md text-right z-10">
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
            A sleek and modern portfolio template designed for creative professionals who want to stand out.
          </p>
        </FadeIn>
      </div>

      {/* Staggered Grid Implementation using absolute positioning for Desktop, normal flow for Mobile */}

      {/* Desktop Layout (Hidden on Mobile) */}
      <div className="hidden md:block absolute top-[50%] w-full h-full">

        {/* Card 1 - Left */}
        <div className="absolute left-[8%] top-0 w-[35%]">
          <FadeIn delay={0.3}>
            <Card {...WORKS[0]} href={`/works/${WORKS[0].id}`} />
          </FadeIn>
        </div>

        {/* Card 2 - Right, Lower */}
        <div className="absolute right-[8%] top-[200px] w-[40%]">
          <FadeIn delay={0.4}>
            <Card {...WORKS[1]} href={`/works/${WORKS[1].id}`} />
          </FadeIn>
        </div>

        {/* Card 3 - Center-ish */}
        <div className="absolute left-[15%] top-[700px] w-[30%]">
          <FadeIn delay={0.5}>
            <Card {...WORKS[2]} href={`/works/${WORKS[2].id}`} />
          </FadeIn>
        </div>

        {/* Card 4 - Right */}
        <div className="absolute right-[20%] top-[900px] w-[35%]">
          <FadeIn delay={0.6}>
            <Card {...WORKS[3]} href={`/works/${WORKS[3].id}`} />
          </FadeIn>
        </div>

         {/* Card 5 - Far Left */}
         <div className="absolute left-[5%] top-[1300px] w-[40%]">
          <FadeIn delay={0.7}>
            <Card {...WORKS[4]} href={`/works/${WORKS[4].id}`} />
          </FadeIn>
        </div>

        {/* Card 6 - Center Right */}
        <div className="absolute right-[10%] top-[1500px] w-[30%]">
          <FadeIn delay={0.8}>
            <Card {...WORKS[5]} href={`/works/${WORKS[5].id}`} />
          </FadeIn>
        </div>

         {/* Card 7 - Bottom Center */}
         <div className="absolute left-[30%] top-[1900px] w-[40%]">
          <FadeIn delay={0.9}>
            <Card {...WORKS[6]} href={`/works/${WORKS[6].id}`} />
          </FadeIn>
        </div>

      </div>

      {/* Mobile Layout (Visible only on Mobile) */}
      <div className="md:hidden flex flex-col gap-16 px-6 pt-[60vh] pb-32">
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
