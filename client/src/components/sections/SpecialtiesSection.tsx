// MORAES & MORAIS ADVOGADOS — Specialties Section
// Precision Law: premium cards with lawyer photos

import { useEffect, useRef } from "react";
import { ArrowRight, FileText, Shield, BookOpen, Heart, Monitor, Briefcase } from "lucide-react";
import { specialties, lawyers } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText size={20} />,
  Shield: <Shield size={20} />,
  BookOpen: <BookOpen size={20} />,
  Heart: <Heart size={20} />,
  Monitor: <Monitor size={20} />,
  Briefcase: <Briefcase size={20} />,
};

export default function SpecialtiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="especialidades"
      ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#1E40AF" }} />
            <span className="section-label">Áreas de Atuação</span>
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
            Cada problema jurídico tem um especialista dedicado.
          </h2>
          <p
            className="text-gray-500 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ao nascermos adquirimos nossa Personalidade Jurídica com Direito e Obrigações. O Advogado é o Profissional que cuida de nossa Saúde Jurídica. Clique e consulte com um de nossos Drs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {specialties.map((specialty, index) => {
            const lawyer = lawyers.find((l) => l.id === specialty.lawyerId);
            return (
              <div
                key={specialty.id}
                className="animate-on-scroll card-premium bg-white rounded-2xl overflow-hidden border border-gray-100 group"
              >
                {/* Card Header with color accent */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: specialty.color }}
                />

                <div className="p-7">
                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: specialty.bgColor, color: specialty.color }}
                    >
                      {iconMap[specialty.icon]}
                    </div>
                    <span
                      className="specialty-badge"
                      style={{
                        backgroundColor: specialty.bgColor,
                        color: specialty.color,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="text-[#0F2044] mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {specialty.title}
                  </h3>
                  <p
                    className="text-gray-500 text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {specialty.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 mb-6" />

                  {/* Lawyer Info */}
                  {lawyer && (
                    <div className="flex items-center gap-3 mb-6">
                      <img
                        src={lawyer.photo}
                        alt={lawyer.name}
                        className="w-10 h-10 rounded-full object-cover object-top border-2 border-white shadow-sm"
                      />
                      <div>
                        <div
                          className="text-[#0F2044] font-semibold text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {lawyer.name}
                        </div>
                        <div
                          className="text-gray-400 text-xs"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {lawyer.oab}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <a
                    href={`/especialidade/${specialty.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                    style={{ color: specialty.color, fontFamily: "'Inter', sans-serif" }}
                  >
                    Conhecer Especialista
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
