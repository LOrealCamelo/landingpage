import React from "react";
import { ExpertiseCanvas } from "@/components/canvas/expertise-canvas";

export function ExpertiseSection() {
  return (
    <section className="relative py-20 bg-dark-900 overflow-hidden" id="expertise" data-animate="true">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900"></div>
      <ExpertiseCanvas />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-sm font-display uppercase tracking-wider text-primary mb-2 animate-fade-up">Our Technology</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-up">Advanced AI <span className="gradient-text">Expertise</span></h2>
            <p className="text-gray-300 mb-8 animate-fade-up">Our team of AI specialists leverages cutting-edge technologies to build solutions that adapt, learn, and grow with your business needs.</p>
            
            <div className="space-y-6">
              <div className="animate-fade-up">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <i className="ri-code-s-slash-line text-xl text-primary"></i>
                  </div>
                  <h3 className="font-display font-medium text-lg">Machine Learning Models</h3>
                </div>
                <div className="pl-13">
                  <p className="text-gray-400 text-sm">Custom-trained algorithms that evolve and improve with each interaction and data point.</p>
                </div>
              </div>
              
              <div className="animate-fade-up">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mr-3">
                    <i className="ri-brain-line text-xl text-secondary"></i>
                  </div>
                  <h3 className="font-display font-medium text-lg">Deep Neural Networks</h3>
                </div>
                <div className="pl-13">
                  <p className="text-gray-400 text-sm">Multi-layered neural architectures that recognize complex patterns and relationships in data.</p>
                </div>
              </div>
              
              <div className="animate-fade-up">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mr-3">
                    <i className="ri-chat-voice-line text-xl text-amber-500"></i>
                  </div>
                  <h3 className="font-display font-medium text-lg">Natural Language Processing</h3>
                </div>
                <div className="pl-13">
                  <p className="text-gray-400 text-sm">Language understanding capabilities that interpret and generate human-like text with contextual awareness.</p>
                </div>
              </div>
              
              <div className="animate-fade-up">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-3">
                    <i className="ri-dashboard-3-line text-xl text-emerald-500"></i>
                  </div>
                  <h3 className="font-display font-medium text-lg">Reinforcement Learning</h3>
                </div>
                <div className="pl-13">
                  <p className="text-gray-400 text-sm">Self-improving systems that optimize actions based on continuous feedback and rewards.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 h-80 md:h-96 lg:h-[500px] relative">
            {/* This will be populated by the ExpertiseCanvas component */}
            <div id="tech-model" className="w-full h-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
