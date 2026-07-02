// MORAES & MORAIS ADVOGADOS — Home Page
// Precision Law: full landing page with all sections

import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ContactSection from "@/components/sections/ContactSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";

export default function Home() {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <HeroSection />
      <SpecialtiesSection />
      <DifferentialsSection />
      <SocialProofSection />
      <BlogPreviewSection />
      <ContactSection />
    </main>
  );
}
