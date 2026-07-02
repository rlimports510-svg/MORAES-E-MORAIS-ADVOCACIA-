// MORAES & MORAIS ADVOGADOS — Blog Preview Section
// Precision Law: editorial cards, SEO-focused

import { useEffect, useRef } from "react";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts, specialties } from "@/lib/data";

export default function BlogPreviewSection() {
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

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1, 4);

  const getSpecialtyColor = (specialtyId: string) => {
    const s = specialties.find((sp) => sp.id === specialtyId);
    return { color: s?.color || "#1E40AF", bgColor: s?.bgColor || "#EFF6FF" };
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: "#1E40AF" }} />
              <span className="section-label">Blog Jurídico</span>
            </div>
            <h2
              className="text-[#0F2044]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Conhecimento jurídico acessível para todos.
            </h2>
          </div>
          <div className="animate-on-scroll">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E40AF] hover:gap-3 transition-all"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ver todos os artigos
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured Post */}
          <div className="lg:col-span-3 animate-on-scroll">
            <a href={`/blog/${featured.slug}`} className="group block">
              <div className="rounded-2xl overflow-hidden card-premium border border-gray-100">
                <div className="relative overflow-hidden" style={{ height: "260px" }}>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className="specialty-badge"
                      style={{
                        backgroundColor: getSpecialtyColor(featured.specialtyId).bgColor,
                        color: getSpecialtyColor(featured.specialtyId).color,
                      }}
                    >
                      {specialties.find((s) => s.id === featured.specialtyId)?.shortTitle}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3
                    className="text-[#0F2044] mb-3 group-hover:text-[#1E40AF] transition-colors"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {featured.title}
                  </h3>
                  <p
                    className="text-gray-500 text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="flex items-center gap-1.5">
                      <User size={12} />
                      {featured.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {featured.readTime} de leitura
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Side Posts */}
          <div className="lg:col-span-2 flex flex-col gap-4 stagger-children">
            {rest.map((post) => {
              const { color, bgColor } = getSpecialtyColor(post.specialtyId);
              return (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="animate-on-scroll group flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-gray-200 card-premium bg-white"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="specialty-badge mb-2 inline-block"
                      style={{ backgroundColor: bgColor, color }}
                    >
                      {specialties.find((s) => s.id === post.specialtyId)?.shortTitle}
                    </span>
                    <h4
                      className="text-[#0F2044] font-semibold text-sm leading-snug group-hover:text-[#1E40AF] transition-colors line-clamp-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {post.title}
                    </h4>
                    <div
                      className="flex items-center gap-2 mt-2 text-xs text-gray-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <Clock size={11} />
                      {post.readTime}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
