import { notFound } from 'next/navigation';
import { SERVICES, FAQ_ITEMS } from '@/lib/data';
import FadeIn from '@/components/animations/FadeIn';

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.id === slug);

  if (!service) notFound();

  return (
    <div className="container mx-auto px-6 py-12">
      <FadeIn>
        <h1 className="text-6xl md:text-9xl font-clash font-semibold uppercase mb-20 tracking-tighter text-white">{service.title}</h1>
      </FadeIn>

      <FadeIn delay={0.2} className="mb-32">
        <p className="text-2xl md:text-4xl text-gray-400 max-w-4xl leading-tight font-medium">
          {service.description}
        </p>
      </FadeIn>

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
