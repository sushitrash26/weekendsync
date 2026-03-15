'use client'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Float } from '@react-three/drei'

export function SparklesScene() {
  return (
    <Canvas
      className="absolute inset-0 pointer-events-none"
      camera={{ position: [0, 0, 5], fov: 55 }}
      gl={{ alpha: true }}
    >
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sparkles count={120} scale={4} size={1.2} speed={0.3} color="#00FFE0" opacity={0.6} />
      </Float>
    </Canvas>
  )
}
