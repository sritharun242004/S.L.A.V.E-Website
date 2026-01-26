import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  label: string;
  icon?: React.ReactNode;
  bgColor?: string;
}

export const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "",
  className = "",
  label,
  icon,
  bgColor = "bg-gradient-hero"
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0
      } : {}}
      transition={{ 
        duration: 0.6,
        delay: 0.2
      }}
      className={`text-center p-6 rounded-xl ${bgColor} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${className}`}
    >
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      <motion.div 
        className="text-3xl lg:text-4xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ 
          duration: 0.5, 
          delay: 0.3
        }}
      >
        {prefix}{count}{suffix}
      </motion.div>
      <motion.div 
        className="text-lg font-medium opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 0.9, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};