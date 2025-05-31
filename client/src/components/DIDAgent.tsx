import React, { useEffect, useState } from 'react';

export function DIDAgent() {
  const [agentLoaded, setAgentLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Don't load the agent if we're in development mode on localhost
    // This helps prevent CORS errors during development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log("D-ID Agent disabled in local development environment");
      return;
    }

    // Check if script already exists to prevent duplicates
    if (document.querySelector('script[data-name="did-agent"]')) {
      console.log("D-ID Agent script already exists, not adding again");
      return;
    }

    // Function to load the D-ID script with error handling
    const loadDIDScript = () => {
      try {
        // Create the script element
        const script = document.createElement('script');
        script.defer = true;
        script.src = 'https://agent.d-id.com/v1/index.js';
        script.setAttribute('data-name', 'did-agent');
        script.setAttribute('data-mode', 'fabio');
        // Only set client key if available via environment variable
        const clientKey = import.meta.env.VITE_DID_CLIENT_KEY;
        if (clientKey) {
          script.setAttribute('data-client-key', clientKey);
        } else {
          console.warn('D-ID client key not found in environment variables. Agent may not function properly.');
        }
        script.setAttribute('data-agent-id', 'agt_udH-9cTx');
        script.setAttribute('data-monitor', 'true');
        script.setAttribute('data-expanded', 'true');
        
        // Handle script load event
        script.onload = () => {
          console.log("D-ID Agent script loaded successfully");
          setAgentLoaded(true);
          setHasError(false);
        };

        // Handle script error
        script.onerror = (error) => {
          console.error("Error loading D-ID Agent script:", error);
          setHasError(true);
          // Remove the failed script so we can try again if needed
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
        };
        
        // Append the script to the document body
        document.body.appendChild(script);
        
        // Return the script for cleanup
        return script;
      } catch (error) {
        console.error("Exception when loading D-ID Agent:", error);
        setHasError(true);
        return null;
      }
    };

    // Load the script
    const script = loadDIDScript();

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}