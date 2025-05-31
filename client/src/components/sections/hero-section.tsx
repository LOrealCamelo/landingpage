import React from "react";
import { HeroCanvas } from "@/components/canvas/hero-canvas";
import { HeroLayout } from "@/components/HeroLayout";


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden" id="hero" data-animate="true">
      <HeroCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-900/90"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="text-sm font-display uppercase tracking-wider text-primary mb-2 animate-fade-up">Custom Business Automation</div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-fade-up">
            <span className="gradient-text hero-text-glow">Let AI</span> Do the Work! <br /> 
            <span>We handle everything else for you! </span>
          </h1>
          
          <HeroLayout />
          
          <div className="bg-dark-800/60 backdrop-blur-sm rounded-lg p-6 mb-6 animate-fade-up">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-white text-center">Tired of the Hiring Nightmare? Ready to Stop Hiring and Start AI-ing?</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-dark-900/80 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-red-400 mb-3">Traditional Hiring</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Weeks of job posting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Endless interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Training time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Sick days & vacations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>$40k+ yearly salary</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-900/80 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-primary mb-3">AI Hiring</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>We train for you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Works 24/7/365</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Never gets sick</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Doesn't need a salary or benefits package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>One-time setup fee & low monthly maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg border-2 border-secondary">
              <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/E71BGF2ET_4" 
                  title="AI Agent Demo Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
            
            <div className="text-center mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
              <div className="inline-block text-sm font-display uppercase tracking-wider text-primary mb-2 px-3 py-1 border border-primary/20 rounded-full animate-fade-up">Our Process</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">How We <span className="gradient-text">Transform</span> Your Business</h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up">
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-full font-medium text-center hover:shadow-lg hover:shadow-primary/30 transition"
            >
              Explore Services
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-gray-600 bg-dark-800/50 px-8 py-3 rounded-full font-medium text-center hover:border-primary transition"
            >
              Get in Touch
            </a>
          </div>
          

        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <svg 
          className="h-6 w-6 text-primary animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
