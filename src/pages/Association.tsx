import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { 
  GraduationCap, Globe, Lightbulb, Heart, Quote, BookOpen,
  Calendar, Award, Users, Target, Compass, Sparkles
} from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-about.jpg";

const Association = () => {
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

  const values = [
    {
      icon: GraduationCap,
      title: t('association.values.education.title'),
      description: t('association.values.education.description'),
      color: "#0055A4"
    },
    {
      icon: Globe,
      title: t('association.values.culture.title'),
      description: t('association.values.culture.description'),
      color: "#EF4444"
    },
    {
      icon: Lightbulb,
      title: t('association.values.creativity.title'),
      description: t('association.values.creativity.description'),
      color: "#0055A4"
    },
    {
      icon: Heart,
      title: t('association.values.sustainability.title'),
      description: t('association.values.sustainability.description'),
      color: "#EF4444"
    }
  ];

  const timelineEvents = [
    { year: "2007", title: "Foundation", description: "Founded at Université Bordeaux Montaigne" },
    { year: "2010", title: "In Ciné Veritas", description: "International short film competition launched" },
    { year: "2015", title: "Expansion", description: "Educational workshops and translation activities" },
    { year: "2020", title: "Digital Era", description: "Integration of digital media and AI" },
    { year: "2024", title: "Rails of Time", description: "Inter-university project launched" }
  ];

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
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,61,107,0.92)] via-[rgba(0,61,107,0.85)] to-[rgba(0,61,107,0.80)]" />
        <div className="absolute inset-0 bg-[rgba(0,85,164,0.1)]" />
        
        {/* Smooth Fade Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-[#F8F7F4]" />
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[rgba(216,93,40,0.15)] border border-[rgba(216,93,40,0.3)] mb-6">
              <BookOpen className="w-4 h-4 text-[#EF4444]" />
              <span className="text-sm font-semibold text-white">
                {t('association.hero.badge')}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              {t('association.hero.title1')}{' '}
              <span className="bg-gradient-to-r from-[#EF4444] to-[#F87171] bg-clip-text text-transparent">
                {t('association.hero.title2')}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-white/90 max-w-2xl" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              {t('association.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#F8F7F4]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in-up">
              <h2 className="text-4xl font-extrabold text-[#003D6B] mb-8">
                {t('association.about.title')}
              </h2>
              
              <div className="space-y-6 text-lg text-[#4B5563] leading-relaxed">
                <p>{t('association.about.text1')}</p>
                <p>{t('association.about.text2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-5 py-2 rounded-full bg-[rgba(0,85,164,0.1)] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0055A4]">Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#003D6B] mb-4">
                {t('association.history.title')}
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative fade-in-up">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0055A4] to-[#EF4444] rounded-full hidden md:block" />
              
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="p-6 bg-white border-2 border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 inline-block">
                        <div className="text-3xl font-extrabold text-[#0055A4] mb-2">{event.year}</div>
                        <h3 className="text-xl font-bold text-[#003D6B] mb-2">{event.title}</h3>
                        <p className="text-[#6B7280]">{event.description}</p>
                      </Card>
                    </div>
                    
                    <div className="hidden md:flex w-6 h-6 rounded-full bg-white border-4 border-[#0055A4] z-10" />
                    
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* History Text */}
            <div className="mt-20 space-y-6 text-lg text-[#4B5563] leading-relaxed max-w-4xl mx-auto fade-in-up">
              <p>{t('association.history.text1')}</p>
              <p>{t('association.history.text2')}</p>
              <p>{t('association.history.text3')}</p>
              <p>{t('association.history.text4')}</p>
              <p>{t('association.history.text5')}</p>
              <p>{t('association.history.text6')}</p>
              <p className="font-medium text-[#003D6B]">{t('association.history.text7')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-[#EFF6FF] to-[#E8F4FF]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block px-5 py-2 rounded-full bg-[rgba(0,85,164,0.1)] mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0055A4]">What We Stand For</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#003D6B] mb-4">
              {t('association.values.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="fade-in-up p-8 bg-white border-2 border-gray-100 rounded-3xl hover:-translate-y-3 hover:shadow-xl transition-all duration-400 text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ 
                      background: `linear-gradient(135deg, ${value.color}, ${value.color}cc)`,
                      boxShadow: `0 12px 30px ${value.color}40`
                    }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003D6B] mb-3">{value.title}</h3>
                  <p className="text-[#6B7280]">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-24 bg-gradient-to-br from-[#003D6B] via-[#002D4F] to-[#001E33] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-[#0055A4] opacity-10 blur-[120px] top-0 left-0" />
          <div className="absolute w-96 h-96 rounded-full bg-[#EF4444] opacity-10 blur-[120px] bottom-0 right-0" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="inline-block px-5 py-2 rounded-full bg-[rgba(216,93,40,0.2)] border border-[rgba(216,93,40,0.3)] mb-8">
              <span className="text-sm font-semibold text-[#EF4444]">
                {t('association.motto.title')}
              </span>
            </div>
            
            {/* Acronym */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#EF4444] mb-12" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              {t('association.motto.acronym')}
            </h2>
            
            {/* Quote */}
            <div className="relative">
              <Quote className="w-16 h-16 text-white/20 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                "{t('association.motto.quote')}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Association;
