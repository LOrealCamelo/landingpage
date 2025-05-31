import React, { useEffect, useRef } from "react";
import { HeroSection } from "@/components/sections/hero-section";


import { WorkflowSection } from "@/components/sections/workflow-section";

import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ConsultationSection } from "@/components/sections/consultation-section";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SplineSceneBasic } from "@/components/ui/demo";

import { AiTeamSection } from "@/components/AiTeamSection";
import { AgentsSection } from "@/components/AgentsSection";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up animations for sections
    if (!mainRef.current) return;
    
    const sections = mainRef.current.querySelectorAll('section[data-animate]');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll('.animate-fade-up'),
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          }
        }
      );
    });

    // Set up typewriter effect for hero section
    const heroText = document.querySelector('.blinking-cursor');
    if (heroText) {
      const text = heroText.textContent || "";
      heroText.textContent = "";
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          heroText.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 1000);
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="bg-dark-900 text-white overflow-x-hidden">

      <Navbar />
      <HeroSection />
      <AgentsSection />
      <WorkflowSection />
      <AiTeamSection />
      <ConsultationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      {/* Fixed Logo in the Bottom Left */}
      <div className="fixed bottom-4 left-4 z-50 w-16 h-16 md:w-24 md:h-24">
        <img 
          src="/images/xpert-ai-logo.png" 
          alt="Xpert AI Solutions Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
