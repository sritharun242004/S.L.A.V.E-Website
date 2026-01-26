import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [animationPhase, setAnimationPhase] = useState<'logo' | 'text' | 'fadeout'>('logo');

  useEffect(() => {
    // Phase 1: Logo animation (0-1.5s)
    const textTimer = setTimeout(() => {
      setAnimationPhase('text');
    }, 1500);

    // Phase 2: Fade out (3.5s)
    const fadeoutTimer = setTimeout(() => {
      setAnimationPhase('fadeout');
    }, 3500);

    // Complete (4.5s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeoutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#003D6B] via-[#002D4F] to-[#001E33] transition-opacity duration-1000 ${
        animationPhase === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              backgroundColor: i % 2 === 0 
                ? `rgba(0, 85, 164, ${Math.random() * 0.3 + 0.1})`
                : `rgba(239, 68, 68, ${Math.random() * 0.2 + 0.1})`,
              animation: `particleFloat ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Railway Track Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 100px,
                rgba(255,255,255,0.1) 100px,
                rgba(255,255,255,0.1) 105px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 30px,
                rgba(239,68,68,0.2) 30px,
                rgba(239,68,68,0.2) 35px
              )
            `,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <div 
          className={`mb-8 transition-all duration-1000 ${
            animationPhase === 'logo' 
              ? 'logo-scale-in' 
              : 'logo-pulse'
          }`}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div 
              className="absolute inset-0 rounded-3xl bg-white/20 blur-3xl animate-pulse-glow"
              style={{ transform: 'scale(1.5)' }}
            />
            
            {/* Logo Image */}
            <img 
              src={logo} 
              alt="ASSO S.L.A.V.É." 
              className="h-40 md:h-52 w-auto object-contain relative z-10 drop-shadow-2xl bg-white rounded-2xl p-4"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className={`transition-all duration-1000 ${
          animationPhase !== 'logo' ? 'bloom-content-animation' : 'opacity-0'
        }`}>
          {/* Association Name */}
          <h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            ASSO S.L.A.V.É.
          </h1>

          {/* Tagline */}
          <p 
            className="text-lg md:text-xl text-[#EF4444] font-medium mb-6"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Savoir • Langue • Art • Voyage • Échange
          </p>

          {/* Motto */}
          <p 
            className="text-sm md:text-base text-white/70 max-w-md italic"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            The meeting of cultures is a spark capable of transforming the world within us and around us.
          </p>
        </div>

        {/* Loading indicator */}
        <div className={`mt-12 transition-all duration-500 ${
          animationPhase !== 'logo' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#EF4444]"
                style={{
                  animation: 'bounce 1.4s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          40% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, -30px);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
