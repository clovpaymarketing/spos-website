import Image from "next/image";
import { Container } from "@/components/ui";

export default function ClientSuccessStory() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-2 reveal">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              <span className="text-gradient">Real Results</span> from Real Clients
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
              Our merchants see measurable results from day one. Faster setup, better rates, and support that actually picks up the phone.
            </p>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <span className="text-[#1FA7A1] font-bold">✓</span>
                <span>48-hour onboarding start to finish</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#1FA7A1] font-bold">✓</span>
                <span>Multi-location sync and unified reporting</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#1FA7A1] font-bold">✓</span>
                <span>Dedicated support contact, never a queue</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 reveal">
            <div className="rounded-2xl overflow-hidden border border-white/10 group hover:border-[#1FA7A1]/40 transition-colors">
              <div className="relative h-64 sm:h-72 md:h-96 bg-[#0D1324] overflow-hidden">
                <Image
                  src="/images/10.png"
                  alt="Client Success Story"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
