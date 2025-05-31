import React from "react";
import { motion } from "framer-motion";

interface AgentProps {
  name: string;
  role: string;
  imageSrc: string;
  delay: number;
  description?: string;
}


function Agent({ name, role, imageSrc, delay, description }: AgentProps) {
  return (
    <motion.div
      className="bg-dark-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-72 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1 text-white">{name}</h3>
        <p className="text-cyan-400 font-medium">{role}</p>
        {description && (
          <p className="text-gray-300 text-sm mt-2">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

export function AgentsSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="agents">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-cyan-400" data-animate="true">
            Meet Our Agents
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto" data-animate="true">
            Our AI agents are designed with cutting-edge technology to provide seamless support and exceptional service
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="/assets/aiteam2.png" 
              alt="AI Team Group Photo 1"
              className="w-full h-[400px] object-cover object-center"
            />
          </motion.div>
          
          <motion.div
            className="rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="/assets/aiteam1.png" 
              alt="AI Team Group Photo 2"
              className="w-full h-[400px] object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Agent 
            name="Maya"
            role="AI Marketing Genius"
            description="Custom image creation for your social media posts"
            imageSrc="/assets/agents/aiagent8.png"
            delay={0}
          />
          
          <Agent 
            name="Alex"
            role="AI Voice Customer Service Agent"
            description="Inbound and outbound sales calls"
            imageSrc="/assets/agents/aiagent11.png"
            delay={0.1}
          />
          
          <Agent 
            name="David"
            role="AI Sales Force Lead Generator"
            description="Advanced Web Scraping functions"
            imageSrc="/assets/agents/aiagent13.png"
            delay={0.2}
          />
          
          <Agent 
            name="Sophie"
            role="AI Voice Customer Service Agent"
            description="Inbound and outbound sales calls"
            imageSrc="/assets/agents/aiagent9.png"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}