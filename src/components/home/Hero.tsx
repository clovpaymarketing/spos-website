import { Zap, ArrowRight, Play, CreditCard, Globe, Building2, Award } from "lucide-react";
import Link from "next/link";
import { SectionPill } from "@/components/ui";

const stats = [
  { icon: CreditCard, value: "99.9%", label: "Uptime" },
  { icon: Building2, value: "Next Day", label: "Funding" },
  { icon: Globe, value: "Multi Location", label: "Sync" },
  { icon: Award, value: "100+", label: "Device Options" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Background removed (was video/image); use solid dark background */}
      <div className="absolute inset-0 bg-[#070B1A]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center md:text-left">
          <div className="reveal">
            <SectionPill>
              <Zap size={14} className="text-[#1FA7A1]" />
              Trusted Payment Infrastructure
            </SectionPill>
          </div>

          <h1 className="reveal mt-5 text-[36px] leading-[1.05] sm:text-5xl md:text-[56px] lg:text-6xl font-extrabold tracking-tight">
            <span className="text-gradient">Empowering Merchants</span>
            <br />
            Across US with World-Class
            <br />
            Payment Tech.
          </h1>

          <p className="reveal mt-5 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed mx-auto md:mx-0">
            All in one payment solutions to streamline operations, accelerate
            growth, and secure every transaction.
          </p>

          <div className="reveal mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1FA7A1] to-[#0F6F73] px-6 py-3.5 font-semibold text-white btn-glow hover:brightness-110 transition"
            >
              Get Started Today <ArrowRight size={18} />
            </Link>
            <Link
              href="/business"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition"
            >
              <Play size={16} /> Watch Demo
            </Link>
          </div>

          <div className="reveal mt-9 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 md:gap-x-8">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0 flex flex-col items-center md:items-start">
                <s.icon size={18} className="text-[#1FA7A1] mb-2" />
                <div className="text-2xl sm:text-[32px] font-extrabold text-white leading-tight">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
