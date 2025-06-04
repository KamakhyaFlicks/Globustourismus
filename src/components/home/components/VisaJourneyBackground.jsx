"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useEffect, useState } from "react"
import { useScroll } from "framer-motion"
import { Text, Environment, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

// Counselling Office Scene
function CounsellingOffice({ visible, position }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current && visible) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  if (!visible) return null

  return (
    <group ref={groupRef} position={position}>
      {/* Office Desk */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Chair */}
      <mesh position={[0.8, -0.2, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color="#4A4A4A" />
      </mesh>

      {/* Counsellor (simple figure) */}
      <group position={[-0.8, 0, 0]}>
        {/* Head */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.15]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        {/* Body */}
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[0.3, 0.6, 0.2]} />
          <meshStandardMaterial color="#2E86AB" />
        </mesh>
      </group>

      {/* Documents on desk */}
      <mesh position={[0, -0.4, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.3, 0.4]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Computer */}
      <mesh position={[-0.3, -0.3, 0]}>
        <boxGeometry args={[0.4, 0.3, 0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Floating text */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.3}
        color="#2E86AB"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        COUNSELLING
      </Text>
    </group>
  )
}

// Visa Stamping Scene
function VisaStamping({ visible, position, progress }) {
  const groupRef = useRef()
  const stampRef = useRef()
  const passportRef = useRef()

  useFrame((state) => {
    if (groupRef.current && visible) {
      // Stamp animation
      if (stampRef.current && progress > 0.3) {
        const stampProgress = Math.min((progress - 0.3) / 0.2, 1)
        stampRef.current.position.y = 1 - stampProgress * 1.5
        stampRef.current.rotation.z = stampProgress * Math.PI * 2
      }

      // Passport glow effect
      if (passportRef.current && progress > 0.5) {
        const glowIntensity = Math.sin(state.clock.elapsedTime * 3) * 0.3 + 0.7
        passportRef.current.material.emissive.setHSL(0.3, 0.5, glowIntensity * 0.2)
      }
    }
  })

  if (!visible) return null

  return (
    <group ref={groupRef} position={position}>
      {/* Embassy Building */}
      <mesh position={[0, 0, -2]}>
        <boxGeometry args={[3, 2, 0.5]} />
        <meshStandardMaterial color="#D3D3D3" />
      </mesh>

      {/* Embassy Flag */}
      <mesh position={[-1, 1.2, -1.7]} rotation={[0, 0, Math.PI / 6]}>
        <planeGeometry args={[0.6, 0.4]} />
        <meshStandardMaterial color="#FF0000" />
      </mesh>

      {/* Desk */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Passport */}
      <mesh ref={passportRef} position={[0, -0.4, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.02]} />
        <meshStandardMaterial color="#8B0000" />
      </mesh>

      {/* Visa Stamp */}
      <mesh ref={stampRef} position={[0, 1, 0.2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1]} />
        <meshStandardMaterial color="#4A4A4A" />
      </mesh>

      {/* Officer */}
      <group position={[0, 0.2, -0.5]}>
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.15]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[0.3, 0.6, 0.2]} />
          <meshStandardMaterial color="#000080" />
        </mesh>
      </group>

      {/* Approved stamp effect */}
      {progress > 0.5 && (
        <Text
          position={[0, 0.5, 0.5]}
          fontSize={0.2}
          color="#00FF00"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          APPROVED!
        </Text>
      )}

      <Text
        position={[0, 1.8, 0]}
        fontSize={0.3}
        color="#8B0000"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        VISA PROCESSING
      </Text>
    </group>
  )
}

// Airport and Airplane Scene
function AirportScene({ visible, position, progress }) {
  const airplaneRef = useRef()
  const propellerRef = useRef()
  const groupRef = useRef()

  useFrame((state) => {
    if (visible && airplaneRef.current) {
      // Airplane takeoff animation
      if (progress > 0.7) {
        const takeoffProgress = (progress - 0.7) / 0.3
        airplaneRef.current.position.y = takeoffProgress * 5
        airplaneRef.current.position.z = takeoffProgress * 10
        airplaneRef.current.rotation.x = -takeoffProgress * 0.3

        // Airplane movement in 3D space
        airplaneRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * takeoffProgress * 2
      }

      // Propeller rotation
      if (propellerRef.current) {
        propellerRef.current.rotation.z += 0.5
      }

      // Runway lights blinking
      if (groupRef.current) {
        groupRef.current.children.forEach((child, index) => {
          if (child.name === "runwayLight") {
            const blinkOffset = index * 0.5
            child.material.emissive.setHSL(0.1, 1, Math.sin(state.clock.elapsedTime * 2 + blinkOffset) * 0.5 + 0.5)
          }
        })
      }
    }
  })

  if (!visible) return null

  return (
    <group ref={groupRef} position={position}>
      {/* Airport Terminal */}
      <mesh position={[0, 0, -5]}>
        <boxGeometry args={[6, 3, 2]} />
        <meshStandardMaterial color="#E0E0E0" />
      </mesh>

      {/* Control Tower */}
      <mesh position={[3, 2, -4]}>
        <cylinderGeometry args={[0.3, 0.3, 2]} />
        <meshStandardMaterial color="#808080" />
      </mesh>

      {/* Runway */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 4]} />
        <meshStandardMaterial color="#2F2F2F" />
      </mesh>

      {/* Runway lights */}
      {Array.from({ length: 10 }, (_, i) => (
        <mesh key={i} name="runwayLight" position={[-8 + i * 2, -0.9, 0.5]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" />
        </mesh>
      ))}

      {/* Airplane */}
      <group ref={airplaneRef} position={[-3, -0.5, 0]}>
        {/* Fuselage */}
        <mesh>
          <cylinderGeometry args={[0.2, 0.15, 2]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>

        {/* Wings */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.1, 3, 0.5]} />
          <meshStandardMaterial color="#C0C0C0" />
        </mesh>

        {/* Tail */}
        <mesh position={[0, 0.3, -0.8]} rotation={[Math.PI / 4, 0, 0]}>
          <boxGeometry args={[0.1, 0.6, 0.3]} />
          <meshStandardMaterial color="#FF0000" />
        </mesh>

        {/* Propeller */}
        <mesh ref={propellerRef} position={[0, 0, 1]}>
          <boxGeometry args={[0.02, 1, 0.02]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Windows */}
        {Array.from({ length: 4 }, (_, i) => (
          <mesh key={i} position={[0.15, 0, 0.5 - i * 0.3]}>
            <circleGeometry args={[0.08]} />
            <meshStandardMaterial color="#87CEEB" />
          </mesh>
        ))}
      </group>

      {/* Clouds in sky */}
      {Array.from({ length: 5 }, (_, i) => (
        <mesh key={i} position={[-10 + i * 5, 3 + Math.sin(i) * 2, -8 + i * 2]}>
          <sphereGeometry args={[0.8 + Math.random() * 0.5]} />
          <meshStandardMaterial color="#FFFFFF" transparent opacity={0.7} />
        </mesh>
      ))}

      <Text
        position={[0, 2.5, 0]}
        fontSize={0.3}
        color="#0066CC"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        TAKEOFF!
      </Text>
    </group>
  )
}

// Progress Indicator
function ProgressIndicator({ progress, position }) {
  return (
    <group position={position}>
      {/* Progress bar background */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.1, 0.1]} />
        <meshStandardMaterial color="#CCCCCC" />
      </mesh>

      {/* Progress bar fill */}
      <mesh position={[-2 + progress * 2, 0, 0.05]} scale={[progress, 1, 1]}>
        <boxGeometry args={[4, 0.12, 0.1]} />
        <meshStandardMaterial color="#00FF00" emissive="#00AA00" />
      </mesh>

      {/* Progress steps */}
      {[0, 0.33, 0.66, 1].map((step, index) => (
        <mesh key={index} position={[-2 + step * 4, 0, 0.1]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial
            color={progress >= step ? "#00FF00" : "#CCCCCC"}
            emissive={progress >= step ? "#00AA00" : "#000000"}
          />
        </mesh>
      ))}
    </group>
  )
}

// Main Scene Component
function VisaJourneyScene({ scrollProgress }) {
  const { camera, scene } = useThree()

  // Calculate which scene to show based on scroll
  const counsellingVisible = scrollProgress < 0.4
  const visaVisible = scrollProgress >= 0.3 && scrollProgress < 0.7
  const airportVisible = scrollProgress >= 0.6

  // Camera movement based on scroll
  useEffect(() => {
    if (scrollProgress < 0.33) {
      // Counselling scene
      camera.position.set(0, 2, 8)
      camera.lookAt(0, 0, 0)
    } else if (scrollProgress < 0.66) {
      // Visa scene
      camera.position.set(2, 3, 6)
      camera.lookAt(0, 0, 0)
    } else {
      // Airport scene
      const airportProgress = (scrollProgress - 0.66) / 0.34
      camera.position.set(-5 + airportProgress * 10, 1 + airportProgress * 5, 5 + airportProgress * 15)
      camera.lookAt(0, 0, 0)
    }
  }, [camera, scrollProgress])

  // Scene background color
  useEffect(() => {
    if (scrollProgress < 0.33) {
      scene.background = new THREE.Color(0xf0f8ff) // Office blue
    } else if (scrollProgress < 0.66) {
      scene.background = new THREE.Color(0xfff8dc) // Embassy cream
    } else {
      scene.background = new THREE.Color(0x87ceeb) // Sky blue
    }
  }, [scene, scrollProgress])

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      {/* Scenes */}
      <CounsellingOffice visible={counsellingVisible} position={[0, 0, 0]} />

      <VisaStamping visible={visaVisible} position={[0, 0, 0]} progress={scrollProgress} />

      <AirportScene visible={airportVisible} position={[0, 0, 0]} progress={scrollProgress} />

      {/* Progress Indicator */}
      <ProgressIndicator progress={scrollProgress} position={[0, -3, 0]} />

      {/* Environment for better lighting */}
      <Environment preset="sunset" />
    </>
  )
}

export default function VisaJourneyBackground() {
  const { scrollYProgress } = useScroll()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollProgress(latest)
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        <VisaJourneyScene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}
