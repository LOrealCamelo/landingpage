import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface WorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function WorkflowStep({ icon, title, description, delay }: WorkflowStepProps) {
  return (
    <motion.div 
      className="flex items-center p-4 bg-dark-800 rounded-lg border border-gray-700 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex-shrink-0 mr-4 text-primary text-2xl">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <motion.div 
        className="absolute h-8 w-1 bg-gradient-to-b from-primary to-transparent -bottom-10 left-8"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
      />
    </motion.div>
  );
}

export function VoiceAgentWorkflow() {
  return (
    <div className="space-y-10 max-w-lg mx-auto">
      <h3 className="text-xl font-semibold text-center mb-6">AI Voice Agent Call Handling</h3>
      
      <WorkflowStep 
        icon={<i className="ri-phone-line"></i>}
        title="Incoming Customer Call"
        description="Customer calls your business with questions or to schedule service"
        delay={0.1}
      />
      
      <WorkflowStep 
        icon={<i className="ri-robot-line"></i>}
        title="AI Voice Agent Answers"
        description="Our AI voice agent answers with a personalized greeting and natural conversation"
        delay={0.4}
      />
      
      <WorkflowStep 
        icon={<i className="ri-question-answer-line"></i>}
        title="Information & Questions"
        description="AI provides accurate information and answers specific questions about your business"
        delay={0.7}
      />
      
      <WorkflowStep 
        icon={<i className="ri-calendar-check-line"></i>}
        title="Appointment Scheduling"
        description="AI assists customer in booking an appointment at their preferred time"
        delay={1.0}
      />
      
      <WorkflowStep 
        icon={<i className="ri-check-double-line"></i>}
        title="Confirmation & Follow-up"
        description="Appointment is added to your calendar and confirmation is sent to customer"
        delay={1.3}
      />
    </div>
  );
}

export function LeadGenerationWorkflow() {
  return (
    <div className="space-y-10 max-w-lg mx-auto">
      <h3 className="text-xl font-semibold text-center mb-6">AI Lead Generation Calls</h3>
      
      <WorkflowStep 
        icon={<i className="ri-list-check"></i>}
        title="Targeted Lead List"
        description="AI analyzes your target market and creates a qualified lead list"
        delay={0.1}
      />
      
      <WorkflowStep 
        icon={<i className="ri-phone-fill"></i>}
        title="Automated Outbound Calls"
        description="AI voice agent places calls to leads at optimal times"
        delay={0.4}
      />
      
      <WorkflowStep 
        icon={<i className="ri-chat-smile-line"></i>}
        title="Natural Conversation"
        description="AI engages in natural, personalized conversations to qualify leads"
        delay={0.7}
      />
      
      <WorkflowStep 
        icon={<i className="ri-file-list-3-line"></i>}
        title="Interest Qualification"
        description="AI identifies interested prospects and qualifies their needs"
        delay={1.0}
      />
      
      <WorkflowStep 
        icon={<i className="ri-user-received-line"></i>}
        title="Lead Transfer & Follow-up"
        description="Qualified leads are instantly transferred to your CRM with detailed notes"
        delay={1.3}
      />
    </div>
  );
}

export function SocialMediaWorkflow() {
  return (
    <div className="space-y-10 max-w-lg mx-auto">
      <h3 className="text-xl font-semibold text-center mb-6">AI Social Media Automation</h3>
      
      <WorkflowStep 
        icon={<i className="ri-lightbulb-line"></i>}
        title="Content Strategy"
        description="AI analyzes your audience and develops a tailored content strategy"
        delay={0.1}
      />
      
      <WorkflowStep 
        icon={<i className="ri-article-line"></i>}
        title="Content Creation"
        description="AI generates engaging posts, captions, and hashtags for your business"
        delay={0.4}
      />
      
      <WorkflowStep 
        icon={<i className="ri-image-line"></i>}
        title="Image & Video Generation"
        description="AI creates professional graphics, images, and short videos for your posts"
        delay={0.7}
      />
      
      <WorkflowStep 
        icon={<i className="ri-calendar-todo-line"></i>}
        title="Scheduling & Optimization"
        description="AI schedules posts at optimal times for maximum engagement"
        delay={1.0}
      />
      
      <WorkflowStep 
        icon={<i className="ri-bar-chart-line"></i>}
        title="Analytics & Iteration"
        description="AI analyzes performance and continuously improves your content strategy"
        delay={1.3}
      />
    </div>
  );
}

export function LeadScrapingWorkflow() {
  return (
    <div className="space-y-10 max-w-lg mx-auto">
      <h3 className="text-xl font-semibold text-center mb-6">AI Lead Scraping Tool</h3>
      
      <WorkflowStep 
        icon={<i className="ri-search-line"></i>}
        title="Source Identification"
        description="AI identifies relevant sources for your target market and industry"
        delay={0.1}
      />
      
      <WorkflowStep 
        icon={<i className="ri-database-2-line"></i>}
        title="Data Collection"
        description="AI scrapes business information from multiple sources while maintaining privacy"
        delay={0.4}
      />
      
      <WorkflowStep 
        icon={<i className="ri-filter-3-line"></i>}
        title="Lead Filtering & Validation"
        description="AI filters and validates contact information for accuracy"
        delay={0.7}
      />
      
      <WorkflowStep 
        icon={<i className="ri-user-add-line"></i>}
        title="Lead Enrichment"
        description="AI enriches lead data with additional information relevant to your business"
        delay={1.0}
      />
      
      <WorkflowStep 
        icon={<i className="ri-file-transfer-line"></i>}
        title="CRM Integration"
        description="Qualified leads are automatically imported into your CRM system"
        delay={1.3}
      />
    </div>
  );
}

export function CRMDemoButton() {
  return (
    <div className="text-center mt-8">
      <motion.button
        className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium text-center hover:shadow-lg hover:shadow-primary/30 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('/crm-demo', '_blank')}
      >
        <div className="flex items-center">
          <i className="ri-play-circle-line mr-2 text-xl"></i>
          View CRM Demo
        </div>
      </motion.button>
      <p className="text-sm text-gray-400 mt-2">See our powerful CRM system in action</p>
    </div>
  );
}

interface WorkflowTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function WorkflowTabs({ activeTab, setActiveTab }: WorkflowTabsProps) {
  const tabs = [
    { id: 'voice-agent', name: 'Voice Agent' },
    { id: 'lead-generation', name: 'Lead Generation' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'lead-scraping', name: 'Lead Scraping' },
    { id: 'crm', name: 'CRM Demo' },
  ];
  
  return (
    <div className="flex flex-wrap justify-center mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-all ${
            activeTab === tab.id
              ? 'bg-primary text-white shadow-md shadow-primary/20'
              : 'bg-dark-800 hover:bg-dark-700'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}

export function WorkflowVisualizer() {
  const [activeTab, setActiveTab] = React.useState('voice-agent');
  
  return (
    <div className="py-6">
      <WorkflowTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="mt-6">
        {activeTab === 'voice-agent' && <VoiceAgentWorkflow />}
        {activeTab === 'lead-generation' && <LeadGenerationWorkflow />}
        {activeTab === 'social-media' && <SocialMediaWorkflow />}
        {activeTab === 'lead-scraping' && <LeadScrapingWorkflow />}
        {activeTab === 'crm' && (
          <div className="text-center py-10">
            <h3 className="text-xl font-semibold mb-4">Customer Relationship Management System</h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Our AI-powered CRM system helps you track leads, manage customer relationships, 
              and automate follow-ups for maximum efficiency.
            </p>
            <CRMDemoButton />
          </div>
        )}
      </div>
    </div>
  );
}