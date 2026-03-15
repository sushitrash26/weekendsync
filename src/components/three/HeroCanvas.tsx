'use client'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

function DarkMesh() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.x += 0.0015
    ref.current.rotation.y += 0.003
  })
  return (
    <group position={[0, -0.2, 0]}>
      <Icosahedron ref={ref} args={[1.3, 2]}>
        <meshStandardMaterial
          color="#181818"
          emissive="#E8201A"
          emissiveIntensity={0.08}
          roughness={0.25}
          metalness={0.95}
        />
      </Icosahedron>
      {/* Red glow plane underneath */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial color="#E8201A" transparent opacity={0.03} />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <Canvas
      className="absolute inset-0 pointer-events-none"
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[3, 2, 4]} intensity={0.6} color="#F0EDD8" />
      <pointLight position={[-1, -2, 2]} intensity={0.3} color="#E8201A" />
      <DarkMesh />
      <EffectComposer>
        <Bloom luminanceThreshold={0.3} intensity={0.5} mipmapBlur />
      </EffectComposer>
    </Canvas>
  )
}

export { Scene as HeroCanvas }
