import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function ExpertiseCanvas() {
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
    camera.position.z = 4;
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create a brain-like structure for AI visualization
    const brainGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const brainMaterial = new THREE.MeshStandardMaterial({
      color: 0x6D28D9,
      wireframe: true,
      emissive: 0x6D28D9,
      emissiveIntensity: 0.5
    });
    
    const brain = new THREE.Mesh(brainGeometry, brainMaterial);
    scene.add(brain);
    
    // Add some nodes to represent neural connections
    const nodes = [];
    for (let i = 0; i < 50; i++) {
      const nodeGeometry = new THREE.SphereGeometry(0.05, 16, 16);
      const nodeMaterial = new THREE.MeshStandardMaterial({
        color: 0x0070F3,
        emissive: 0x0070F3,
        emissiveIntensity: 0.7
      });
      
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      const radius = 1.5 + (Math.random() * 0.5 - 0.25);
      
      node.position.x = radius * Math.sin(phi) * Math.cos(theta);
      node.position.y = radius * Math.sin(phi) * Math.sin(theta);
      node.position.z = radius * Math.cos(phi);
      
      scene.add(node);
      nodes.push({
        mesh: node,
        initialPosition: node.position.clone(),
        pulseFactor: Math.random()
      });
    }
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Mouse interaction
    const mousePosition = new THREE.Vector2(0, 0);
    
    function onMouseMove(event: MouseEvent) {
      mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Animation
    const clock = new THREE.Clock();
    
    function animate() {
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate brain
      brain.rotation.y = elapsedTime * 0.1;
      brain.rotation.z = elapsedTime * 0.05;
      
      // Subtle interaction with mouse movement
      brain.rotation.x += mousePosition.y * 0.0005;
      brain.rotation.y += mousePosition.x * 0.0005;
      
      // Pulse and move nodes
      nodes.forEach((node, index) => {
        const scale = 1 + 0.3 * Math.sin(elapsedTime * node.pulseFactor + index);
        node.mesh.scale.set(scale, scale, scale);
        
        // Add subtle movement
        node.mesh.position.x = node.initialPosition.x + Math.sin(elapsedTime * 0.5 + index) * 0.1;
        node.mesh.position.y = node.initialPosition.y + Math.cos(elapsedTime * 0.5 + index * 0.5) * 0.1;
        node.mesh.position.z = node.initialPosition.z + Math.sin(elapsedTime * 0.3 + index * 0.2) * 0.1;
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
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      
      brainGeometry.dispose();
      brainMaterial.dispose();
      scene.remove(brain);
      
      nodes.forEach(node => {
        node.mesh.geometry.dispose();
        (node.mesh.material as THREE.Material).dispose();
        scene.remove(node.mesh);
      });
    };
  }, []);
  
  return <div ref={canvasRef} className="canvas-container"></div>;
}
