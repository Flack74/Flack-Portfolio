'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CompactLogo3D } from './CompactLogo3D';

export const MiniCanvas = () => {
  return (
    <div className="w-12 h-8 inline-block">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 50 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[2, 2, 2]} intensity={0.8} color="#00d4ff" />
          <CompactLogo3D />
        </Suspense>
      </Canvas>
    </div>
  );
};