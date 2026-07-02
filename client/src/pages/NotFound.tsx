// MORAES & MORAIS ADVOGADOS — 404 Page
// Precision Law: branded not found page

import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="container text-center max-w-lg py-20">
        {/* Logo mark */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
          style={{ backgroundColor: "#0F2044" }}
        >
          <span
            className="text-white font-bold text-2xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            M
          </span>
        </div>

        <div
          className="text-[#0F2044] font-bold mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "5rem",
            lineHeight: 1,
          }}
        >
          404
        </div>

        <h1
          className="text-[#0F2044] mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.75rem",
            fontWeight: 700,
          }}
        >
          Página não encontrada
        </h1>

        <p
          className="text-gray-500 mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A página que você está procurando não existe ou foi movida. Mas nossos especialistas estão prontos para ajudar com sua questão jurídica.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold btn-press hover:opacity-90 transition-all"
            style={{ backgroundColor: "#0F2044", fontFamily: "'Inter', sans-serif" }}
          >
            <Home size={16} />
            Voltar ao Início
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-all btn-press"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ArrowLeft size={16} />
            Página Anterior
          </button>
        </div>
      </div>
    </main>
  );
}
