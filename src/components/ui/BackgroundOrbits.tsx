"use client"
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Sphere } from '@react-three/drei'
import * as THREE from 'three'

interface JellySphereProps {
  position: [number, number, number]
  scale?: number
  speed?: number
  color?: string
}

function JellySphere({ position, scale = 1, speed = 1, color = "#ffffff" }: JellySphereProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.5
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <meshPhysicalMaterial 
        color={color}
        transmission={0.95} // Glass-like transparency
        opacity={1}
        metalness={0.1}
        roughness={0.1}
        ior={1.4} // Refraction index
        thickness={2}
        specularIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  )
}

export function BackgroundOrbits() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-70">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 10]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -20, -10]} intensity={1} color="#00FFE0" />
        <Environment preset="city" />
        
        {/* Decorative Orbits */}
        <group>
          <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
            <torusGeometry args={[8, 0.01, 16, 100]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
          </mesh>
          <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
            <torusGeometry args={[12, 0.01, 16, 100]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
          </mesh>
        </group>

        {/* Jelly Glass Spheres */}
        <JellySphere position={[-5, 3, -4]} scale={2.5} speed={0.4} />
        <JellySphere position={[6, -2, -6]} scale={3.5} speed={0.3} color="#F0EDD8" />
        <JellySphere position={[2, 4, -8]} scale={1.5} speed={0.6} />
        <JellySphere position={[-4, -4, -3]} scale={1.8} speed={0.5} />
        <JellySphere position={[0, 0, -15]} scale={5} speed={0.2} color="#00FFE0" />
      </Canvas>
    </div>
  )
}
