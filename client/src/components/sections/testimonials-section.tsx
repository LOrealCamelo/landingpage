import React from "react";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden" data-animate="true">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-display uppercase tracking-wider text-primary mb-2 px-3 py-1 border border-primary/20 rounded-full animate-fade-up">Success Stories</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-up">Discover how our AI solutions have transformed businesses across industries.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up">
          {/* Testimonial 1 */}
          <TestimonialCard
            quote="Xpert AI Solutions completely transformed our customer service operations. Their AI chatbot handles 75% of inquiries automatically, resulting in faster response times and higher customer satisfaction."
            name="Thomas Clark"
            position="CTO"
            company="RetailXpress"
            gradientColor="primary"
          />
          
          {/* Testimonial 2 */}
          <TestimonialCard
            quote="The predictive analytics system they built for us has increased our supply chain efficiency by 42% and reduced costs by 28%. Their team's expertise in both AI and business processes is unmatched."
            name="Jennifer Martinez"
            position="Operations Director"
            company="LogiTech Solutions"
            gradientColor="secondary"
          />
          
          {/* Testimonial 3 */}
          <TestimonialCard
            quote="Working with Xpert AI has been a game-changer for our financial analysis capabilities. Their AI solution processes data 10x faster than our previous system and identifies patterns we never would have found."
            name="Robert Wilson"
            position="CFO"
            company="Global Finance Partners"
            gradientColor="accent"
          />
        </div>
      </div>
    </section>
  );
}
