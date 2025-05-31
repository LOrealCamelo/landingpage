
'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, duration = 0.6, className }: FadeInProps) {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <motion.div
      ref={targetRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
