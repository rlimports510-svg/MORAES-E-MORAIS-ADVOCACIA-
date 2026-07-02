// MORAES & MORAIS ADVOGADOS — Smart Chat Widget
// Precision Law: floating chat assistant with specialty routing

import { useState } from "react";
import { MessageCircle, X, ArrowRight, ChevronRight } from "lucide-react";
import { specialties, lawyers, WHATSAPP_NUMBER } from "@/lib/data";

type Step = "idle" | "greeting" | "specialty" | "redirect";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("idle");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const handleOpen = () => {
    setOpen(true);
    setStep("greeting");
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setStep("idle"), 300);
  };

  const handleSelectSpecialty = (specialtyId: string) => {
    setSelectedSpecialty(specialtyId);
    setStep("redirect");
  };

  const handleWhatsApp = () => {
    const specialty = specialties.find((s) => s.id === selectedSpecialty);
    const lawyer = specialty ? lawyers.find((l) => l.id === specialty.lawyerId) : null;
    const message = encodeURIComponent(
      `Olá! Preciso de ajuda com ${specialty?.title || "questão jurídica"}. Podem me ajudar?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    handleClose();
  };

  const selectedSpec = specialties.find((s) => s.id === selectedSpecialty);
  const selectedLawyer = selectedSpec ? lawyers.find((l) => l.id === selectedSpec.lawyerId) : null;

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
        style={{ backgroundColor: "white", border: "1px solid #E2E8F0" }}
      >
        {/* Header */}
        <div
          className="px-5 py-4 flex items-center justify-between"
          style={{ backgroundColor: "#0F2044" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={16} className="text-white" />
            </div>
            <div>
              <div
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Moraes & Morais
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-white/60 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Online agora
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          {step === "greeting" && (
            <div>
              <div className="flex items-start gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                  style={{ backgroundColor: "#0F2044" }}
                >
                  M
                </div>
                <div
                  className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-gray-700 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Olá! Como podemos ajudar você hoje? 👋
                  <br /><br />
                  Selecione a área jurídica do seu caso para ser direcionado ao especialista certo.
                </div>
              </div>
              <button
                onClick={() => setStep("specialty")}
                className="w-full py-3 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 btn-press hover:opacity-90 transition-all"
                style={{ backgroundColor: "#1E40AF", fontFamily: "'Inter', sans-serif" }}
              >
                Ver especialidades
                <ChevronRight size={16} />
              </button>
            </div>
          )}

          {step === "specialty" && (
            <div>
              <p
                className="text-gray-500 text-xs mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Qual área melhor descreve seu caso?
              </p>
              <div className="space-y-2">
                {specialties.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectSpecialty(s.id)}
                    className="w-full text-left px-4 py-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group flex items-center justify-between"
                  >
                    <span
                      className="text-gray-700 text-sm font-medium group-hover:text-[#1E40AF]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {s.title}
                    </span>
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-[#1E40AF] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "redirect" && selectedSpec && selectedLawyer && (
            <div>
              <div className="flex items-start gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                  style={{ backgroundColor: "#0F2044" }}
                >
                  M
                </div>
                <div
                  className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-gray-700 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Perfeito! Para <strong>{selectedSpec.title}</strong>, o especialista ideal é:
                </div>
              </div>

              {/* Lawyer Card */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 mb-4">
                <img
                  src={selectedLawyer.photo}
                  alt={selectedLawyer.name}
                  className="w-12 h-12 rounded-full object-cover object-top"
                />
                <div>
                  <div
                    className="text-[#0F2044] font-semibold text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {selectedLawyer.name}
                  </div>
                  <div
                    className="text-gray-400 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {selectedLawyer.specialty}{selectedLawyer.oab ? ` · ${selectedLawyer.oab}` : ""}
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full py-3 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 btn-press hover:opacity-90 transition-all"
                style={{ backgroundColor: "#25D366", fontFamily: "'Inter', sans-serif" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar com {selectedLawyer.name.split(" ")[1]}
              </button>
              <button
                onClick={() => setStep("specialty")}
                className="w-full mt-2 py-2 text-gray-400 text-xs hover:text-gray-600 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                ← Escolher outra área
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={open ? handleClose : handleOpen}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white shadow-xl hover:shadow-2xl transition-all btn-press hover:scale-105 flex items-center justify-center"
        style={{ backgroundColor: "#0F2044" }}
        aria-label="Abrir chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
        )}
      </button>
    </>
  );
}
