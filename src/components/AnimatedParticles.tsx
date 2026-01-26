import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  opacity: number;
  opacityDirection: number;
}

interface AnimatedParticlesProps {
  count?: number;
  className?: string;
}

export const AnimatedParticles = ({ count = 150, className = '' }: AnimatedParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const colors = [
      'rgba(59, 130, 246, 0.15)', // blue - 60%
      'rgba(59, 130, 246, 0.15)',
      'rgba(59, 130, 246, 0.15)',
      'rgba(59, 130, 246, 0.15)',
      'rgba(59, 130, 246, 0.15)',
      'rgba(59, 130, 246, 0.15)',
      'rgba(16, 185, 129, 0.12)', // green - 30%
      'rgba(16, 185, 129, 0.12)',
      'rgba(16, 185, 129, 0.12)',
      'rgba(245, 158, 11, 0.10)', // amber - 10%
    ];

    const sizes = [2, 2, 2, 3, 3, 4]; // Mix of 2px, 3px, 4px

    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.2 + 0.05, // 0.05 to 0.25
      opacityDirection: Math.random() > 0.5 ? 0.002 : -0.002,
    }));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update opacity (pulsing effect)
        particle.opacity += particle.opacityDirection;
        if (particle.opacity >= 0.25 || particle.opacity <= 0.05) {
          particle.opacityDirection *= -1;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Apply color with current opacity
        const colorMatch = particle.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+)/);
        if (colorMatch) {
          const [, r, g, b] = colorMatch;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
        }
        
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};