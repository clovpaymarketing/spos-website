import Image from "next/image";
import { Container, SectionHeader } from "@/components/ui";

export default function RealClientShowcase() {
  const clients = [
    { id: 1, image: "/images/1.webp", alt: "Client Payment Terminal Setup" },
    { id: 2, image: "/images/2.jpg", alt: "Client Business Operations" },
    { id: 3, image: "/images/3.png", alt: "Client POS System" },
    { id: 4, image: "/images/4.png", alt: "Client Payment Processing" },
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          pill="Real World"
          gradientText="Trusted by"
          rest="Businesses Nationwide"
          subtitle="See how merchants across the country use Clovpay to streamline operations and grow faster."
        />

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="reveal rounded-2xl overflow-hidden border border-white/10 group hover:border-[#1FA7A1]/40 transition-colors"
            >
              <div className="relative h-64 sm:h-72 md:h-80 bg-[#0D1324] overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
