import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import {
  Heart, Users, BookOpen, ArrowRight, Briefcase,
  Home, HandHelping, Baby, ShieldCheck, Library,
  UserPlus, GraduationCap, Scale, Wrench, ChevronLeft, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

// Hero image
import heroImage from "@/assets/dignity/team-meeting.jpeg";

// Section images
import elderlyVisitFlowers from "@/assets/dignity/elderly-visit-flowers.jpeg";
import elderlySocialVisit from "@/assets/dignity/elderly-social-visit.jpeg";
import elderlyWheelchair from "@/assets/dignity/elderly-wheelchair.jpeg";
import elderlyMoving from "@/assets/dignity/elderly-moving.jpeg";
import elderlyReading from "@/assets/dignity/elderly-reading.jpeg";
import elderlyRepairs from "@/assets/dignity/elderly-repairs.jpeg";
import elderlyPortrait from "@/assets/dignity/elderly-portrait.jpeg";
import intergenerationalDining from "@/assets/dignity/intergenerational-dining.jpeg";
import familyPark from "@/assets/dignity/family-park.jpeg";
import familyPicnic from "@/assets/dignity/family-picnic.jpeg";
import womenSupport from "@/assets/dignity/women-support.jpg";
import furnitureBefore from "@/assets/dignity/furniture-before.jpeg";
import furnitureRepair from "@/assets/dignity/furniture-repair.jpeg";
import furnitureRestored from "@/assets/dignity/furniture-restored.jpeg";
import professionalTraining from "@/assets/dignity/professional-training.jpeg";
import cinemaEvent from "@/assets/dignity/cinema-event.jpg";
import classroomPresentation from "@/assets/dignity/classroom-presentation.jpeg";
import exhibitionVisit from "@/assets/dignity/exhibition-visit.jpeg";
import cinemaPresentation from "@/assets/dignity/cinema-presentation.jpeg";
import cinemaAudience from "@/assets/dignity/cinema-audience.jpeg";
import groupVisit from "@/assets/dignity/group-visit.jpeg";
import globe from "@/assets/dignity/globe.jpeg";
import studentStudying from "@/assets/dignity/student-studying.jpeg";

const Dignity = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const galleryImages = [
    { src: elderlySocialVisit, alt: t('dignity.gallery.alt.social_visit') },
    { src: intergenerationalDining, alt: t('dignity.gallery.alt.dining') },
    { src: classroomPresentation, alt: t('dignity.gallery.alt.classroom') },
    { src: groupVisit, alt: t('dignity.gallery.alt.group_visit') },
    { src: cinemaAudience, alt: t('dignity.gallery.alt.cinema') },
    { src: familyPicnic, alt: t('dignity.gallery.alt.family') },
    { src: furnitureRestored, alt: t('dignity.gallery.alt.furniture') },
    { src: studentStudying, alt: t('dignity.gallery.alt.studying') },
    { src: exhibitionVisit, alt: t('dignity.gallery.alt.exhibition') },
    { src: cinemaEvent, alt: t('dignity.gallery.alt.event') },
    { src: globe, alt: t('dignity.gallery.alt.globe') },
    { src: cinemaPresentation, alt: t('dignity.gallery.alt.presentation') },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const actionAreas = [
    {
      id: 'elderly',
      icon: Heart,
      color: '#EF4444',
      bg: 'bg-[#FEF2F2]',
      border: 'border-[#EF4444]/20',
      image: elderlyVisitFlowers,
      secondImage: elderlyWheelchair,
    },
    {
      id: 'children',
      icon: Baby,
      color: '#0055A4',
      bg: 'bg-[#EFF6FF]',
      border: 'border-[#0055A4]/20',
      image: familyPark,
      secondImage: familyPicnic,
    },
    {
      id: 'women',
      icon: ShieldCheck,
      color: '#8B5CF6',
      bg: 'bg-[#F5F3FF]',
      border: 'border-[#8B5CF6]/20',
      image: womenSupport,
    },
    {
      id: 'library',
      icon: Library,
      color: '#D85D28',
      bg: 'bg-[#FFF7ED]',
      border: 'border-[#D85D28]/20',
      image: studentStudying,
    },
  ];

  const currentProjects = [
    {
      id: 'intergenerational',
      icon: UserPlus,
      color: '#0055A4',
      image: intergenerationalDining,
    },
    {
      id: 'refugees',
      icon: Heart,
      color: '#EF4444',
      image: familyPark,
    },
    {
      id: 'women_project',
      icon: Scale,
      color: '#8B5CF6',
      image: womenSupport,
    },
    {
      id: 'professional',
      icon: Briefcase,
      color: '#D85D28',
      image: professionalTraining,
    },
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
      <section className="relative min-h-[550px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={t('dignity.hero.title1') + ' ' + t('dignity.hero.title2')}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,61,107,0.94)] via-[rgba(0,61,107,0.88)] to-[rgba(0,61,107,0.82)]" />
        <div className="absolute inset-0 bg-[rgba(139,92,246,0.08)]" />

        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-[#F8F7F4]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[rgba(139,92,246,0.2)] border border-[rgba(139,92,246,0.3)] mb-6">
              <Heart className="w-4 h-4 text-[#C4B5FD]" />
              <span className="text-sm font-semibold text-white">
                {t('dignity.hero.badge')}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              {t('dignity.hero.title1')}{' '}
              <span className="bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] bg-clip-text text-transparent">
                {t('dignity.hero.title2')}
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              {t('dignity.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Visual */}
              <div className="fade-in-up flex justify-center">
                <div className="relative w-72 h-72 rounded-[40px] flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))',
                    border: '2px solid rgba(139,92,246,0.2)'
                  }}
                >
                  <div className="absolute inset-4 rounded-[32px] overflow-hidden"
                    style={{ boxShadow: '0 25px 60px rgba(139,92,246,0.35)' }}
                  >
                    <img src={globe} alt="" className="w-full h-full object-cover" />
                  </div>

                  <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Heart className="w-7 h-7 text-[#EF4444]" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Users className="w-7 h-7 text-[#0055A4]" />
                  </div>
                  <div className="absolute top-1/2 -right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <HandHelping className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="fade-in-up">
                <div className="inline-block px-5 py-2 rounded-full bg-[rgba(139,92,246,0.1)] mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5CF6]">
                    {t('dignity.intro.badge')}
                  </span>
                </div>
                <h2 className="text-4xl font-extrabold text-[#003D6B] mb-6">
                  {t('dignity.intro.title')}
                </h2>
                <p className="text-lg text-[#4B5563] leading-relaxed">
                  {t('dignity.intro.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordination Section */}
      <section className="py-12 bg-[#F8F7F4] border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm">
            <Users className="w-5 h-5 text-[#8B5CF6]" />
            <span className="font-bold text-[#003D6B] tracking-wide uppercase text-sm">
              {t('dignity.coordination.label')}
            </span>
          </div>
        </div>
      </section>

      {/* Coordination Image */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto fade-in-up">
            <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100">
              <img
                src={heroImage}
                alt={t('dignity.coordination.image_alt')}
                className="w-full h-[350px] object-cover"
              />
            </div>
            <p className="text-center text-[#6B7280] mt-4 italic text-sm">
              {t('dignity.coordination.caption')}
            </p>
          </div>
        </div>
      </section>

      {/* Action Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-5 py-2 rounded-full bg-[rgba(139,92,246,0.1)] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5CF6]">
                  {t('dignity.actions.badge')}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#003D6B] mb-4">
                {t('dignity.actions.title')}
              </h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                {t('dignity.actions.subtitle')}
              </p>
            </div>

            <div className="space-y-20">
              {actionAreas.map((area, index) => {
                const Icon = area.icon;
                const isReversed = index % 2 !== 0;
                const bulletPoints = t(`dignity.actions.${area.id}.bullets`, { returnObjects: true }) as string[];

                return (
                  <div key={area.id} className={`fade-in-up grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
                    {/* Image Side */}
                    <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                          <img
                            src={area.image}
                            alt={t(`dignity.actions.${area.id}.title`)}
                            className="w-full h-[320px] object-cover"
                          />
                        </div>
                        {area.secondImage && (
                          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white hidden md:block">
                            <img
                              src={area.secondImage}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                      {area.id === 'women' && (
                        <p className="text-center text-[#6B7280] mt-4 italic text-sm">
                          {t('dignity.women_caption')}
                        </p>
                      )}
                    </div>

                    {/* Content Side */}
                    <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${area.color}, ${area.color}dd)`,
                            boxShadow: `0 8px 25px ${area.color}40`
                          }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#003D6B]">
                          {t(`dignity.actions.${area.id}.title`)}
                        </h3>
                      </div>

                      <ul className="space-y-3">
                        {bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ background: `${area.color}20` }}
                            >
                              <div className="w-2 h-2 rounded-full" style={{ background: area.color }} />
                            </div>
                            <span className="text-[#4B5563] leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Furniture Restoration Showcase */}
      <section className="py-24 bg-gradient-to-b from-[#EFF6FF] to-[#E8F4FF]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 fade-in-up">
              <div className="inline-block px-5 py-2 rounded-full bg-[rgba(0,85,164,0.1)] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0055A4]">
                  {t('dignity.restoration.badge')}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D6B] mb-4">
                {t('dignity.restoration.title')}
              </h2>
              <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                {t('dignity.restoration.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 fade-in-up">
              {[
                { img: furnitureBefore, label: t('dignity.restoration.before') },
                { img: furnitureRepair, label: t('dignity.restoration.during') },
                { img: furnitureRestored, label: t('dignity.restoration.after') },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-[#003D6B] shadow-md">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-5 py-2 rounded-full bg-[rgba(239,68,68,0.1)] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#EF4444]">
                  {t('dignity.projects.badge')}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#003D6B] mb-4">
                {t('dignity.projects.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {currentProjects.map((project, index) => {
                const Icon = project.icon;
                const bulletPoints = t(`dignity.projects.${project.id}.bullets`, { returnObjects: true }) as string[];

                return (
                  <Card
                    key={project.id}
                    className="fade-in-up overflow-hidden rounded-3xl border-2 border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={t(`dignity.projects.${project.id}.title`)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                            boxShadow: `0 6px 20px ${project.color}30`
                          }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#003D6B]">
                          {t(`dignity.projects.${project.id}.title`)}
                        </h3>
                      </div>

                      <p className="text-[#4B5563] mb-4 leading-relaxed">
                        {t(`dignity.projects.${project.id}.description`)}
                      </p>

                      <ul className="space-y-2">
                        {bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6B7280]">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: project.color }} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-gradient-to-br from-[#003D6B] via-[#002D4F] to-[#001E33] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-[#8B5CF6] opacity-10 blur-[120px] top-0 right-0" />
          <div className="absolute w-96 h-96 rounded-full bg-[#EF4444] opacity-10 blur-[120px] bottom-0 left-0" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 fade-in-up">
              <div className="inline-block px-5 py-2 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  {t('dignity.gallery.badge')}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                {t('dignity.gallery.title')}
              </h2>
            </div>

            {/* Carousel */}
            <div className="relative fade-in-up">
              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[450px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-white w-8'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto fade-in-up">
            <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-[#003D6B] mb-6">
                {t('dignity.disclaimer.title')}
              </h3>
              <div className="space-y-4 text-[#4B5563] leading-relaxed">
                <p>{t('dignity.disclaimer.text1')}</p>
                <p>{t('dignity.disclaimer.text2')}</p>
                <p>{t('dignity.disclaimer.text3')}</p>
                <p>{t('dignity.disclaimer.text4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] relative overflow-hidden">
        <div className="cta-wave-pattern absolute inset-0" />

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
            {t('dignity.cta.title')}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            {t('dignity.cta.description')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#8B5CF6] font-bold px-10 py-4 rounded-full hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.25)' }}
          >
            {t('dignity.cta.button')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dignity;
