import React, { useState } from 'react';
import { useDemoVideoModal } from '@/components/ui/demo-video-modal';

// Import workflow images
// We're using the relative import paths that will work with Vite's setup
const voiceAgentImg = 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=500&auto=format&fit=crop';
const leadGenImg = 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=500&auto=format&fit=crop';
const socialMediaImg = 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500&auto=format&fit=crop';
const leadScrapingImg = 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=500&auto=format&fit=crop';
const crmDemoImg = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop';

// Demo video path
const crmDemoVideoPath = '/Jl4bVOK4wF.mp4';

const animations = {
  fadeIn: 'animate-fade-up opacity-0',
  fadeInDelay1: 'animate-fade-up opacity-0 [animation-delay:0.2s]',
  fadeInDelay2: 'animate-fade-up opacity-0 [animation-delay:0.4s]',
  fadeInDelay3: 'animate-fade-up opacity-0 [animation-delay:0.6s]',
  fadeInDelay4: 'animate-fade-up opacity-0 [animation-delay:0.8s]',
};

// Workflow tab interface
interface WorkflowTab {
  id: string;
  label: string;
  content: React.ReactNode;
}

// Workflow step component
interface WorkflowStepProps {
  number: number;
  title: string;
  description: string;
  animationDelay: string;
}

function WorkflowStep({ number, title, description, animationDelay }: WorkflowStepProps) {
  return (
    <div className={`flex items-start mb-6 ${animationDelay}`}>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
        <span className="font-bold">{number}</span>
      </div>
      <div>
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

export function WorkflowVisualizer() {
  const [activeTab, setActiveTab] = useState<string>('voice-agent');
  const { openModal, DemoVideoModalComponent } = useDemoVideoModal();

  // Define workflow tabs
  const tabs: WorkflowTab[] = [
    {
      id: 'voice-agent',
      label: 'AI Voice Agent',
      content: (
        <div className="p-4">
          <div className="relative overflow-hidden rounded-lg mb-6 h-48 md:h-64">
            <img 
              src={voiceAgentImg}
              alt="AI Voice Agent"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent flex items-end">
              <h3 className="text-xl font-semibold p-4 text-white">AI Voice Agent Workflow</h3>
            </div>
          </div>
          
          <WorkflowStep 
            number={1}
            title="Incoming Customer Call"
            description="Customer calls your business with questions or to schedule service."
            animationDelay={animations.fadeIn}
          />
          
          <WorkflowStep 
            number={2}
            title="AI Voice Agent Answers"
            description="Our AI voice agent answers with a personalized greeting and natural conversation."
            animationDelay={animations.fadeInDelay1}
          />
          
          <WorkflowStep 
            number={3}
            title="Information & Questions"
            description="AI provides accurate information and answers specific questions about your business."
            animationDelay={animations.fadeInDelay2}
          />
          
          <WorkflowStep 
            number={4}
            title="Appointment Scheduling"
            description="AI assists customer in booking an appointment at their preferred time."
            animationDelay={animations.fadeInDelay3}
          />
          
          <WorkflowStep 
            number={5}
            title="Confirmation & Follow-up"
            description="Appointment is added to your calendar and confirmation is sent to customer."
            animationDelay={animations.fadeInDelay4}
          />
        </div>
      ),
    },
    {
      id: 'lead-generation',
      label: 'Lead Generation',
      content: (
        <div className="p-4">
          <div className="relative overflow-hidden rounded-lg mb-6 h-48 md:h-64">
            <img 
              src={leadGenImg}
              alt="AI Lead Generation"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent flex items-end">
              <h3 className="text-xl font-semibold p-4 text-white">AI Lead Generation Workflow</h3>
            </div>
          </div>
          
          <WorkflowStep 
            number={1}
            title="Targeted Lead List"
            description="AI analyzes your target market and creates a qualified lead list."
            animationDelay={animations.fadeIn}
          />
          
          <WorkflowStep 
            number={2}
            title="Automated Outbound Calls"
            description="AI voice agent places calls to leads at optimal times."
            animationDelay={animations.fadeInDelay1}
          />
          
          <WorkflowStep 
            number={3}
            title="Natural Conversation"
            description="AI engages in natural, personalized conversations to qualify leads."
            animationDelay={animations.fadeInDelay2}
          />
          
          <WorkflowStep 
            number={4}
            title="Interest Qualification"
            description="AI identifies interested prospects and qualifies their needs."
            animationDelay={animations.fadeInDelay3}
          />
          
          <WorkflowStep 
            number={5}
            title="Lead Transfer & Follow-up"
            description="Qualified leads are instantly transferred to your CRM with detailed notes."
            animationDelay={animations.fadeInDelay4}
          />
        </div>
      ),
    },
    {
      id: 'social-media',
      label: 'Social Media',
      content: (
        <div className="p-4">
          <div className="relative overflow-hidden rounded-lg mb-6 h-48 md:h-64">
            <img 
              src={socialMediaImg}
              alt="AI Social Media Automation"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent flex items-end">
              <h3 className="text-xl font-semibold p-4 text-white">AI Social Media Automation</h3>
            </div>
          </div>
          
          <WorkflowStep 
            number={1}
            title="Content Strategy"
            description="AI analyzes your audience and develops a tailored content strategy."
            animationDelay={animations.fadeIn}
          />
          
          <WorkflowStep 
            number={2}
            title="Content Creation"
            description="AI generates engaging posts, captions, and hashtags for your business."
            animationDelay={animations.fadeInDelay1}
          />
          
          <WorkflowStep 
            number={3}
            title="Image & Video Generation"
            description="AI creates professional graphics, images, and short videos for your posts."
            animationDelay={animations.fadeInDelay2}
          />
          
          <WorkflowStep 
            number={4}
            title="Scheduling & Optimization"
            description="AI schedules posts at optimal times for maximum engagement."
            animationDelay={animations.fadeInDelay3}
          />
          
          <WorkflowStep 
            number={5}
            title="Analytics & Iteration"
            description="AI analyzes performance and continuously improves your content strategy."
            animationDelay={animations.fadeInDelay4}
          />
        </div>
      ),
    },
    {
      id: 'lead-scraping',
      label: 'Lead Scraping',
      content: (
        <div className="p-4">
          <div className="relative overflow-hidden rounded-lg mb-6 h-48 md:h-64">
            <img 
              src={leadScrapingImg}
              alt="AI Lead Scraping Tool"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent flex items-end">
              <h3 className="text-xl font-semibold p-4 text-white">AI Lead Scraping Tool</h3>
            </div>
          </div>
          
          <WorkflowStep 
            number={1}
            title="Source Identification"
            description="AI identifies relevant sources for your target market and industry."
            animationDelay={animations.fadeIn}
          />
          
          <WorkflowStep 
            number={2}
            title="Data Collection"
            description="AI scrapes business information from multiple sources while maintaining privacy."
            animationDelay={animations.fadeInDelay1}
          />
          
          <WorkflowStep 
            number={3}
            title="Lead Filtering & Validation"
            description="AI filters and validates contact information for accuracy."
            animationDelay={animations.fadeInDelay2}
          />
          
          <WorkflowStep 
            number={4}
            title="Lead Enrichment"
            description="AI enriches lead data with additional information relevant to your business."
            animationDelay={animations.fadeInDelay3}
          />
          
          <WorkflowStep 
            number={5}
            title="CRM Integration"
            description="Qualified leads are automatically imported into your CRM system."
            animationDelay={animations.fadeInDelay4}
          />
        </div>
      ),
    },
    {
      id: 'crm-demo',
      label: 'CRM Demo',
      content: (
        <div className="p-4 text-center">
          <div className="relative overflow-hidden rounded-lg mb-6 h-48 md:h-64">
            <img 
              src={crmDemoImg}
              alt="CRM System Demo"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent flex items-end justify-center">
              <h3 className="text-xl font-semibold p-4 text-white">Customer Relationship Management</h3>
            </div>
          </div>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Our AI-powered CRM system helps you track leads, manage customer relationships, 
            and automate follow-ups for maximum efficiency.
          </p>
          
          <a 
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            Request CRM Demo
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="workflow-visualizer">
      {/* Demo Video Modal */}
      {DemoVideoModalComponent}
      
      {/* Tab navigation */}
      <div className="flex flex-wrap justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-dark-800/70 text-gray-300 hover:bg-dark-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-dark-900/50 backdrop-blur-sm rounded-lg">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}