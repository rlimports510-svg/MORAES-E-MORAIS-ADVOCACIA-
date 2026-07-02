// MORAES & MORAIS ADVOGADOS — Team Page
// Precision Law: executive profiles, editorial layout

import { useEffect } from "react";
import { Linkedin, Mail, ArrowRight, Award, BookOpen, Briefcase } from "lucide-react";
import { lawyers, specialties, WHATSAPP_NUMBER } from "@/lib/data";

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{ backgroundColor: "#0F2044" }}
      >
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-blue-400" />
              <span
                className="text-blue-300 text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Nossa Equipe
              </span>
            </div>
            <h1
              className="text-white mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Especialistas dedicados ao seu caso.
            </h1>
            <p
              className="text-white/60 text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Cada advogado do nosso escritório é especialista em uma área específica do Direito, garantindo profundidade técnica e resultados superiores.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {lawyers.map((lawyer, index) => {
              const specialty = specialties.find((s) => s.id === lawyer.specialtyId);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={lawyer.id}
                  className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-12 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  {/* Photo */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative">
                      <div
                        className="absolute -inset-4 rounded-3xl opacity-30"
                        style={{ backgroundColor: specialty?.bgColor || "#F0F4FF" }}
                      />
                      <img
                        src={lawyer.photoFull}
                        alt={lawyer.name}
                        className="relative w-full max-w-sm mx-auto rounded-2xl object-cover object-top shadow-xl"
                        style={{ aspectRatio: "3/4", maxHeight: "480px" }}
                      />
                      {/* Specialty badge overlay */}
                      <div
                        className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 backdrop-blur-sm"
                        style={{ backgroundColor: "rgba(15,32,68,0.9)" }}
                      >
                        <div
                          className="text-white font-bold text-sm"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {lawyer.name}
                        </div>
                        <div
                          className="text-white/60 text-xs mt-0.5"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {lawyer.specialty}{lawyer.oab ? ` · ${lawyer.oab}` : ""}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    {/* Specialty badge */}
                    {specialty && (
                      <span
                        className="specialty-badge mb-5 inline-block"
                        style={{ backgroundColor: specialty.bgColor, color: specialty.color }}
                      >
                        {specialty.title}
                      </span>
                    )}

                    <h2
                      className="text-[#0F2044] mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                        fontWeight: 700,
                      }}
                    >
                      {lawyer.name}
                    </h2>
                    <p
                      className="text-gray-400 text-sm mb-5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {lawyer.role}{lawyer.oab ? ` · ${lawyer.oab}` : ""}
                    </p>

                    <p
                      className="text-gray-600 leading-relaxed mb-8"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {lawyer.bio}
                    </p>

                    {/* Details */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <BookOpen size={16} className="text-gray-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <div
                            className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Formação
                          </div>
                          <div
                            className="text-gray-700 text-sm"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {lawyer.formation}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Briefcase size={16} className="text-gray-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <div
                            className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Experiência
                          </div>
                          <div
                            className="text-gray-700 text-sm"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {lawyer.experience}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award size={16} className="text-gray-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <div
                            className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            Áreas de Atuação
                          </div>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {lawyer.areas.map((area) => (
                              <span
                                key={area}
                                className="px-3 py-1 rounded-full text-xs font-medium"
                                style={{
                                  backgroundColor: specialty?.bgColor || "#F0F4FF",
                                  color: specialty?.color || "#1E40AF",
                                  fontFamily: "'Inter', sans-serif",
                                }}
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá ${lawyer.name}! Gostaria de agendar uma consulta sobre ${lawyer.specialty}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold btn-press hover:opacity-90 transition-all"
                        style={{ backgroundColor: "#0F2044", fontFamily: "'Inter', sans-serif" }}
                      >
                        Agendar Consulta
                        <ArrowRight size={14} />
                      </a>
                      <a
                        href={`mailto:${lawyer.email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-600 text-sm font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all btn-press"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <Mail size={14} />
                        E-mail
                      </a>
                      {lawyer.linkedin && (
                        <a
                          href={lawyer.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-600 text-sm font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all btn-press"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <Linkedin size={14} />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
