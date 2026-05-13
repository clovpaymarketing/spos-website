import Image from "next/image";
import { Container } from "@/components/ui";

export default function ClientImplementationShowcase() {
  const showcases = [
    { id: 5, image: "/images/5.png", alt: "Retail Implementation" },
    { id: 6, image: "/images/6.png", alt: "Restaurant Setup" },
    { id: 7, image: "/images/7.png", alt: "Service Business" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-[#0D1324]/10 to-transparent">
      <Container>
        <div className="mb-12">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
            Serving <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            From retail shops to restaurants to service-based businesses, Clovpay powers businesses of all sizes.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-3">
          {showcases.map((showcase) => (
            <div
              key={showcase.id}
              className="reveal rounded-2xl overflow-hidden border border-white/10 group hover:border-[#1FA7A1]/40 transition-colors"
            >
              <div className="relative h-72 sm:h-80 md:h-96 bg-[#0D1324] overflow-hidden">
                <Image
                  src={showcase.image}
                  alt={showcase.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
