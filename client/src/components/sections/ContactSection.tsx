// MORAES & MORAIS ADVOGADOS — Contact Section
// Precision Law: smart lead form with specialty routing

import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { ADDRESS, PHONE_NUMBER, EMAIL, WORKING_HOURS, WHATSAPP_NUMBER, specialties } from "@/lib/data";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "",
    description: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const selectedSpecialty = specialties.find((s) => s.id === form.specialty);
    const message = encodeURIComponent(
      `Olá! Meu nome é ${form.name}.\n\nÁrea de interesse: ${selectedSpecialty?.title || "Não especificada"}\n\nDescrição: ${form.description}\n\nContato: ${form.phone} | ${form.email}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: "#1E40AF" }} />
                <span className="section-label">Fale Conosco</span>
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
                Seu problema jurídico tem um especialista dedicado.
              </h2>
              <p
                className="text-gray-500 text-lg leading-relaxed mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Preencha o formulário e você será direcionado automaticamente para o especialista da sua área.
              </p>
            </div>



            {/* WhatsApp CTA */}
            <div className="animate-on-scroll mt-10">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl text-white font-semibold btn-press transition-all hover:opacity-90"
                style={{ backgroundColor: "#25D366", fontFamily: "'Inter', sans-serif" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Atendimento imediato pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-on-scroll">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-gray-100"
              style={{ backgroundColor: "#F8FAFC" }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} className="mx-auto mb-4 text-green-500" />
                  <h3
                    className="text-[#0F2044] text-2xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mensagem enviada!
                  </h3>
                  <p
                    className="text-gray-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Você será direcionado ao WhatsApp do especialista responsável pela sua área.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#1E40AF] text-sm font-medium hover:underline"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Área de interesse *
                    </label>
                    <select
                      name="specialty"
                      required
                      value={form.specialty}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <option value="" disabled>Selecione a área jurídica</option>
                      {specialties.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {form.specialty && (
                      <p
                        className="mt-2 text-xs text-[#1E40AF]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        ✓ Você será direcionado ao especialista em {specialties.find((s) => s.id === form.specialty)?.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Descreva seu caso *
                    </label>
                    <textarea
                      name="description"
                      required
                      value={form.description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Conte brevemente sobre sua situação..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold btn-press transition-all hover:opacity-90"
                    style={{ backgroundColor: "#0F2044", fontFamily: "'Inter', sans-serif" }}
                  >
                    <Send size={16} />
                    Especialista para resolver
                  </button>

                  <p
                    className="text-center text-xs text-gray-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Seus dados são protegidos e não serão compartilhados com terceiros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
