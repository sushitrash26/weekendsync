'use client'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export function StarsScene() {
  return (
    <Canvas
      className="absolute inset-0 pointer-events-none"
      camera={{ position: [0, 0, 1] }}
      gl={{ alpha: true }}
    >
      <Stars radius={60} depth={50} count={2000} factor={3} saturation={0} fade speed={0.4} />
    </Canvas>
  )
}
