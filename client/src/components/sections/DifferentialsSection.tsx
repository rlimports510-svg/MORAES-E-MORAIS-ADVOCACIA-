// MORAES & MORAIS ADVOGADOS — Differentials Section
// Precision Law: numbered items, editorial layout

import { useEffect, useRef } from "react";
import { Users, Target, Globe, MessageSquare, TrendingUp, Award } from "lucide-react";
import { differentials, stats } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={22} />,
  Target: <Target size={22} />,
  Globe: <Globe size={22} />,
  MessageSquare: <MessageSquare size={22} />,
  TrendingUp: <TrendingUp size={22} />,
  Award: <Award size={22} />,
};

export default function DifferentialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diferenciais" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#1E40AF" }} />
            <span className="section-label">Por que nos escolher</span>
          </div>
          <h2
            className="text-[#0F2044] mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Uma abordagem diferente para resultados diferentes.
          </h2>
          <p
            className="text-gray-500 text-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Não somos um escritório genérico. Somos uma plataforma de especialistas jurídicos com foco em resultados.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 stagger-children">
          {differentials.map((diff, index) => (
            <div key={diff.title} className="animate-on-scroll group">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#0F2044]"
                  style={{ backgroundColor: "#F0F4FF" }}
                >
                  <span
                    className="transition-colors group-hover:text-white"
                    style={{ color: "#1E40AF" }}
                  >
                    {iconMap[diff.icon]}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: "#1E40AF", fontFamily: "'Inter', sans-serif" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-[#0F2044] font-semibold"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
                    >
                      {diff.title}
                    </h3>
                  </div>
                  <p
                    className="text-gray-500 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {diff.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div
          className="animate-on-scroll rounded-2xl p-10 lg:p-14"
          style={{ backgroundColor: "#0F2044" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:px-8">
                <div
                  className="text-white mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 3vw, 3rem)",
                    fontWeight: 700,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/50 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
