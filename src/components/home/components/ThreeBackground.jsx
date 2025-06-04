"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo, useEffect, useState } from "react"
import { useScroll } from "framer-motion"
import * as THREE from "three"

// Bird component
function Bird({ position, speed = 1 }) {
  const birdRef = useRef()
  const wingRef1 = useRef()
  const wingRef2 = useRef()

  useFrame((state) => {
    if (birdRef.current) {
      // Bird movement
      birdRef.current.position.x += speed * 0.01
      birdRef.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.002

      // Reset position when bird goes off screen
      if (birdRef.current.position.x > 15) {
        birdRef.current.position.x = -15
      }

      // Wing flapping
      if (wingRef1.current && wingRef2.current) {
        const wingFlap = Math.sin(state.clock.elapsedTime * 8) * 0.3
        wingRef1.current.rotation.z = wingFlap
        wingRef2.current.rotation.z = -wingFlap
      }
    }
  })

  return (
    <group ref={birdRef} position={position}>
      {/* Bird body */}
      <mesh>
        <sphereGeometry args={[0.05, 8, 6]} />
        <meshBasicMaterial color="#2c3e50" />
      </mesh>

      {/* Wings */}
      <mesh ref={wingRef1} position={[-0.08, 0, 0]}>
        <boxGeometry args={[0.15, 0.02, 0.08]} />
        <meshBasicMaterial color="#34495e" />
      </mesh>
      <mesh ref={wingRef2} position={[0.08, 0, 0]}>
        <boxGeometry args={[0.15, 0.02, 0.08]} />
        <meshBasicMaterial color="#34495e" />
      </mesh>
    </group>
  )
}

// Star component
function Star({ position }) {
  const starRef = useRef()

  useFrame((state) => {
    if (starRef.current) {
      starRef.current.rotation.x += 0.01
      starRef.current.rotation.y += 0.01

      // Twinkling effect
      const twinkle = Math.sin(state.clock.elapsedTime * 3 + position[0] * 10) * 0.3 + 0.7
      starRef.current.material.opacity = twinkle
    }
  })

  return (
    <mesh ref={starRef} position={position}>
      <octahedronGeometry args={[0.02]} />
      <meshBasicMaterial color="#ffffff" transparent />
    </mesh>
  )
}

// Sun component
function Sun({ intensity, position }) {
  const sunRef = useRef()

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005
    }
  })

  return (
    <group>
      <mesh ref={sunRef} position={position}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color={new THREE.Color().setHSL(0.15, 1, intensity)} transparent opacity={intensity} />
      </mesh>
      <pointLight
        position={position}
        intensity={intensity * 2}
        color={new THREE.Color().setHSL(0.15, 0.8, 0.8)}
        distance={20}
      />
    </group>
  )
}

// Moon component
function Moon({ intensity, position }) {
  const moonRef = useRef()

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.002
    }
  })

  return (
    <group>
      <mesh ref={moonRef} position={position}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color={new THREE.Color().setHSL(0.6, 0.1, intensity)} transparent opacity={intensity} />
      </mesh>
      <pointLight
        position={position}
        intensity={intensity * 0.5}
        color={new THREE.Color().setHSL(0.6, 0.2, 0.9)}
        distance={15}
      />
    </group>
  )
}

// Clouds component
function Clouds({ scrollProgress }) {
  const cloudsRef = useRef()

  const cloudPositions = useMemo(
    () => [
      [-8, 3, -5],
      [-3, 4, -8],
      [2, 3.5, -6],
      [7, 4.2, -7],
      [-6, 2.8, -4],
      [4, 3.8, -9],
    ],
    [],
  )

  useFrame((state) => {
    if (cloudsRef.current) {
      cloudsRef.current.children.forEach((cloud, index) => {
        cloud.position.x += 0.002 * (index % 2 === 0 ? 1 : -1)
        cloud.position.y += Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.001
      })
    }
  })

  return (
    <group ref={cloudsRef}>
      {cloudPositions.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.8 + Math.random() * 0.4, 8, 6]} />
          <meshBasicMaterial
            color={new THREE.Color().setHSL(0, 0, 0.9 - scrollProgress * 0.3)}
            transparent
            opacity={0.6 - scrollProgress * 0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

// Main 3D Scene component
function Scene({ scrollProgress }) {
  const { scene } = useThree()

  // Generate birds
  const birds = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [-15 + Math.random() * 30, 2 + Math.random() * 3, -10 + Math.random() * 5],
      speed: 0.5 + Math.random() * 1.5,
    }))
  }, [])

  // Generate stars
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, () => ({
      position: [-20 + Math.random() * 40, -2 + Math.random() * 15, -15 + Math.random() * 10],
    }))
  }, [])

  // Update scene background color based on scroll
  useEffect(() => {
    const dayColor = new THREE.Color(0.53, 0.81, 0.98) // Light blue
    const nightColor = new THREE.Color(0.05, 0.05, 0.2) // Dark blue
    scene.background = dayColor.lerp(nightColor, scrollProgress)
  }, [scene, scrollProgress])

  // Calculate sun and moon positions and intensities
  const sunIntensity = Math.max(0, 1 - scrollProgress * 1.5)
  const moonIntensity = Math.max(0, scrollProgress - 0.3)

  const sunPosition = [8 - scrollProgress * 16, 5 - scrollProgress * 10, -10]
  const moonPosition = [-8 + scrollProgress * 16, -3 + scrollProgress * 8, -10]

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.3 + scrollProgress * 0.2} />

      {/* Sun */}
      {sunIntensity > 0 && <Sun intensity={sunIntensity} position={sunPosition} />}

      {/* Moon */}
      {moonIntensity > 0 && <Moon intensity={moonIntensity} position={moonPosition} />}

      {/* Clouds */}
      <Clouds scrollProgress={scrollProgress} />

      {/* Birds (visible during day) */}
      {birds.map((bird, index) => (
        <Bird key={index} position={bird.position} speed={bird.speed} />
      ))}

      {/* Stars (visible during night) */}
      {stars
        .map((star, index) => <Star key={index} position={star.position} />)
        .filter((_, index) => scrollProgress > 0.4 && index < scrollProgress * 50)}
    </>
  )
}

export default function ThreeBackground() {
  const { scrollYProgress } = useScroll()
  const [scrollProgress, setScrollProgress] = useState(0)

  // Update scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollProgress(latest)
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <div className="fixed inset-0 -z-1">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        style={{ background: "transparent" }}
      >
        <Scene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}
