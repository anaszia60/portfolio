import { Canvas } from '@react-three/fiber';
import { Float, Stars, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function FloatingGeometry() {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          transparent 
          opacity={0.6}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function MultipleGeometries() {
  return (
    <>
      {Array.from({ length: 8 }, (_, i) => (
        <group key={i} position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ]}>
          <Float speed={0.5 + Math.random()} rotationIntensity={0.5} floatIntensity={1}>
            <mesh>
              <octahedronGeometry args={[0.5 + Math.random() * 0.5]} />
              <meshStandardMaterial 
                color={Math.random() > 0.5 ? "#06b6d4" : "#a855f7"} 
                transparent 
                opacity={0.3}
                wireframe
              />
            </mesh>
          </Float>
        </group>
      ))}
    </>
  );
}

export const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        
        <Stars 
          radius={300} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />
        
        <FloatingGeometry />
        <MultipleGeometries />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
};