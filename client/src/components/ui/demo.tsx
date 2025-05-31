'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-dark-900 relative overflow-hidden">
      {/* Digital Background Animation */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-purple-900 to-blue-900">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><path d="M0,0 L100,100 M0,100 L100,0 M50,0 L50,100 M0,50 L100,50" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></svg>')`,
          backgroundSize: '30px 30px'
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 text-center">
              Advanced AI Technology
            </h1>
            <p className="text-xl text-center text-gray-300 mb-8">
              Transforming ideas into intelligent solutions with cutting-edge technology
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Network Lines Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{
              height: '1px',
              width: '100%',
              top: `${Math.random() * 100}%`,
              left: 0,
              transform: `translateX(${-100 + (Date.now() / 100) % 200}%)`,
              animationDuration: `${10 + Math.random() * 20}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>
      
      {/* Digital Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
        <h2 className="text-2xl font-bold mb-2 text-white">Intelligent Solutions</h2>
        <p className="text-gray-300">Powering the future with Xpert AI Solutions</p>
      </div>
    </Card>
  )
}