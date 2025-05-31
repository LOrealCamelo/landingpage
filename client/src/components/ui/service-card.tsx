import React from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradientColor: "primary" | "secondary" | "accent" | "success";
  learnMoreLink: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  gradientColor,
  learnMoreLink,
}: ServiceCardProps) {
  const getGradientClass = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary hover:text-primary/80";
      case "secondary":
        return "text-secondary hover:text-secondary/80";
      case "accent":
        return "text-amber-500 hover:text-amber-400";
      case "success":
        return "text-emerald-500 hover:text-emerald-400";
      default:
        return "text-primary hover:text-primary/80";
    }
  };

  const getBgClass = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10";
      case "secondary":
        return "bg-secondary/10";
      case "accent":
        return "bg-amber-500/10";
      case "success":
        return "bg-emerald-500/10";
      default:
        return "bg-primary/10";
    }
  };

  const getBlurClass = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10";
      case "secondary":
        return "bg-secondary/10";
      case "accent":
        return "bg-amber-500/10";
      case "success":
        return "bg-emerald-500/10";
      default:
        return "bg-primary/10";
    }
  };

  return (
    <div className="service-card relative bg-dark-800 rounded-xl overflow-hidden gradient-border p-6 z-10">
      <div className={`absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 ${getBlurClass(gradientColor)} rounded-full filter blur-3xl`}></div>
      <div className={`w-14 h-14 rounded-lg ${getBgClass(gradientColor)} flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-5">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="text-emerald-500 mr-2 mt-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a href={learnMoreLink} className={`inline-block font-medium transition ${getGradientClass(gradientColor)}`}>
        Learn more <i className="ri-arrow-right-line align-middle ml-1"></i>
      </a>
    </div>
  );
}
