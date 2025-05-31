import React from "react";

interface TeamCardProps {
  name: string;
  position: string;
  bio: string;
  socialLinks: { icon: string; url: string }[];
  gradientColor: "primary" | "secondary" | "accent" | "success";
}

export function TeamCard({
  name,
  position,
  bio,
  socialLinks,
  gradientColor,
}: TeamCardProps) {
  const getGradientClass = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "accent":
        return "text-amber-500";
      case "success":
        return "text-emerald-500";
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
      case "success":
        return "bg-emerald-500/20";
      default:
        return "bg-primary/20";
    }
  };

  const getIconClass = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary/50";
      case "secondary":
        return "text-secondary/50";
      case "accent":
        return "text-amber-500/50";
      case "success":
        return "text-emerald-500/50";
      default:
        return "text-primary/50";
    }
  };

  return (
    <div className="bg-dark-800 rounded-xl overflow-hidden gradient-border group">
      <div className="h-60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10"></div>
        <div className={`w-full h-full bg-gradient-to-br from-${gradientColor}/20 to-dark-800 flex items-center justify-center`}>
          <i className={`ri-user-line text-6xl ${getIconClass(gradientColor)}`}></i>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg mb-1">{name}</h3>
        <p className={`${getGradientClass(gradientColor)} text-sm mb-3`}>{position}</p>
        <p className="text-gray-400 text-sm mb-4">{bio}</p>
        <div className="flex space-x-3">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              className="text-gray-400 hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
