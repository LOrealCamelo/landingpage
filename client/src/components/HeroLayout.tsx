import React from "react";
import { SplineScene } from "@/components/ui/splite";

export function HeroLayout() {
  return (
    <div className="w-full py-8 relative">
      <div className="flex flex-col items-center gap-8">
        {/* Black robot only - Purple Globe removed */}
        <div className="w-full h-[300px] relative">
          {/* Black robot */}
          <div className="relative w-full h-full">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
        
        {/* Text under the robot */}
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 gradient-text">Join 500+ Businesses Already Using AI Employees</h2>
          <p className="text-gray-300 max-w-lg">
            While you're posting jobs, interviewing candidates, and training new hires, your competitors are scaling with AI.
          </p>
        </div>
      </div>
    </div>
  );
}