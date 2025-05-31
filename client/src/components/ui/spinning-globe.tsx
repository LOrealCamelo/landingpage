'use client'

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function SpinningGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      1, // We'll use a square aspect ratio for the globe
      0.1,
      1000
    );
    camera.position.z = 2;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(400, 400); // Fixed size for the globe
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Create a globe
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Create material with gradient purple colors
    const globeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float time;
        
        void main() {
          // Create a gradient from dark purple to lighter purple
          vec3 colorA = vec3(0.3, 0.0, 0.5); // Dark purple
          vec3 colorB = vec3(0.6, 0.2, 0.8); // Lighter purple
          
          // Use position for the gradient effect
          float gradient = sin(vPosition.x * 2.0 + time) * 0.5 + 0.5;
          
          // Create pulsing effect
          float pulse = sin(time * 0.5) * 0.1 + 0.9;
          
          // Create grid lines
          float grid = 0.0;
          float lineWidth = 0.02;
          
          // Longitude lines
          float longitude = mod(atan(vPosition.z, vPosition.x) + 3.14159, 6.28318) / 6.28318;
          grid += step(mod(longitude, 0.1), lineWidth);
          
          // Latitude lines
          float latitude = acos(vPosition.y) / 3.14159;
          grid += step(mod(latitude, 0.1), lineWidth);
          
          // Mix base color with grid lines
          vec3 color = mix(colorA, colorB, gradient);
          color = mix(color, vec3(0.7, 0.4, 1.0), grid * 0.5);
          
          // Add alpha for transparency
          float alpha = 0.85;
          
          // Add glow effect at the edges
          float edge = 1.0 - pow(abs(dot(normalize(vPosition), vec3(0.0, 0.0, 1.0))), 1.5);
          color += vec3(0.4, 0.2, 0.6) * edge;
          
          gl_FragColor = vec4(color * pulse, alpha);
        }
      `,
      transparent: true
    });
    
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);
    
    // Add particles around the globe for atmosphere
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      // Create positions on a sphere with some randomness
      const radius = 1.1 + Math.random() * 0.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      const idx = i * 3;
      positions[idx] = radius * Math.sin(phi) * Math.cos(theta);
      positions[idx + 1] = radius * Math.cos(phi);
      positions[idx + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xaa55ff,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the globe
      globe.rotation.y += 0.003;
      particles.rotation.y += 0.001;
      
      // Update shader time
      time += 0.01;
      globeMaterial.uniforms.time.value = time;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      // Keep the globe square
      const size = Math.min(400, window.innerWidth * 0.8);
      renderer.setSize(size, size);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    />
  );
}