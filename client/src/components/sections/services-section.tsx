import React from "react";
import { ServiceCard } from "@/components/ui/service-card";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative overflow-hidden" data-animate="true">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-display uppercase tracking-wider text-primary mb-2 px-3 py-1 border border-primary/20 rounded-full animate-fade-up">Our Solutions</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">Cutting-Edge AI Services <span className="gradient-text">For Your Business</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-up">Transform your operations with our suite of AI-powered solutions designed to optimize performance and drive innovation across your organization.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {/* Service 1 */}
          <ServiceCard
            icon={<i className="ri-robot-line text-2xl text-primary"></i>}
            title="AI Workflow Automation"
            description="Streamline repetitive tasks and complex processes with intelligent automation that learns and improves over time."
            features={[
              "Process optimization",
              "Smart document processing",
              "Workflow intelligence"
            ]}
            gradientColor="primary"
            learnMoreLink="#contact"
          />
          
          {/* Service 2 */}
          <ServiceCard
            icon={<i className="ri-customer-service-2-line text-2xl text-secondary"></i>}
            title="Intelligent Customer Engagement"
            description="Enhance customer experiences with AI-powered chatbots and predictive analytics for personalized interactions."
            features={[
              "24/7 AI chatbots",
              "Sentiment analysis",
              "Personalized recommendations"
            ]}
            gradientColor="secondary"
            learnMoreLink="#contact"
          />
          
          {/* Service 3 */}
          <ServiceCard
            icon={<i className="ri-bar-chart-grouped-line text-2xl text-amber-500"></i>}
            title="Predictive Analytics"
            description="Harness the power of data with AI-driven insights that forecast trends and identify growth opportunities."
            features={[
              "Business intelligence",
              "Market trend forecasting",
              "Risk assessment modeling"
            ]}
            gradientColor="accent"
            learnMoreLink="#contact"
          />
          
          {/* Service 4 */}
          <ServiceCard
            icon={<i className="ri-fingerprint-line text-2xl text-emerald-500"></i>}
            title="Smart Security Solutions"
            description="Protect your business with AI-powered security systems that detect and prevent threats in real-time."
            features={[
              "Anomaly detection",
              "Fraud prevention",
              "Biometric authentication"
            ]}
            gradientColor="success"
            learnMoreLink="#contact"
          />
          
          {/* Service 5 */}
          <ServiceCard
            icon={<i className="ri-ai-generate text-2xl text-primary"></i>}
            title="Generative AI Solutions"
            description="Create content, designs, and models with advanced generative AI tools tailored to your industry needs."
            features={[
              "Content generation",
              "Product visualization",
              "Code generation"
            ]}
            gradientColor="primary"
            learnMoreLink="#contact"
          />
          
          {/* Service 6 */}
          <ServiceCard
            icon={<i className="ri-vidicon-line text-2xl text-secondary"></i>}
            title="Computer Vision & Recognition"
            description="Implement visual intelligence for object recognition, quality control, and automated visual inspections."
            features={[
              "Object detection",
              "Quality assurance",
              "Facial recognition"
            ]}
            gradientColor="secondary"
            learnMoreLink="#contact"
          />
        </div>
      </div>
    </section>
  );
}
