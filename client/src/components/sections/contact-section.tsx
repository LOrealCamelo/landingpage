import React from "react";
import { InquiryForm } from "@/components/ui/inquiry-form";
import { ContactCanvas } from "@/components/canvas/contact-canvas";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden" data-animate="true">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/80 to-dark-900"></div>
      <ContactCanvas />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="text-sm font-display uppercase tracking-wider text-primary mb-2">Get In Touch</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to <span className="gradient-text">Transform</span> Your Business?</h2>
            <p className="text-gray-300 mb-8">Contact us today to discuss how our AI solutions can help you achieve your business goals. Our experts are ready to design a customized approach for your unique challenges.</p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1 mr-4">
                  <i className="ri-map-pin-line text-xl text-primary"></i>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Our Location</h3>
                  <p className="text-gray-400 text-sm">350 Innovation Drive, Suite 200<br/>San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mt-1 mr-4">
                  <i className="ri-mail-line text-xl text-secondary"></i>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-gray-400 text-sm">info@xpertaisolutions.com<br/>support@xpertaisolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mt-1 mr-4">
                  <i className="ri-phone-line text-xl text-amber-500"></i>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-gray-400 text-sm">+1 (315) 275-9160</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center border border-gray-700 hover:border-primary transition">
                <i className="ri-linkedin-fill text-gray-400 hover:text-primary transition"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center border border-gray-700 hover:border-primary transition">
                <i className="ri-twitter-fill text-gray-400 hover:text-primary transition"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center border border-gray-700 hover:border-primary transition">
                <i className="ri-facebook-fill text-gray-400 hover:text-primary transition"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center border border-gray-700 hover:border-primary transition">
                <i className="ri-instagram-fill text-gray-400 hover:text-primary transition"></i>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-up">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
