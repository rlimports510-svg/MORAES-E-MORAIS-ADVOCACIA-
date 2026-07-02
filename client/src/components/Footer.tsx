// MORAES & MORAIS ADVOGADOS — Footer Premium
// Precision Law: dark navy, editorial layout

import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook } from "lucide-react";
import { ADDRESS, PHONE_NUMBER, EMAIL, WORKING_HOURS, WHATSAPP_NUMBER } from "@/lib/data";
import { specialties } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2044" }} className="text-white">
      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Brand Logo Badge */}
              <img
                src="/logo.png"
                alt="Moraes & Morais Advogados"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <div
                  className="font-bold text-sm tracking-wide text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  MORAES & MORAIS
                </div>
                <div className="text-white/50 text-xs tracking-widest uppercase" style={{ fontSize: "0.6rem" }}>
                  Advogados
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Especialistas em soluções jurídicas estratégicas para pessoas e empresas. Cada caso merece atenção especializada.
            </p>

          </div>

          {/* Specialties */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Especialidades
            </h4>
            <ul className="space-y-3">
              {specialties.map((s) => (
                <li key={s.id}>
                  <a
                    href={`/especialidade/${s.slug}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "/" },
                { label: "Nossa Equipe", href: "/equipe" },
                { label: "Blog Jurídico", href: "/blog" },
                { label: "Diferenciais", href: "/#diferenciais" },
                { label: "Agendar Consulta", href: "/#contato" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Moraes & Morais Advogados. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            OAB/SP — Advocacia responsável e ética
          </p>
        </div>
      </div>
    </footer>
  );
}
