// MORAES & MORAIS ADVOGADOS — Blog Post Page
// Precision Law: editorial article layout

import { useEffect } from "react";
import { useParams } from "wouter";
import { Clock, User, ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { blogPosts, specialties, lawyers, WHATSAPP_NUMBER } from "@/lib/data";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);
  const specialty = post ? specialties.find((s) => s.id === post.specialtyId) : null;
  const lawyer = post ? lawyers.find((l) => l.id === post.authorId) : null;
  const related = post ? blogPosts.filter((p) => p.specialtyId === post.specialtyId && p.id !== post.id).slice(0, 2) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Artigo não encontrado
          </h1>
          <a href="/blog" className="text-blue-600 hover:underline">Voltar ao Blog</a>
        </div>
      </div>
    );
  }

  // Generate article content from excerpt
  const articleContent = `
${post.excerpt}

Este é um tema de grande relevância para quem enfrenta situações similares. Entender seus direitos é o primeiro passo para tomar as decisões corretas.

**O que você precisa saber**

Muitas pessoas não sabem que têm direitos específicos nessa situação. A legislação brasileira prevê mecanismos de proteção que, quando utilizados corretamente, podem fazer toda a diferença no resultado do seu caso.

**Como agir na prática**

O mais importante é agir rapidamente e com orientação jurídica especializada. Cada caso tem suas particularidades, e uma estratégia personalizada é fundamental para obter o melhor resultado.

Documentar tudo é essencial. Guarde todos os comprovantes, contratos, comunicações e qualquer evidência relacionada ao seu caso.

**Quando procurar um advogado**

Se você se identificou com alguma das situações descritas neste artigo, não espere a situação piorar. Consulte um especialista o quanto antes para entender suas opções e os prazos legais aplicáveis ao seu caso.

Nossa equipe está disponível para uma consulta inicial onde analisaremos sua situação e apresentaremos as melhores estratégias disponíveis.
  `.trim();

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section
        className="pt-28 pb-12 lg:pt-36 lg:pb-16"
        style={{ backgroundColor: "#0F2044" }}
      >
        <div className="container max-w-4xl">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ArrowLeft size={14} />
            Voltar ao Blog
          </a>

          {specialty && (
            <span
              className="specialty-badge mb-5 inline-block"
              style={{ backgroundColor: specialty.bgColor, color: specialty.color }}
            >
              {specialty.title}
            </span>
          )}

          <h1
            className="text-white mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="flex items-center gap-2">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {post.readTime} de leitura
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-2xl object-cover mb-10"
                style={{ height: "360px" }}
              />

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {articleContent.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h3
                        key={index}
                        className="text-[#0F2044] font-bold text-xl mt-8 mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {paragraph.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-600 leading-relaxed mb-5">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Card */}
              {lawyer && (
                <div
                  className="rounded-2xl p-6 border border-gray-100 mb-6 sticky top-24"
                >
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Escrito por
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={lawyer.photo}
                      alt={lawyer.name}
                      className="w-14 h-14 rounded-full object-cover object-top"
                    />
                    <div>
                      <div
                        className="text-[#0F2044] font-bold"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {lawyer.name}
                      </div>
                      <div className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {lawyer.specialty}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {lawyer.bio.substring(0, 120)}...
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá ${lawyer.name}! Li seu artigo "${post.title}" e gostaria de uma consulta.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-semibold btn-press hover:opacity-90 transition-all"
                    style={{ backgroundColor: "#0F2044", fontFamily: "'Inter', sans-serif" }}
                  >
                    Agendar Consulta
                    <ArrowRight size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-12 lg:py-16 border-t border-gray-100">
          <div className="container">
            <h3
              className="text-[#0F2044] font-bold text-2xl mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Artigos relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <a
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-gray-200 card-premium"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <h4
                      className="text-[#0F2044] font-semibold text-sm leading-snug group-hover:text-[#1E40AF] transition-colors mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {p.title}
                    </h4>
                    <span className="text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {p.readTime} de leitura
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
