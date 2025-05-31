import React from "react";
import { AiProcessVisualizer } from "@/components/AiProcessVisualizer";
import { TransformationVideo } from "@/components/TransformationVideo";

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 relative overflow-hidden" data-animate="true">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-display uppercase tracking-wider text-primary mb-2 px-3 py-1 border border-primary/20 rounded-full animate-fade-up">Our Process</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">How We <span className="gradient-text">Transform</span> Your Business</h2>
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-up">Our systematic approach ensures that we deliver AI solutions that are perfectly tailored to your unique business challenges.</p>
        </div>
        
        {/* AI Process Visualizer component - 4 image blocks */}
        <div className="mb-8">
          <AiProcessVisualizer />
        </div>
        
        {/* Video demonstration of business transformation - placed directly under the 4 image blocks */}
        <div className="mb-12">
          <TransformationVideo />
        </div>
      </div>
    </section>
  );
}
