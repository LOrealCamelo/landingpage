import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function ContactCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 3;
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create grid pattern
    const gridHelper = new THREE.GridHelper(20, 20, 0x0070F3, 0x111827);
    gridHelper.position.y = -1;
    gridHelper.rotation.x = Math.PI / 2;
    scene.add(gridHelper);
    
    // Add floating dots
    const dotsGroup = new THREE.Group();
    scene.add(dotsGroup);
    
    const dotGeometry = new THREE.SphereGeometry(0.03, 16, 16);
    const dotMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x0070F3,
      transparent: true,
      opacity: 0.5
    });
    
    // Create particles in a grid formation
    const particles = [];
    const gridSize = 10;
    const spacing = 0.3;
    
    for (let x = -gridSize; x <= gridSize; x += 2) {
      for (let y = -gridSize; y <= gridSize; y += 2) {
        const particle = new THREE.Mesh(dotGeometry, dotMaterial);
        particle.position.x = x * spacing;
        particle.position.y = y * spacing;
        particle.position.z = (Math.random() - 0.5) * 2;
        
        dotsGroup.add(particle);
        particles.push({
          mesh: particle,
          initialPosition: particle.position.clone(),
          speed: Math.random() * 0.01 + 0.005
        });
      }
    }
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Animation
    const clock = new THREE.Clock();
    
    function animate() {
      const elapsedTime = clock.getElapsedTime();
      
      // Gently rotate the grid
      dotsGroup.rotation.z = Math.sin(elapsedTime * 0.1) * 0.1;
      
      // Animate particles
      particles.forEach((particle, i) => {
        // Make particles float up and down
        particle.mesh.position.z = particle.initialPosition.z + Math.sin(elapsedTime * particle.speed + i) * 0.3;
        
        // Fade particles based on position
        (particle.mesh.material as THREE.MeshBasicMaterial).opacity = 
          0.2 + 0.8 * (Math.sin(elapsedTime * 0.2 + i * 0.1) * 0.5 + 0.5);
      });
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handling
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    window.addEventListener('resize', onWindowResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      
      dotGeometry.dispose();
      dotMaterial.dispose();
      
      particles.forEach(particle => {
        dotsGroup.remove(particle.mesh);
      });
      
      scene.remove(dotsGroup);
      scene.remove(gridHelper);
    };
  }, []);
  
  return <div ref={canvasRef} className="canvas-container"></div>;
}
