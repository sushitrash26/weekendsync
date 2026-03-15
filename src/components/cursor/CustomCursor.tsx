'use client'
import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Instant dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cream rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ x: mouseX, y: mouseY }}
      />
      {/* Spring-lagged ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cream/40 rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ x: springX, y: springY }}
      />
    </>
  )
}
