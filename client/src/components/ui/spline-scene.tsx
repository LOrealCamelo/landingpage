'use client' // This is the first line now

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className={`${className} w-full h-full flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10`}>
        <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-primary animate-spin"></div>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className={`${className} w-full h-full flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10`}>
          <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-primary animate-spin"></div>
        </div>
      }
    >
      <div className={className}>
        <Spline
          scene={scene}
        />
      </div>
    </Suspense>
  )
}