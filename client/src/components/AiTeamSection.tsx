import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/section-header";

export function AiTeamSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="ai-team">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <SectionHeader
            badge="Our Process"
            title={<>Meet Your <span className="gradient-text">New AI Team</span></>}
            description={<>Expert Level AI employees with <span className="font-bold text-primary">UNLIMITED</span> knowledge, that will automate, and transform your business immediately!</>}
            centered={true}
          />
        </div>
        
        {/* AI Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Marketing Genius */}
          <motion.div
            className="bg-dark-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-animate="true"
          >
            <div className="h-40 flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/agent-icons/ad-background.svg" 
                alt="AI Marketing Genius"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">AI Marketing Genius</h3>
              <p className="text-gray-300 font-medium mb-4">Your 24/7 digital marketing workforce</p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Composes email campaigns and handles responses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Creates and schedules social media posts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Custom image creation for your social media posts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Document processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Task automation & workflows</span>
                </li>
              </ul>
              
              <div className="mt-auto">
                <div className="text-3xl font-bold text-white mb-1">One time set up fee</div>
                <div className="text-lg font-semibold text-red-400 line-through">vs $75k/year & up human assistant</div>
                <a href="#contact" className="w-full mt-4 bg-blue-600 py-3 rounded-md font-semibold hover:shadow-lg transition block text-center">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* AI Voice Customer Service Agent */}
          <motion.div
            className="bg-dark-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            data-animate="true"
          >
            <div className="h-40 flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/agent-icons/headset-background.svg" 
                alt="AI Voice Customer Service Agent"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">AI Voice Customer Service Agent</h3>
              <p className="text-gray-300 font-medium mb-4">Never miss a customer call again</p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>24/7 phone answering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Inbound and outbound sales calls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Customer service & support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Calendar scheduling & booking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Appointment booking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Lead qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Order taking & processing</span>
                </li>
              </ul>
              
              <div className="mt-auto">
                <div className="text-3xl font-bold text-white mb-1">One time setup fee</div>
                <div className="text-lg font-semibold text-red-400 line-through">vs $45k/year and up receptionist</div>
                <a href="#contact" className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-md font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition block text-center">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* AI Lead Generator */}
          <motion.div
            className="bg-dark-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            data-animate="true"
          >
            <div className="h-40 flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/agent-icons/search-background.svg" 
                alt="AI Sales Force Lead Generator"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-green-400">AI Sales Force Lead Generator</h3>
              <p className="text-gray-300 font-medium mb-4">Your sales team's best friend</p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Lead research & prospecting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Advanced Web Scraping functions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Automated outreach campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Lead scoring & qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Follow-up automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>CRM integration & updates</span>
                </li>
              </ul>
              
              <div className="mt-auto">
                <div className="text-3xl font-bold text-white mb-1">One time set up fee</div>
                <div className="text-lg font-semibold text-red-400 line-through">vs $100k/year and up sales rep</div>
                <a href="#contact" className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-400 py-3 rounded-md font-semibold hover:shadow-lg hover:shadow-green-500/20 transition block text-center">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Top Notch Marketing Agent */}
          <motion.div
            className="bg-dark-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            data-animate="true"
          >
            <div className="bg-gradient-to-r from-purple-600/30 to-pink-500/30 p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-purple-300">Top Notch Marketing Agent</h3>
                  <p className="text-gray-200 font-medium text-lg">Advanced AI marketing suite for enterprise businesses</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="bg-dark-800/50 p-4 rounded-lg inline-block">
                    <div className="text-4xl font-bold text-white mb-1">One time set up fee</div>
                    <div className="text-lg font-semibold text-red-400 line-through">vs $120k/year marketing team</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Content Creation</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>SEO-optimized blog articles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Social media content calendars</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Email marketing campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Video script generation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Market Intelligence</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Competitor analysis reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Market trend monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Consumer sentiment analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Industry-specific insights</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Campaign Management</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Multi-channel campaign orchestration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Performance analytics & reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>A/B testing & optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>ROI tracking & forecasting</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition inline-block">
                  Schedule a Demo
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Complete AI Team Bundle */}
          <motion.div
            className="bg-dark-800/80 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition lg:col-span-3 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            data-animate="true"
          >
            {/* "Best Value" banner */}
            <div className="absolute top-0 right-0">
              <div className="bg-amber-500 text-dark-900 px-4 py-1 font-bold text-sm transform rotate-0 origin-bottom-right">
                BEST VALUE
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-500/30 to-yellow-400/30 p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-amber-300">Complete AI Team Bundle</h3>
                  <p className="text-gray-200 font-medium text-lg">Get all 4 AI employees at our best value!</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <div className="bg-dark-800/50 p-4 rounded-lg inline-block">
                    <div className="text-4xl font-bold text-white mb-1">One time set up fee</div>
                    <div className="text-lg font-semibold text-amber-400">vs $250k+/year human team</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-amber-300">Marketing Genius</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Email campaign automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Social media content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Document processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Task automation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-amber-300">Voice Customer Service</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>24/7 phone answering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Calendar scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Order processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Lead qualification</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-amber-300">Lead Generator</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Lead research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Outreach campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Follow-up automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>CRM integration</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-amber-300">Top Notch Marketing Ai Agent</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>SEO content creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Market intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Campaign management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      <span>Performance analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center bg-dark-900/50 mt-6 p-4 rounded-lg">
                <p className="text-amber-300 font-semibold mb-4">Exclusive Bundle Benefits:</p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-dark-800/50 p-3 rounded">
                    <i className="ri-rocket-line text-2xl text-amber-500 mb-2"></i>
                    <p className="text-sm">Priority Setup &amp; Onboarding</p>
                  </div>
                  <div className="bg-dark-800/50 p-3 rounded">
                    <i className="ri-customer-service-fill text-2xl text-amber-500 mb-2"></i>
                    <p className="text-sm">Dedicated Support Manager</p>
                  </div>
                  <div className="bg-dark-800/50 p-3 rounded">
                    <i className="ri-24-hours-line text-2xl text-amber-500 mb-2"></i>
                    <p className="text-sm">Unlimited Monthly Updates</p>
                  </div>
                </div>
                <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-md font-bold text-xl text-dark-900 hover:shadow-lg hover:shadow-amber-500/30 transition">
                  Get Your Complete AI Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm text-gray-400 mt-4">
            All AI employees come with comprehensive setup, training, and 24/7 support.
            <br/>Contact us for custom enterprise solutions and special industry packages.
          </p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block mt-6 border border-primary/30 bg-primary/5 hover:bg-primary/10 px-6 py-2 rounded-full font-medium text-center text-primary transition"
          >
            Need a custom AI solution? Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
}