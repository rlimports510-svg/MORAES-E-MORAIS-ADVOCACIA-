// MORAES & MORAIS ADVOGADOS — Navbar Premium
// Precision Law: transparent → frosted glass on scroll

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/data";

const navLinks = [
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Equipe", href: "/equipe" },
  { label: "Blog", href: "/blog" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Contato", href: "/#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              {/* Brand Logo Badge */}
              <img
                src="/logo.png"
                alt="Moraes & Morais Advogados"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span
                  className={`font-bold text-sm tracking-wide transition-colors ${
                    scrolled || !isHome ? "text-[#0F2044]" : "text-white"
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  MORAES & MORAIS
                </span>
                <span
                  className={`text-xs tracking-widest uppercase transition-colors ${
                    scrolled || !isHome ? "text-gray-400" : "text-white/70"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem" }}
                >
                  Advogados
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#1E40AF] ${
                  scrolled || !isHome ? "text-gray-600" : "text-white/90"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all btn-press hover:opacity-90 hover:shadow-lg"
              style={{
                backgroundColor: "#0F2044",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Phone size={14} />
              Falar com Especialista
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 font-medium py-2 border-b border-gray-50 hover:text-[#1E40AF] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white btn-press"
            style={{ backgroundColor: "#0F2044" }}
          >
            <Phone size={14} />
            Falar com Especialista
          </a>
        </div>
      </div>
    </header>
  );
}
