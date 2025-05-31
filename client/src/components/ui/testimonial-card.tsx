import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  gradientColor: "primary" | "secondary" | "accent";
}

export function TestimonialCard({
  quote,
  name,
  position,
  company,
  gradientColor,
}: TestimonialCardProps) {
  const getGradientClass = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "accent":
        return "text-amber-500";
      default:
        return "text-primary";
    }
  };

  const getBgClass = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/20";
      case "secondary":
        return "bg-secondary/20";
      case "accent":
        return "bg-amber-500/20";
      default:
        return "bg-primary/20";
    }
  };

  return (
    <div className="bg-dark-800 rounded-xl p-6 relative gradient-border">
      <div className={`${getGradientClass(gradientColor)} text-5xl opacity-20 absolute top-4 left-4`}>
        <i className="ri-double-quotes-l"></i>
      </div>
      <div className="relative z-10">
        <p className="text-gray-300 mb-6">{quote}</p>
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-full ${getBgClass(gradientColor)} flex items-center justify-center mr-4`}>
            <span className={`${getGradientClass(gradientColor)} font-medium`}>
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-gray-400 text-sm">{position}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
