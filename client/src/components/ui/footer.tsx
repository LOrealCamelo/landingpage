import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12">
                <img 
                  src="/images/xpert-ai-logo.png" 
                  alt="Xpert AI Solutions Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-medium text-xl">Xpert Ai Solutions</span>
            </a>
            <p className="text-gray-400 mb-6">Transforming businesses through cutting-edge AI automation and intelligence solutions.</p>
            <div className="flex space-x-4">
              <a href="tel:3152759160" className="text-gray-400 hover:text-primary transition">
                <i className="ri-phone-fill text-lg"></i> 315-275-9160
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Press & Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">AI Workflow Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Intelligent Customer Engagement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Predictive Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Smart Security Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Computer Vision & Recognition</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog & Insights</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Webinars & Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">AI Resources</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {currentYear} Xpert AI Solutions. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
