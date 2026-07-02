// MORAES & MORAIS ADVOGADOS — Social Proof Section
// Precision Law: testimonials + success cases

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Fernanda Costa",
    role: "Empresária",
    text: "O Dr. Rafael resolveu um contrato que parecia impossível de rescisão. Profissionalismo e clareza em cada etapa do processo. Recomendo sem hesitar.",
    rating: 5,
    specialty: "Direito Civil",
  },
  {
    id: 2,
    name: "Roberto Almeida",
    role: "Aposentado",
    text: "Tentei minha aposentadoria sozinho por anos. Com o Dr. Marcos, consegui em 4 meses e ainda com revisão do valor. Atendimento excepcional.",
    rating: 5,
    specialty: "Direito Previdenciário",
  },
  {
    id: 3,
    name: "Juliana Mendes",
    role: "Professora",
    text: "Fui vítima de um golpe bancário e achei que havia perdido tudo. A Dra. Ana conseguiu recuperar meu dinheiro e ainda processar o banco. Incrível.",
    rating: 5,
    specialty: "Direito Digital",
  },
  {
    id: 4,
    name: "Paulo Rodrigues",
    role: "Comerciante",
    text: "Minha conta foi bloqueada e eu não sabia o que fazer. O Dr. Carlos agiu rápido e em 48h o bloqueio foi revertido. Salvou meu negócio.",
    rating: 5,
    specialty: "Direito do Executado",
  },
  {
    id: 5,
    name: "Família Souza",
    role: "Família de assistido",
    text: "A Dra. Patrícia tratou nosso familiar com dignidade e competência. Conseguiu a progressão de regime que parecia impossível. Gratidão eterna.",
    rating: 5,
    specialty: "Remição de Pena",
  },
];

const successCases = [
  {
    area: "Direito Civil",
    title: "Rescisão contratual com indenização integral",
    description: "Cliente recuperou R$ 280.000 em contrato de prestação de serviços descumprido.",
    color: "#1E40AF",
    bgColor: "#EFF6FF",
  },
  {
    area: "Previdenciário",
    title: "Revisão de benefício com retroativo",
    description: "Segurado obteve revisão com pagamento retroativo de 5 anos de diferença.",
    color: "#7C3AED",
    bgColor: "#F5F3FF",
  },
  {
    area: "Direito Digital",
    title: "Recuperação de valores em golpe bancário",
    description: "Vítima recuperou R$ 45.000 perdidos em fraude via PIX com responsabilização do banco.",
    color: "#0891B2",
    bgColor: "#ECFEFF",
  },
];

export default function SocialProofSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#1E40AF" }} />
            <span className="section-label">Prova Social</span>
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
            Resultados que falam por si.
          </h2>
          <p
            className="text-gray-500 text-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Histórias reais de clientes que encontraram a solução jurídica que precisavam.
          </p>
        </div>

        {/* Success Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 stagger-children">
          {successCases.map((c) => (
            <div
              key={c.title}
              className="animate-on-scroll card-premium rounded-2xl p-7 border border-gray-100 bg-white"
            >
              <span
                className="specialty-badge mb-4 inline-block"
                style={{ backgroundColor: c.bgColor, color: c.color }}
              >
                {c.area}
              </span>
              <h4
                className="text-[#0F2044] font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
              >
                {c.title}
              </h4>
              <p
                className="text-gray-500 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {c.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="animate-on-scroll card-premium bg-white rounded-2xl p-7 border border-gray-100"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote size={24} className="text-gray-200" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-gray-600 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "#0F2044" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div
                    className="text-[#0F2044] font-semibold text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-gray-400 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t.role} · {t.specialty}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More testimonials row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 stagger-children">
          {testimonials.slice(3).map((t) => (
            <div
              key={t.id}
              className="animate-on-scroll card-premium bg-white rounded-2xl p-7 border border-gray-100"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p
                className="text-gray-600 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "#0F2044" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[#0F2044] font-semibold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t.name}
                  </div>
                  <div className="text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t.role} · {t.specialty}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
