import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Train, Film, Compass, Users, Target, CheckCircle, ArrowRight,
  GraduationCap, Globe, BookOpen, Video, Map, MessageCircle, 
  Presentation, Building, UserCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-vlsi-training.jpg";

const Projects = () => {
  const { t } = useTranslation();

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

  const objectives = t('projects.objectives.list', { returnObjects: true }) as string[];
  const expectedResults = t('projects.results.list', { returnObjects: true }) as string[];
  
  const curators = [
    { name: "Dirk C. Moosmayer", initials: "DM" },
    { name: "Feriel Sayadi", initials: "FS" },
    { name: "Antoine Ertle", initials: "AE" },
    { name: "Daria Tsukanova", initials: "DT" },
    { name: "Johannes (Jan) Schaaper", initials: "JS" },
    { name: "Kristian Feigelson", initials: "KF" }
  ];

  const partners = [
    "Université Bordeaux Montaigne",
    "KEDGE Business School",
    "CNAM Nouvelle-Aquitaine",
    "ILERI",
    "Université Sorbonne Nouvelle – Paris 3"
  ];

  const phase1Students = ["KEDGE Business School", "CNAM Nouvelle-Aquitaine", "IAE Bordeaux"];
  const phase2Students = ["Public or private middle schools", "SEGPA and ULIS classes welcome"];

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <Header />

      <style>{`
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
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[550px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Rails of Time Project"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,61,107,0.94)] via-[rgba(0,61,107,0.88)] to-[rgba(0,61,107,0.82)]" />
        <div className="absolute inset-0 bg-[rgba(216,93,40,0.08)]" />
        
        {/* Railway Track Pattern */}
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
                )
              `,
            }}
          />
        </div>
        
        {/* Smooth Fade Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-[#F8F7F4]" />
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[rgba(216,93,40,0.2)] border border-[rgba(216,93,40,0.3)] mb-6">
              <GraduationCap className="w-4 h-4 text-[#EF4444]" />
              <span className="text-sm font-semibold text-white">
                {t('projects.hero.badge')}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              {t('projects.hero.title1')}{' '}
              <span className="bg-gradient-to-r from-[#EF4444] to-[#F87171] bg-clip-text text-transparent">
                {t('projects.hero.title2')}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-white/90 max-w-3xl" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              {t('projects.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-24 bg-[#F8F7F4]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Visual */}
              <div className="fade-in-up flex justify-center">
                <div 
                  className="relative w-72 h-72 rounded-[40px] flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(216,93,40,0.15), rgba(216,93,40,0.05))',
                    border: '2px solid rgba(216,93,40,0.2)'
                  }}
                >
                  <div 
                    className="absolute inset-4 rounded-[32px] flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                      boxShadow: '0 25px 60px rgba(216,93,40,0.35)'
                    }}
                  >
                    <GraduationCap className="w-28 h-28 text-white" strokeWidth={1.5} />
                  </div>
                  
                  {/* Floating icons */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Film className="w-7 h-7 text-[#0055A4]" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Compass className="w-7 h-7 text-[#EF4444]" />
                  </div>
                  <div className="absolute top-1/2 -right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Map className="w-6 h-6 text-[#0055A4]" />
                  </div>
                </div>
              </div>
              
              {/* Right - Content */}
              <div className="fade-in-up">
                <h2 className="text-4xl font-extrabold text-[#003D6B] mb-6">
                  {t('projects.about.title')}
                </h2>
                
                <div className="space-y-5 text-lg text-[#4B5563] leading-relaxed">
                  <p>{t('projects.about.text1')}</p>
                  <p>{t('projects.about.text2')}</p>
                  <p>{t('projects.about.text3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-5 py-2 rounded-full bg-[rgba(0,85,164,0.1)] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0055A4]">Goals</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#003D6B] mb-4">
                {t('projects.objectives.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 fade-in-up">
              {objectives.map((objective, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: index % 2 === 0 ? 'linear-gradient(135deg, #0055A4, #003D6B)' : 'linear-gradient(135deg, #EF4444, #DC2626)',
                    }}
                  >
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[#4B5563] text-lg">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-24 bg-gradient-to-b from-[#EFF6FF] to-[#E8F4FF]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-5 py-2 rounded-full bg-[rgba(0,85,164,0.1)] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0055A4]">Phases</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#003D6B] mb-4">
                {t('projects.outline.title')}
              </h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                {t('projects.outline.description')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Phase 1 */}
              <Card className="fade-in-up p-8 bg-white border-2 border-[#0055A4]/20 rounded-3xl hover:shadow-xl transition-all duration-400">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, #0055A4, #003D6B)',
                      boxShadow: '0 8px 24px rgba(0,85,164,0.3)'
                    }}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#0055A4] uppercase tracking-wider">Phase 1</span>
                    <h3 className="text-2xl font-bold text-[#003D6B]">{t('projects.phase1.subtitle')}</h3>
                  </div>
                </div>
                
                <p className="text-[#4B5563] mb-6 leading-relaxed">
                  {t('projects.phase1.description')}
                </p>
                
                <div className="bg-[#EFF6FF] rounded-xl p-4 mb-6 border-l-4 border-[#0055A4]">
                  <p className="text-[#003D6B] font-medium italic">
                    {t('projects.phase1.highlight')}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-[#003D6B] uppercase tracking-wider mb-4">
                    {t('projects.phase1.students_title')}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {phase1Students.map((student, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-[#0055A4]/10 text-[#0055A4] rounded-full text-sm font-medium"
                      >
                        {student}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Phase 2 */}
              <Card className="fade-in-up p-8 bg-white border-2 border-[#EF4444]/20 rounded-3xl hover:shadow-xl transition-all duration-400" style={{ animationDelay: '150ms' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                      boxShadow: '0 8px 24px rgba(216,93,40,0.3)'
                    }}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#EF4444] uppercase tracking-wider">Phase 2</span>
                    <h3 className="text-2xl font-bold text-[#003D6B]">{t('projects.phase2.subtitle')}</h3>
                  </div>
                </div>
                
                <p className="text-[#4B5563] mb-6 leading-relaxed">
                  {t('projects.phase2.description')}
                </p>
                
                <div>
                  <h4 className="text-sm font-bold text-[#003D6B] uppercase tracking-wider mb-4">
                    {t('projects.phase2.students_title')}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {phase2Students.map((student, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-[#EF4444]/10 text-[#EF4444] rounded-full text-sm font-medium"
                      >
                        {student}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-5 py-2 rounded-full bg-[rgba(216,93,40,0.1)] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#EF4444]">Outcomes</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#003D6B] mb-4">
                {t('projects.results.title')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up">
              {[
                { icon: Video, text: expectedResults[0] },
                { icon: Map, text: expectedResults[1] },
                { icon: BookOpen, text: expectedResults[2] },
                { icon: MessageCircle, text: expectedResults[3] },
                { icon: Presentation, text: expectedResults[4] }
              ].map((result, index) => {
                const Icon = result.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ 
                        background: index % 2 === 0 ? 'linear-gradient(135deg, #0055A4, #003D6B)' : 'linear-gradient(135deg, #EF4444, #DC2626)',
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-[#003D6B] font-medium">{result.text}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Curators Section */}
      <section className="py-24 bg-gradient-to-br from-[#003D6B] via-[#002D4F] to-[#001E33] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-[#0055A4] opacity-10 blur-[120px] top-0 right-0" />
          <div className="absolute w-96 h-96 rounded-full bg-[#EF4444] opacity-10 blur-[120px] bottom-0 left-0" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-5 py-2 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                {t('projects.curators.title')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up">
              {curators.map((curator, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl hover:-translate-y-2 hover:bg-white/15 transition-all duration-300 text-center"
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white"
                    style={{ 
                      background: index % 2 === 0 ? 'linear-gradient(135deg, #0055A4, #003D6B)' : 'linear-gradient(135deg, #EF4444, #DC2626)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                    }}
                  >
                    {curator.initials}
                  </div>
                  <h3 className="text-lg font-bold text-white">{curator.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Partners */}
      <section className="py-24 bg-[#F8F7F4]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-5 py-2 rounded-full bg-[rgba(0,85,164,0.1)] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0055A4]">Partners</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#003D6B] mb-4">
                {t('projects.partners.title')}
              </h2>
            </div>

            {/* Partner Carousel */}
            <div className="relative overflow-hidden py-8 fade-in-up">
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#F8F7F4] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#F8F7F4] to-transparent z-10 pointer-events-none" />
              
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -(280 + 32) * partners.length],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                }}
                style={{ width: 'max-content' }}
              >
                {/* First set */}
                {partners.map((partner, index) => (
                  <motion.div
                    key={`partner-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-[280px] h-[120px] bg-white rounded-2xl border-2 border-gray-100 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 px-6"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-center">
                      <Building className="w-10 h-10 text-[#0055A4] mx-auto mb-3" />
                      <p className="font-semibold text-[#003D6B] text-sm leading-tight">
                        {partner}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {/* Duplicate sets for seamless loop */}
                {partners.map((partner, index) => (
                  <motion.div
                    key={`partner-dup-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-[280px] h-[120px] bg-white rounded-2xl border-2 border-gray-100 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 px-6"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-center">
                      <Building className="w-10 h-10 text-[#0055A4] mx-auto mb-3" />
                      <p className="font-semibold text-[#003D6B] text-sm leading-tight">
                        {partner}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {partners.map((partner, index) => (
                  <motion.div
                    key={`partner-dup2-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-[280px] h-[120px] bg-white rounded-2xl border-2 border-gray-100 hover:border-[#0055A4] hover:shadow-lg transition-all duration-300 px-6"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-center">
                      <Building className="w-10 h-10 text-[#0055A4] mx-auto mb-3" />
                      <p className="font-semibold text-[#003D6B] text-sm leading-tight">
                        {partner}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0055A4] to-[#003D6B] relative overflow-hidden">
        {/* Wave Pattern */}
        <div className="cta-wave-pattern absolute inset-0" />
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
            Want to Participate?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join our creative and educational projects. Contact us to learn more about partnership opportunities.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#0055A4] font-bold px-10 py-4 rounded-full hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.25)' }}
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
