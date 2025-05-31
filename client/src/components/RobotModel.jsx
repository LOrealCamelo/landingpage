import React, { useEffect, useRef } from 'react';

const RobotModel = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create animated robot image using CSS
    const robotContainer = containerRef.current;
    
    // Apply styling to make the robot float
    robotContainer.classList.add('floating');
    
    return () => {
      robotContainer.classList.remove('floating');
    };
  }, []);

  return (
    <div ref={containerRef} className="robot-container relative w-32 h-32 mx-auto my-8">
      <div className="relative w-full h-full">
        {/* Robot Head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
          {/* Eyes */}
          <div className="absolute top-4 left-3 w-3 h-3 rounded-full bg-blue-200 animate-pulse"></div>
          <div className="absolute top-4 right-3 w-3 h-3 rounded-full bg-blue-200 animate-pulse"></div>
          {/* Mouth */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-2 rounded-full bg-blue-200"></div>
        </div>
        
        {/* Robot Body */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-24 h-20 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 shadow-lg">
          {/* Body Details */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-6 rounded bg-gray-800"></div>
          <div className="absolute bottom-3 left-4 w-4 h-4 rounded-full bg-blue-400 animate-pulse"></div>
          <div className="absolute bottom-3 right-4 w-4 h-4 rounded-full bg-blue-400 animate-pulse"></div>
        </div>
        
        {/* Lightning Bolt */}
        <div className="absolute -top-8 -right-4 text-yellow-500 text-4xl transform rotate-12">⚡</div>
        <div className="absolute -bottom-2 -left-4 text-yellow-500 text-4xl transform -rotate-12">⚡</div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-blue-500 filter blur-xl opacity-20 rounded-full"></div>
    </div>
  );
};

export default RobotModel;