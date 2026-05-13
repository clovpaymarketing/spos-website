import Hero from "@/components/home/Hero";
import CoreFeatures from "@/components/home/CoreFeatures";
import CapabilitiesGallery from "@/components/home/CapabilitiesGallery";
import HeroClientGallery from "@/components/HeroClientGallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreFeatures />
      <HeroClientGallery />
      <CapabilitiesGallery />
    </>
  );
}
