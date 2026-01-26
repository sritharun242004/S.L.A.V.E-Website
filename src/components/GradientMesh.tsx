import { useEffect, useRef } from 'react';

export const GradientMesh = () => {
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.0005;
      
      const x1 = 20 + Math.sin(time) * 5;
      const y1 = 50 + Math.cos(time * 0.8) * 5;
      
      const x2 = 80 + Math.cos(time * 1.2) * 5;
      const y2 = 80 + Math.sin(time * 0.9) * 5;
      
      const x3 = 40 + Math.sin(time * 1.1) * 5;
      const y3 = 20 + Math.cos(time) * 5;

      mesh.style.background = `
        radial-gradient(circle at ${x1}% ${y1}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
        radial-gradient(circle at ${x2}% ${y2}%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
        radial-gradient(circle at ${x3}% ${y3}%, rgba(245, 158, 11, 0.08) 0%, transparent 40%)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      ref={meshRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{
        filter: 'blur(60px)',
        zIndex: 0,
      }}
    />
  );
};
