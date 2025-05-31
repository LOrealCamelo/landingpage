
import React from 'react';
import { AnimatedCounter } from './animated-counter';

interface MetricCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  suffix = '', 
  prefix = '', 
  description, 
  icon, 
  className = "" 
}: MetricCardProps) {
  return (
    <div className={`p-6 bg-dark-800/80 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-300">{title}</h3>
        {icon && (
          <div className="text-primary">
            {icon}
          </div>
        )}
      </div>
      
      <div className="text-3xl font-bold text-white mb-2">
        <AnimatedCounter end={value} prefix={prefix} suffix={suffix} />
      </div>
      
      {description && (
        <p className="text-sm text-gray-400">{description}</p>
      )}
    </div>
  );
}
