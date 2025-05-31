
import React from 'react';

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  className?: string;
}

export function ProcessCard({ icon, title, description, step, className = "" }: ProcessCardProps) {
  return (
    <div className={`relative p-6 bg-dark-800/80 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 ${className}`}>
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-sm font-bold">
        {step}
      </div>
      
      <div className="mb-4 text-primary">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
