import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div className={`glass-effect ${isScrolled ? 'py-2' : 'py-4'} px-6 md:px-12`}>
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2" onClick={() => scrollToSection("hero")}>
            <div className="h-12 flex items-center justify-center">
              <img src="/images/xpert-ai-logo.png" alt="Xpert Ai Solutions Logo" className="h-full" />
            </div>
            <span className="font-display font-medium text-xl hidden md:inline-block">Xpert Ai Solutions</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#services" 
              className="text-gray-300 hover:text-white transition"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              Services
            </a>
            <a 
              href="#expertise" 
              className="text-gray-300 hover:text-white transition"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("expertise");
              }}
            >
              Expertise
            </a>
            <a 
              href="#workflow" 
              className="text-gray-300 hover:text-white transition"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("workflow");
              }}
            >
              Workflow
            </a>
            <a 
              href="#agents" 
              className="text-gray-300 hover:text-white transition"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("agents");
              }}
            >
              Agents
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </nav>
          
          <button 
            className="md:hidden text-2xl" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
          
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-primary to-secondary px-5 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`glass-effect py-4 px-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto flex flex-col space-y-4">
          <a 
            href="#services" 
            className="text-gray-300 hover:text-white transition py-2 border-b border-gray-700"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
          >
            Services
          </a>
          <a 
            href="#expertise" 
            className="text-gray-300 hover:text-white transition py-2 border-b border-gray-700"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("expertise");
            }}
          >
            Expertise
          </a>
          <a 
            href="#workflow" 
            className="text-gray-300 hover:text-white transition py-2 border-b border-gray-700"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("workflow");
            }}
          >
            Workflow
          </a>
          <a 
            href="#agents" 
            className="text-gray-300 hover:text-white transition py-2 border-b border-gray-700"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("agents");
            }}
          >
            Agents
          </a>
          <a 
            href="#contact" 
            className="text-gray-300 hover:text-white transition py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-primary to-secondary px-5 py-2 rounded-full font-medium text-center hover:shadow-lg hover:shadow-primary/20 transition"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
