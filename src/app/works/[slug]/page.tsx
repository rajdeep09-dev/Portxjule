import Image from 'next/image';
import { notFound } from 'next/navigation';
import { WORKS, FAQ_ITEMS } from '@/lib/data';
import FadeIn from '@/components/animations/FadeIn';

export function generateStaticParams() {
  return WORKS.map((work) => ({
    slug: work.id,
  }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = WORKS.find(w => w.id === slug);

  if (!work) notFound();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Info */}
      <FadeIn className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-12 gap-8">
        <h1 className="text-6xl md:text-9xl font-clash font-semibold uppercase tracking-tighter text-white">{work.title}</h1>
        <div className="text-left md:text-right">
           <p className="text-gray-500 text-sm uppercase mb-2 font-medium tracking-widest">Category</p>
           <p className="text-xl md:text-2xl font-clash text-white">{work.category}</p>
        </div>
      </FadeIn>

      {/* Banner */}
      <FadeIn delay={0.2} className="relative w-full aspect-video rounded-[30px] overflow-hidden mb-32 bg-[#1a1a1a]">
        <Image src={work.image} alt={work.title} fill className="object-cover" priority />
      </FadeIn>

      {/* Description */}
      <FadeIn delay={0.3} className="grid md:grid-cols-[1fr_2fr] gap-12 mb-32">
        <h3 className="text-2xl font-clash font-medium uppercase text-white">About the project</h3>
        <div className="text-gray-400 text-lg md:text-xl leading-relaxed space-y-6">
          <p>{work.description}</p>
          <p>This is a placeholder description for the project. Ideally, this would contain more detailed information extracted from the original site content about the design process, challenges, and solutions.</p>
        </div>
      </FadeIn>

      {/* FAQ */}
      <FadeIn delay={0.4} className="mb-20">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-4xl md:text-6xl font-clash font-semibold uppercase tracking-tight text-white">FAQ</h3>
          <span className="text-gray-500 font-clash text-4xl">//</span>
        </div>

        <div className="grid gap-0">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="group border-t border-white/20 py-8 transition-colors hover:bg-white/5 px-4">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <span className="text-gray-500 text-sm font-mono">0{i + 1}</span>
                <div className="md:w-1/2">
                  <h4 className="text-xl font-medium uppercase mb-4 text-white font-clash">{item.question}</h4>
                </div>
                <div className="md:w-1/3 text-gray-400">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
