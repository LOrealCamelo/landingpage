import React from 'react';
import { motion } from 'framer-motion';

export function ConsultationSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="consultation">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-dark-800/90 to-dark-950/90 rounded-2xl overflow-hidden shadow-2xl">
          <motion.div 
            className="p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Transform Your Business with AI Employees
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Book a free consultation and we'll show you exactly how AI employees can transform your business operations, reduce costs, and drive growth.
                </p>
                
                <div className="bg-dark-900/70 rounded-xl p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-amber-400 text-2xl mr-2">🎁</span>
                    <h3 className="text-xl font-bold text-amber-400">Limited Time Bonus</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      <span>Free business automation audit <span className="text-amber-400 text-sm">($500 value)</span></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      <span>30-day money-back guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      <span>Free lifetime support & training</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 flex items-center">
                  <span className="text-red-400 mr-2">⏰</span>
                  <p className="text-sm text-red-300">
                    <strong>Only 10 consultation spots available this week</strong>
                  </p>
                </div>
              </div>
              
              <div className="bg-dark-800/80 rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-center text-white">
                  Book Your Free Consultation
                </h3>
                
                <div className="space-y-6 text-center">
                  <p className="text-lg text-gray-200">
                    Click the button below to schedule your free consultation with our AI experts.
                  </p>
                  
                  <a 
                    href="#contact" 
                    className="w-full bg-gradient-to-r from-primary to-secondary py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition mt-4 flex items-center justify-center"
                  >
                    <span className="mr-2">📅</span>
                    Book Free Consultation Now
                  </a>
                </div>
                
                <p className="text-center text-sm text-gray-400 mt-4">
                  No obligation. Your information is kept confidential.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}