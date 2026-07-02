// MORAES & MORAIS ADVOGADOS — Blog Page
// Precision Law: SEO-optimized blog with specialty filters

import { useEffect, useState } from "react";
import { Clock, User, ArrowRight, Search } from "lucide-react";
import { blogPosts, specialties } from "@/lib/data";

export default function Blog() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = blogPosts.filter((post) => {
    const matchFilter = filter === "all" || post.specialtyId === filter;
    const matchSearch =
      search === "" ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{ backgroundColor: "#0F2044" }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-blue-400" />
              <span
                className="text-blue-300 text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Blog Jurídico
              </span>
            </div>
            <h1
              className="text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Conhecimento jurídico acessível.
            </h1>
            <p
              className="text-white/60 text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Artigos escritos pelos nossos especialistas para ajudar você a entender seus direitos.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white border-b border-gray-100 py-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all btn-press ${
                  filter === "all"
                    ? "bg-[#0F2044] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Todos
              </button>
              {specialties.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setFilter(s.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all btn-press ${
                    filter === s.id ? "text-white" : "text-gray-600 hover:opacity-80"
                  }`}
                  style={{
                    backgroundColor: filter === s.id ? s.color : s.bgColor,
                    color: filter === s.id ? "white" : s.color,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {s.shortTitle}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-20">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                Nenhum artigo encontrado.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => {
                const specialty = specialties.find((s) => s.id === post.specialtyId);
                return (
                  <article key={post.id} className="animate-on-scroll">
                    <a href={`/blog/${post.slug}`} className="group block">
                      <div className="rounded-2xl overflow-hidden card-premium border border-gray-100 bg-white h-full flex flex-col">
                        {/* Image */}
                        <div className="relative overflow-hidden" style={{ height: "200px" }}>
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {specialty && (
                            <div className="absolute top-3 left-3">
                              <span
                                className="specialty-badge"
                                style={{ backgroundColor: specialty.bgColor, color: specialty.color }}
                              >
                                {specialty.shortTitle}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <h2
                            className="text-[#0F2044] font-bold mb-3 group-hover:text-[#1E40AF] transition-colors leading-snug flex-1"
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem" }}
                          >
                            {post.title}
                          </h2>
                          <p
                            className="text-gray-500 text-sm leading-relaxed mb-5"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div
                              className="flex items-center gap-3 text-xs text-gray-400"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              <span className="flex items-center gap-1.5">
                                <User size={11} />
                                {post.author.split(" ").slice(-1)[0]}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock size={11} />
                                {post.readTime}
                              </span>
                            </div>
                            <ArrowRight
                              size={16}
                              className="text-gray-300 group-hover:text-[#1E40AF] transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
