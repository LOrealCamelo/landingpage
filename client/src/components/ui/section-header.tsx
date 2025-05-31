
import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ 
  badge, 
  title, 
  description, 
  centered = false, 
  className = "" 
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div className={`inline-block text-sm font-display uppercase tracking-wider text-primary mb-2 px-3 py-1 border border-primary/20 rounded-full animate-fade-up ${centered ? 'mx-auto' : ''}`}>
          {badge}
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">
        {title}
      </h2>
      
      {description && (
        <p className={`text-lg text-gray-300 animate-fade-up ${centered ? 'max-w-3xl mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
