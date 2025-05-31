import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Define case study data structure
interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  splineScene: string;
  color: string;
}

// Sample case studies data
const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "AI-Powered Customer Support Transformation",
    client: "Global Retail Corp",
    industry: "Retail",
    challenge: "Handling over 10,000 daily customer inquiries with 24-hour response times and high operational costs.",
    solution: "Implemented an AI chatbot system with natural language processing capabilities and seamless human handoff.",
    results: [
      "Reduced response time from 24 hours to immediate",
      "Decreased support costs by 35%",
      "Improved customer satisfaction score from 7.2 to 9.1"
    ],
    splineScene: "https://prod.spline.design/NeUk9LvpHz7PRqDm/scene.splinecode",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Predictive Maintenance for Manufacturing",
    client: "Industrial Innovations Inc",
    industry: "Manufacturing",
    challenge: "Frequent unplanned downtime costing $250,000 per hour with traditional maintenance schedules.",
    solution: "Deployed IoT sensors and an AI prediction system to forecast equipment failures before they occur.",
    results: [
      "Reduced unplanned downtime by 78%",
      "Annual savings of $3.2 million",
      "Extended equipment lifespan by 40%"
    ],
    splineScene: "https://prod.spline.design/6Wq3dkiUvMs8ZLKx/scene.splinecode",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    title: "Smart Energy Management System",
    client: "EcoBuildings Ltd",
    industry: "Real Estate",
    challenge: "High energy costs and inefficient usage patterns across a portfolio of 50+ commercial buildings.",
    solution: "Implemented an AI-driven energy management system with real-time monitoring and automated adjustments.",
    results: [
      "Reduced energy consumption by 42%",
      "Annual cost savings of $1.8 million",
      "Decreased carbon footprint by 3,600 tons annually"
    ],
    splineScene: "https://prod.spline.design/jNgMpE4HzxF4aG2i/scene.splinecode",
    color: "from-green-500 to-teal-600"
  }
];

export function CaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy>(caseStudiesData[0]);

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden" id="case-studies">
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-purple-900/10 to-transparent opacity-70"></div>
      <div className="absolute top-0 left-0 w-2/3 h-full" style={{ background: 'radial-gradient(circle at 10% 50%, rgba(50, 50, 180, 0.05), transparent 50%)' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore how our AI solutions have transformed businesses across industries, delivering measurable results and driving innovation.
          </p>
        </div>
        
        {/* Case study tabs navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudiesData.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveStudy(study)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeStudy.id === study.id
                  ? `bg-gradient-to-r ${study.color} text-white shadow-lg`
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
              }`}
            >
              {study.client}
            </button>
          ))}
        </div>
        
        {/* Active case study content */}
        <motion.div
          key={activeStudy.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
              {activeStudy.title}
            </h3>
            <div className="mb-4">
              <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${activeStudy.color} inline-block`}>
                {activeStudy.industry}
              </span>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-200">The Challenge</h4>
                <p className="text-gray-400">{activeStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-200">Our Solution</h4>
                <p className="text-gray-400">{activeStudy.solution}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-200">Key Results</h4>
                <ul className="space-y-2">
                  {activeStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`h-6 w-6 rounded-full bg-gradient-to-r ${activeStudy.color} flex-shrink-0 flex items-center justify-center mr-3`}>✓</span>
                      <span className="text-gray-400">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Case Study Visualization - Replaced 3D with gradient image */}
          <div className="order-1 lg:order-2">
            <Card className="w-full aspect-square rounded-lg overflow-hidden bg-dark-800/50 backdrop-blur-sm">
              <div 
                className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${activeStudy.color} p-8`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-80">
                    {activeStudy.industry === "Retail" && "🛒"}
                    {activeStudy.industry === "Manufacturing" && "🏭"}
                    {activeStudy.industry === "Healthcare" && "🏥"}
                    {activeStudy.industry === "Financial Services" && "💰"}
                    {activeStudy.industry === "Energy" && "⚡"}
                    {!["Retail", "Manufacturing", "Healthcare", "Financial Services", "Energy"].includes(activeStudy.industry) && "🚀"}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{activeStudy.client}</h4>
                  <p className="text-white/80 font-medium">{activeStudy.industry}</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary font-medium text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
          >
            <span>Start Your Success Story</span>
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}