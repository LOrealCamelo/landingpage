import React from "react";
import { TeamCard } from "@/components/ui/team-card";

export function TeamSection() {
  return (
    <section id="team" className="py-20 relative overflow-hidden bg-dark-900" data-animate="true">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-dark-800 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-dark-800 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-display uppercase tracking-wider text-primary mb-2 px-3 py-1 border border-primary/20 rounded-full animate-fade-up">Our Experts</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">Meet Our <span className="gradient-text">AI Specialists</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-up">Our team combines deep technical expertise with business acumen to deliver AI solutions that drive real-world results.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up">
          {/* Team Member 1 */}
          <TeamCard
            name="Dr. Alex Chen"
            position="Chief AI Architect"
            bio="Ph.D. in Machine Learning with 10+ years of experience in developing enterprise AI solutions."
            socialLinks={[
              { icon: "ri-linkedin-fill", url: "#" },
              { icon: "ri-twitter-fill", url: "#" },
              { icon: "ri-github-fill", url: "#" }
            ]}
            gradientColor="primary"
          />
          
          {/* Team Member 2 */}
          <TeamCard
            name="Sarah Rodriguez"
            position="Lead Data Scientist"
            bio="Expert in predictive analytics and large-scale machine learning systems for business intelligence."
            socialLinks={[
              { icon: "ri-linkedin-fill", url: "#" },
              { icon: "ri-twitter-fill", url: "#" },
              { icon: "ri-github-fill", url: "#" }
            ]}
            gradientColor="secondary"
          />
          
          {/* Team Member 3 */}
          <TeamCard
            name="Michael Johnson"
            position="AI Solutions Engineer"
            bio="Specializes in developing custom AI applications that solve complex business challenges."
            socialLinks={[
              { icon: "ri-linkedin-fill", url: "#" },
              { icon: "ri-twitter-fill", url: "#" },
              { icon: "ri-github-fill", url: "#" }
            ]}
            gradientColor="accent"
          />
          
          {/* Team Member 4 */}
          <TeamCard
            name="Emma Thompson"
            position="ML Implementation Specialist"
            bio="Expert in deploying and optimizing machine learning models for production environments."
            socialLinks={[
              { icon: "ri-linkedin-fill", url: "#" },
              { icon: "ri-twitter-fill", url: "#" },
              { icon: "ri-github-fill", url: "#" }
            ]}
            gradientColor="success"
          />
        </div>
      </div>
    </section>
  );
}
