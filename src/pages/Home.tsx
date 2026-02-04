import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Rocket, Calendar, Users, Building, TrendingUp, Award, MapPin,
  CheckCircle, ArrowRight, GraduationCap, BookOpen, Lightbulb,
  Globe, Train, Film, Compass, Heart, Sparkles, Layers, Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  const { t, i18n } = useTranslation();

  // Particle Background Component
  const ParticleBackground = ({ count = 100 }: { count?: number }) => {
    const particles = [];

    for (let i = 0; i < count; i++) {
      const size = Math.random() > 0.7 ? 4 : Math.random() > 0.4 ? 3 : 2;
      const colors = [
        'rgba(0, 85, 164, 0.15)',   // French Blue
        'rgba(239, 68, 68, 0.12)',  // French Red
        'rgba(0, 61, 107, 0.10)'    // Navy
      ];

      let color;
      const rand = Math.random();
      if (rand > 0.5) color = colors[0];
      else if (rand > 0.2) color = colors[1];
      else color = colors[2];

      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = 4 + Math.random() * 4;
      const delay = Math.random() * 5;
      const floatDistance = 15 + Math.random() * 10;

      particles.push(
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            left: `${left}%`,
            top: `${top}%`,
            animation: `float-particle ${duration}s ease-in-out ${delay}s infinite`,
            '--float-distance': `-${floatDistance}px`,
          } as React.CSSProperties}
        />
      );
    }

    return <div className="absolute inset-0 overflow-hidden">{particles}</div>;
  };

  // Gradient Mesh Component
  const GradientMesh = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.15] animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #0055A4 0%, transparent 70%)',
          left: '20%',
          top: '40%',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-[0.12] animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)',
          right: '15%',
          top: '60%',
          animationDelay: '5s',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-[0.10] animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #003D6B 0%, transparent 70%)',
          left: '50%',
          top: '20%',
          animationDelay: '10s',
        }}
      />
    </div>
  );

  // Partner universities
  const partners = [
    "Université Bordeaux Montaigne",
    "KEDGE Business School",
    "CNAM Nouvelle-Aquitaine",
    "IAE Bordeaux",
    "ILERI",
    "Université Sorbonne Nouvelle – Paris 3"
  ];

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <Header />

      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(var(--float-distance)); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -25px) scale(1.05); }
          66% { transform: translate(-25px, 15px) scale(0.95); }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
        
        .fade-in-up {
          opacity: 0;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 12px 40px rgba(0,85,164,0.5); }
          50% { box-shadow: 0 12px 60px rgba(0,85,164,0.7); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[750px] md:min-h-[750px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cultural Exchange"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,61,107,0.94)] via-[rgba(0,61,107,0.88)] to-[rgba(0,61,107,0.82)]" />
        <div className="absolute inset-0 bg-[rgba(0,85,164,0.12)]" />

        {/* Animated Particles */}
        <ParticleBackground count={120} />
        <GradientMesh />

        {/* Smooth Fade Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-b from-transparent to-[#F8F7F4]" />

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-[55%,45%] gap-12 items-center max-w-[1500px] mx-auto">
            {/* Left Side - Content */}
            <div style={{ transform: 'translateY(-58px)' }}>
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[rgba(239,68,68,0.15)] backdrop-blur-xl border border-[rgba(239,68,68,0.3)] mb-8 animate-[fade-in-up_0.7s_ease-out_0.2s_both]">
                <MapPin className="w-4 h-4 text-[#EF4444]" />
                <span className="text-sm md:text-base font-semibold text-white">
                  {t('home.hero.badge')}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-[fade-in-up_0.6s_ease-out_0.4s_both]"
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)', letterSpacing: '-0.03em' }}>
                <span className="text-white">{t('home.hero.title1')} </span>
                {i18n.language === 'fr' && <br />}
                <span className="bg-gradient-to-r from-[#EF4444] via-[#F87171] to-[#EF4444] bg-clip-text text-transparent">
                  {t('home.hero.title2')}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl font-medium text-white/90 mb-8 animate-[fade-in-up_0.8s_ease-out_0.6s_both] max-w-2xl"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
                {t('home.hero.subtitle')}
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 md:gap-8 mb-12 animate-[fade-in-up_0.6s_ease-out_0.8s_both]">
                {[
                  { icon: GraduationCap, text: "Education & Culture" },
                  { icon: Globe, text: "Intercultural Exchange" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-[#EF4444]" />
                      <span className="text-white/90 text-sm md:text-base font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mb-10 animate-[fade-in-up_0.6s_ease-out_1.2s_both]">
                <Link
                  to="/projects"
                  className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white text-lg font-bold px-14 py-6 rounded-full animate-pulse-glow hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                  style={{ boxShadow: '0 8px 24px rgba(239,68,68,0.4)' }}
                >
                  <GraduationCap className="w-6 h-6" />
                  {t('home.hero.cta_primary')}
                </Link>

                <Link
                  to="/association"
                  className="bg-white/10 backdrop-blur-md border-2 border-white text-white text-lg font-bold px-14 py-6 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                  style={{ boxShadow: '0 4px 12px rgba(255,255,255,0.2)' }}
                >
                  <BookOpen className="w-5 h-5" />
                  {t('home.hero.cta_secondary')}
                </Link>
              </div>

              {/* Trust Badge Line */}
              <div className="flex flex-wrap gap-6 text-sm text-white/80 font-medium animate-[fade-in-up_0.6s_ease-out_1.4s_both]">
                {["Since 2007", "6 Partner Universities", "Creative Projects", "Cultural Dialogue"].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#EF4444]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Floating Stats */}
            <div className="hidden lg:flex relative justify-center items-center p-16 min-h-[650px] max-w-[650px] mx-auto overflow-visible">
              {/* Central Icon */}
              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  top: '42%',
                  left: '11%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative transition-all duration-400 hover:-translate-y-1 hover:scale-105">
                  <img
                    src="/slave logo.png"
                    alt="S.L.A.V.É. Logo"
                    className="w-auto h-auto max-w-[280px] max-h-[280px] object-contain"
                  />
                </div>
              </div>

              {/* Floating Stat Card 1 - Years */}
            </div>
          </div>
        </div>
      </section>

      {/* Association Preview Section */}
      <section className="py-28 bg-[#F8F7F4]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <div className="fade-in-up">
                <div className="inline-block px-5 py-2 rounded-full bg-[rgba(0,85,164,0.1)] mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0055A4]">
                    {t('home.association_preview.badge')}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-[#003D6B] mb-6">
                  {t('home.association_preview.title')}
                </h2>

                <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                  {t('home.association_preview.description')}
                </p>

                <Link
                  to="/association"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0055A4] to-[#003D6B] text-white font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: '0 8px 24px rgba(0,85,164,0.35)' }}
                >
                  {t('home.association_preview.cta')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Right - Values Cards */}
              <div className="grid grid-cols-2 gap-6 fade-in-up">
                {[
                  { icon: GraduationCap, title: t('association.values.education.title'), color: "#0055A4" },
                  { icon: Globe, title: t('association.values.culture.title'), color: "#EF4444" },
                  { icon: Lightbulb, title: t('association.values.creativity.title'), color: "#0055A4" },
                  { icon: Heart, title: t('association.values.sustainability.title'), color: "#EF4444" },
                  { icon: Briefcase, title: t('association.values.industries.title'), color: "#0055A4" },
                  { icon: Rocket, title: t('association.values.entrepreneurship.title'), color: "#EF4444" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className="p-6 bg-white border-2 border-gray-100 rounded-2xl hover:-translate-y-2 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                          boxShadow: `0 8px 20px ${item.color}33`
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-[#003D6B]">{item.title}</h3>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Highlight - Rails of Time */}
      <section className="py-28 bg-gradient-to-br from-[#003D6B] via-[#002D4F] to-[#001E33] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#0055A4] opacity-[0.08] blur-[150px] top-0 left-0 animate-float-slow" />
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#EF4444] opacity-[0.06] blur-[150px] bottom-0 right-0 animate-float-slow" style={{ animationDelay: '5s' }} />
        </div>

        {/* Wave Pattern */}
        <div className="cta-wave-pattern absolute inset-0" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Visual */}
              <div className="flex justify-center fade-in-up">
                <div
                  className="relative w-80 h-80 rounded-[40px] flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.1))',
                    border: '2px solid rgba(239,68,68,0.3)'
                  }}
                >
                  <div
                    className="absolute inset-4 rounded-[32px] flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                      boxShadow: '0 30px 80px rgba(239,68,68,0.4)'
                    }}
                  >
                    <GraduationCap className="w-32 h-32 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20">
                    <Film className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20">
                    <Compass className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="text-white fade-in-up">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[rgba(239,68,68,0.2)] border border-[rgba(239,68,68,0.3)] mb-6">
                  <Sparkles className="w-4 h-4 text-[#EF4444]" />
                  <span className="text-sm font-semibold text-[#EF4444]">
                    {t('home.main_project.badge')}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                  {t('home.main_project.title')}
                </h2>

                <p className="text-xl text-white/85 leading-relaxed mb-8">
                  {t('home.main_project.description')}
                </p>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 bg-white text-[#003D6B] font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.25)' }}
                >
                  {t('home.main_project.cta')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Participants / Partners Section */}
      <section className="py-28 bg-gradient-to-b from-[#EFF6FF] to-[#E8F4FF] relative overflow-hidden">
        <ParticleBackground count={40} />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block px-5 py-2 rounded-full bg-[rgba(0,85,164,0.1)] mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0055A4]">
                {t('home.participants.badge')}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#003D6B] mb-4">
              {t('home.participants.title')}
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              {t('home.participants.subtitle')}
            </p>
          </div>

          {/* Partner Logo Carousel */}
          <div className="relative overflow-hidden mb-14 py-8">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#EFF6FF] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#EFF6FF] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -(250 + 32) * partners.length],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }}
              style={{ width: 'max-content' }}
            >
              {/* First set */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`partner-${index}`}
                  className="flex-shrink-0 flex items-center justify-center w-[250px] h-[100px] bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 px-6"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <p className="text-center font-semibold text-[#003D6B] text-sm leading-tight">
                    {partner}
                  </p>
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`partner-dup-${index}`}
                  className="flex-shrink-0 flex items-center justify-center w-[250px] h-[100px] bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 px-6"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <p className="text-center font-semibold text-[#003D6B] text-sm leading-tight">
                    {partner}
                  </p>
                </motion.div>
              ))}
              {/* Third set for extra smoothness */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`partner-dup2-${index}`}
                  className="flex-shrink-0 flex items-center justify-center w-[250px] h-[100px] bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 px-6"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <p className="text-center font-semibold text-[#003D6B] text-sm leading-tight">
                    {partner}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* View All Button */}
          <div className="text-center fade-in-up">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0055A4] to-[#003D6B] text-white text-lg font-bold px-12 py-5 rounded-full hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 8px 24px rgba(0,85,164,0.35)' }}
            >
              <Users className="w-5 h-5" />
              View All Partners
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0055A4] via-[#003D6B] to-[#002D4F] relative overflow-hidden">
        {/* Wave Pattern */}
        <div className="cta-wave-pattern absolute inset-0" />

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
          <div className="cta-shape cta-shape-3"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          {/* Icon Badge */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center animate-float-slow">
            <Globe className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight"
            style={{ textShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
            {t('cta.join_us')}
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('cta.join_description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#0055A4] text-lg font-bold px-12 py-5 rounded-full hover:-translate-y-1 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
              style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}
            >
              {t('cta.get_started')}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/association"
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white text-lg font-bold px-12 py-5 rounded-full hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              {t('cta.learn_more')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
