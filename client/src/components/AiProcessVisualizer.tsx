import React from 'react';
import { motion } from 'framer-motion';

// Process images
const processImages = {
  discovery: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  design: '/images/process/ai-solution-design.jpg',
  implementation: '/images/process/ai-implementation.jpg',
  optimization: '/images/process/ai-optimization.jpg'
};

interface ProcessCardProps {
  title: string;
  description: string;
  image: string;
  step: number;
  color: string;
  delay: number;
}

function ProcessCard({ title, description, image, step, color, delay }: ProcessCardProps) {
  return (
    <motion.div 
      className="bg-dark-800 rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
        <div className={`absolute top-4 left-4 w-8 h-8 rounded-full bg-${color} flex items-center justify-center`}>
          <span className="text-white font-bold">{step}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

export function AiProcessVisualizer() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProcessCard
          title="Discovery & Analysis"
          description="We analyze your business needs and identify optimal AI integration points for maximum impact."
          image={processImages.discovery}
          step={1}
          color="primary"
          delay={0}
        />
        <ProcessCard
          title="Solution Design"
          description="Our team designs custom AI solutions tailored specifically to your business requirements."
          image={processImages.design}
          step={2}
          color="secondary"
          delay={1}
        />
        <ProcessCard
          title="Implementation"
          description="We seamlessly integrate AI systems with your existing workflows and train your team."
          image={processImages.implementation}
          step={3}
          color="amber-500"
          delay={2}
        />
        <ProcessCard
          title="Optimization"
          description="Continuous monitoring and refinement ensures your AI solutions evolve with your business."
          image={processImages.optimization}
          step={4}
          color="emerald-500"
          delay={3}
        />
      </div>
    </div>
  );
}