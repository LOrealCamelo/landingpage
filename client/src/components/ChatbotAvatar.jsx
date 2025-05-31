import React, { useEffect, useRef } from 'react';

const ChatbotAvatar = () => {
  const didAgentContainerRef = useRef(null);

  useEffect(() => {
    // Add the D-ID Agent script directly to the document
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://agent.d-id.com/v1/index.js';
    script.dataset.name = 'did-agent';
    script.dataset.mode = 'fabio'; 
    // Only set client key if available via environment variable
    const clientKey = import.meta.env.VITE_DID_CLIENT_KEY;
    if (clientKey) {
      script.dataset.clientKey = clientKey;
    } else {
      console.warn('D-ID client key not found in environment variables. Agent may not function properly.');
    }
    script.dataset.agentId = 'agt_udH-9cTx';
    script.dataset.monitor = 'true';
    
    if (didAgentContainerRef.current) {
      didAgentContainerRef.current.appendChild(script);
    }
    
    return () => {
      // Cleanup when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={didAgentContainerRef}
      id="did-agent-container"
      className="fixed bottom-4 right-4 z-50" 
      // The container will be styled by the D-ID script
    ></div>
  );
};

export default ChatbotAvatar;