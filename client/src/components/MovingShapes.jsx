import React from 'react';

const MovingShapes = () => {
  return (
    <div className="moving-shapes fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Create multiple floating shapes with different colors, sizes and animations */}
      <div className="absolute top-1/4 left-1/5 w-24 h-24 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/30 floating" style={{animationDelay: '0s', animationDuration: '8s'}}></div>
      
      <div className="absolute top-3/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/30 floating" style={{animationDelay: '1s', animationDuration: '10s'}}></div>
      
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-lg transform rotate-45 bg-gradient-to-tr from-cyan-500/20 to-blue-400/30 floating" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
      
      <div className="absolute bottom-1/4 right-1/5 w-28 h-28 rounded-xl bg-gradient-to-bl from-blue-400/20 to-purple-500/30 floating" style={{animationDelay: '1.5s', animationDuration: '12s'}}></div>
      
      <div className="absolute top-2/3 left-1/3 w-16 h-16 rounded-lg transform -rotate-12 bg-gradient-to-r from-indigo-500/20 to-purple-400/30 floating" style={{animationDelay: '0.7s', animationDuration: '9s'}}></div>
      
      {/* Add a few smaller shapes */}
      <div className="absolute top-1/5 right-1/3 w-12 h-12 rounded-full bg-gradient-to-br from-blue-300/20 to-cyan-400/30 floating" style={{animationDelay: '3s', animationDuration: '6s'}}></div>
      
      <div className="absolute bottom-1/5 left-2/3 w-10 h-10 rounded-lg transform rotate-12 bg-gradient-to-tr from-purple-300/20 to-indigo-400/30 floating" style={{animationDelay: '2.5s', animationDuration: '11s'}}></div>
      
      {/* Add some shaped with subtle glow effects */}
      <div className="absolute top-1/2 right-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/20 floating" style={{animationDelay: '1.2s', animationDuration: '15s', filter: 'blur(8px)'}}></div>
      
      <div className="absolute bottom-1/3 right-2/3 w-20 h-20 rounded-lg bg-gradient-to-br from-purple-500/10 to-indigo-500/20 floating" style={{animationDelay: '3.5s', animationDuration: '13s', filter: 'blur(5px)'}}></div>
      
      <div className="absolute top-3/4 right-1/4 w-14 h-14 rounded-xl bg-gradient-to-tr from-cyan-500/10 to-blue-400/20 floating" style={{animationDelay: '0.3s', animationDuration: '9s', filter: 'blur(6px)'}}></div>
    </div>
  );
};

export default MovingShapes;