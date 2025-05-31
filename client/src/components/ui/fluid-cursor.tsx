import { useEffect, useRef } from 'react';

export function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    // Particle system
    const particles: Particle[] = [];
    const particleCount = 100;
    const maxVelocity = 2;
    const colors = ['#6E56CF', '#9E8CFC', '#D7C1FA', '#7CE2FE'];
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      
      constructor(x: number, y: number, size: number = 2) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * maxVelocity;
        this.vy = (Math.random() - 0.5) * maxVelocity;
        this.size = size;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.maxLife = 50 + Math.random() * 100;
        this.life = this.maxLife;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        
        // Fade out as life decreases
        return this.life > 0;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        const opacity = this.life / this.maxLife;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let isMouseMoving = false;
    let lastUpdate = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      // Create particles on mouse movement
      const now = Date.now();
      if (now - lastUpdate > 20) { // Limit particle creation rate
        createParticlesAtMouse(3);
        lastUpdate = now;
      }
    };
    
    const createParticlesAtMouse = (count: number) => {
      const speed = Math.sqrt(
        Math.pow(mouseX - lastMouseX, 2) + 
        Math.pow(mouseY - lastMouseY, 2)
      );
      
      // Only create particles if there is significant movement
      if (speed > 5) {
        for (let i = 0; i < count; i++) {
          // Create particles with size based on movement speed
          const size = Math.min(8, Math.max(2, speed / 15));
          particles.push(new Particle(mouseX, mouseY, size));
        }
      }
      
      lastMouseX = mouseX;
      lastMouseY = mouseY;
    };
    
    const animate = () => {
      // Semi-transparent clear for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        const stillAlive = particle.update();
        
        if (stillAlive) {
          particle.draw(ctx);
        } else {
          particles.splice(i, 1);
        }
      }
      
      // Create particles randomly for ambient effect
      if (Math.random() < 0.1 && particles.length < 300) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push(new Particle(x, y, 1));
      }
      
      requestAnimationFrame(animate);
    };
    
    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    // Set up event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 40 
      }}
    />
  );
}