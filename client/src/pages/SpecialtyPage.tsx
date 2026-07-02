// MORAES & MORAIS ADVOGADOS — Specialty Landing Page
// Precision Law: individual specialty page with full structure

import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Send, ArrowLeft } from "lucide-react";
import { specialties, lawyers, blogPosts, WHATSAPP_NUMBER } from "@/lib/data";

export default function SpecialtyPage() {
  const params = useParams<{ slug: string }>();
  const specialty = specialties.find((s) => s.slug === params.slug);
  const lawyer = specialty ? lawyers.find((l) => l.id === specialty.lawyerId) : null;
  const relatedPosts = specialty ? blogPosts.filter((p) => p.specialtyId === specialty.id) : [];

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", description: "" });
  const [submitted, setSubmitted] = useState(false);

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
  }, [params.slug]);

  if (!specialty || !lawyer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Especialidade não encontrada
          </h1>
          <a href="/" className="text-blue-600 hover:underline">Voltar ao início</a>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá ${lawyer.name}! Meu nome é ${formData.name}.\n\nSobre ${specialty.title}:\n${formData.description}\n\nContato: ${formData.phone} | ${formData.email}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section
        className="pt-28 pb-16 lg:pt-36 lg:pb-20"
        style={{ backgroundColor: "#0F2044" }}
      >
        <div className="container">
          <a
            href="/#especialidades"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ArrowLeft size={14} />
            Todas as especialidades
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span
                className="specialty-badge mb-5 inline-block"
                style={{ backgroundColor: specialty.bgColor, color: specialty.color }}
              >
                {specialty.title}
              </span>
              <h1
                className="text-white mb-5"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                {specialty.title}
              </h1>
              <p
                className="text-white/60 text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {specialty.longDescription}
              </p>
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0F2044] font-semibold rounded-full hover:bg-blue-50 transition-all btn-press"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Falar com o Especialista
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Lawyer Card */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="rounded-2xl p-6 max-w-sm w-full"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <img
                  src={lawyer.photoFull}
                  alt={lawyer.name}
                  className="w-full rounded-xl object-cover object-top mb-5"
                  style={{ height: "280px" }}
                />
                <div>
                  <div
                    className="text-white font-bold text-xl mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {lawyer.name}
                  </div>
                  <div
                    className="text-white/50 text-sm mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {lawyer.oab ? `${lawyer.oab} · ` : ""}{lawyer.experience}
                  </div>
                  <div
                    className="text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {lawyer.formation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div className="max-w-2xl mb-12 animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: specialty.color }} />
              <span className="section-label" style={{ color: specialty.color }}>Problemas Mais Comuns</span>
            </div>
            <h2
              className="text-[#0F2044]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              Reconhece alguma dessas situações?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {specialty.problems.map((problem) => (
              <div
                key={problem.title}
                className="animate-on-scroll card-premium bg-white rounded-2xl p-7 border border-gray-100"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: specialty.bgColor }}
                >
                  <CheckCircle size={16} style={{ color: specialty.color }} />
                </div>
                <h3
                  className="text-[#0F2044] font-bold mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
                >
                  {problem.title}
                </h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: specialty.color }} />
                <span className="section-label" style={{ color: specialty.color }}>Como Atuamos</span>
              </div>
              <h2
                className="text-[#0F2044] mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                }}
              >
                Processo claro, resultados concretos.
              </h2>
              <p
                className="text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Nossa metodologia é estruturada para maximizar as chances de sucesso em cada caso, com comunicação transparente em cada etapa.
              </p>
            </div>

            <div className="space-y-5 stagger-children">
              {specialty.howWeWork.map((step, index) => (
                <div
                  key={index}
                  className="animate-on-scroll flex items-start gap-4"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: specialty.color }}
                  >
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container max-w-3xl">
          <div className="animate-on-scroll mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: specialty.color }} />
              <span className="section-label" style={{ color: specialty.color }}>Perguntas Frequentes</span>
            </div>
            <h2
              className="text-[#0F2044]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              Dúvidas frequentes sobre {specialty.title}
            </h2>
          </div>

          <div className="space-y-3">
            {specialty.faq.map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full px-7 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span
                    className="text-[#0F2044] font-semibold pr-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-7 pb-5">
                    <p
                      className="text-gray-500 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="animate-on-scroll mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: specialty.color }} />
                <span className="section-label" style={{ color: specialty.color }}>Conteúdos Relacionados</span>
              </div>
              <h2
                className="text-[#0F2044]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                }}
              >
                Artigos sobre {specialty.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
              {relatedPosts.map((post) => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="animate-on-scroll group flex gap-5 p-5 rounded-2xl border border-gray-100 hover:border-gray-200 card-premium bg-white"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <h4
                      className="text-[#0F2044] font-semibold mb-2 group-hover:text-[#1E40AF] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {post.title}
                    </h4>
                    <p
                      className="text-gray-400 text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {post.readTime} de leitura
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section id="formulario" className="py-16 lg:py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container max-w-2xl">
          <div className="animate-on-scroll text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: specialty.color }} />
              <span className="section-label" style={{ color: specialty.color }}>Atendimento</span>
              <div className="w-8 h-px" style={{ backgroundColor: specialty.color }} />
            </div>
            <h2
              className="text-[#0F2044] mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              Fale diretamente com {lawyer.name.split(" ")[1]}
            </h2>
            <p
              className="text-gray-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Preencha o formulário e o especialista em {specialty.title} entrará em contato.
            </p>
          </div>

          <div className="animate-on-scroll bg-white rounded-2xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
                <h3
                  className="text-[#0F2044] text-xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Mensagem enviada!
                </h3>
                <p className="text-gray-500 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {lawyer.name} receberá sua mensagem e entrará em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Descreva seu caso *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))}
                    placeholder="Conte brevemente sobre sua situação..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold btn-press hover:opacity-90 transition-all"
                  style={{ backgroundColor: specialty.color, fontFamily: "'Inter', sans-serif" }}
                >
                  <Send size={16} />
                  Enviar para {lawyer.name.split(" ")[1]}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
