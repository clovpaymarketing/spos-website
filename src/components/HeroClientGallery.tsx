import Image from "next/image";
import { Container } from "@/components/ui";

export default function HeroClientGallery() {
  const images = [
    { id: 8, image: "/images/8.png", alt: "Client Success Story" },
    { id: 9, image: "/images/9.png", alt: "Client Implementation" },
  ];

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {images.map((img) => (
            <div
              key={img.id}
              className="reveal rounded-2xl overflow-hidden border border-white/10 group hover:border-[#1FA7A1]/40 transition-colors"
            >
              <div className="relative h-64 sm:h-72 md:h-80 bg-[#0D1324] overflow-hidden">
                <Image
                  src={img.image}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
