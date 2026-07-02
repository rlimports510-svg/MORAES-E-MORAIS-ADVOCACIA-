// MORAES & MORAIS ADVOGADOS — Hero Section
// Precision Law: Full-width editorial team background layout

import { useEffect, useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/data";

export default function HeroSection() {
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
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden text-white"
      style={{ backgroundColor: "#0F2044" }}
    >
      {/* Background Image with Dark Navy Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_team.png"
          alt="Moraes & Morais Advogados"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity filter brightness-90"
        />
        <div className="absolute inset-0 bg-[#0F2044] opacity-75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2044] via-[#0F2044]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2044] via-transparent to-[#0F2044]/40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl space-y-6 lg:space-y-8 animate-on-scroll">
          
          {/* Top Label */}
          <div className="flex items-center gap-2">
            <span
              className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              — ESCRITÓRIO DE ADVOCACIA ESPECIALIZADO
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-white leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 700,
            }}
          >
            Especialistas em soluções jurídicas estratégicas para{" "}
            <span className="font-serif italic font-normal text-white/95">
              pessoas e empresas.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Cada caso merece atenção especializada. Nossa equipe reúne profissionais focados em diferentes áreas do Direito para oferecer a melhor estratégia para cada situação.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap gap-4 pt-4 items-center">
            {/* Button 1: Agendar Consulta */}
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-[#0F2044] bg-white hover:bg-gray-100 transition-all btn-press shadow-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Calendar size={16} />
              Agendar Consulta
            </a>

            {/* Button 2: Falar pelo WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#00C243] hover:bg-[#00A83A] transition-all btn-press shadow-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </a>

            {/* Button 3: Especialistas por Área */}
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-all btn-press"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Especialistas por Área
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
