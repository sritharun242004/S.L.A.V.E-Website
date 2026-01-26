import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, Mail, MapPin, Send, Clock, Calendar, 
  FileText, Building, CheckCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-faculty-connect.jpg";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+33 6 42 00 12 80",
      href: "tel:+33642001280",
      color: "#0055A4"
    },
    {
      icon: Mail,
      label: "Email",
      value: "asso.slave@gmail.com",
      href: "mailto:asso.slave@gmail.com",
      color: "#EF4444"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Université Bordeaux Montaigne, Bordeaux, France",
      href: "#",
      color: "#0055A4"
    }
  ];

  const legalInfo = [
    { icon: Calendar, label: "Registration date", value: "16 June 2007" },
    { icon: Building, label: "Registered office", value: "Université Bordeaux Montaigne" },
    { icon: FileText, label: "Association number", value: "W332004231" },
    { icon: FileText, label: "SIRET", value: "928 819 077 00019" }
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
      <section className="relative min-h-[450px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Contact Us"
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
              <Mail className="w-4 h-4 text-[#EF4444]" />
              <span className="text-sm font-semibold text-white">
                {t('contact.hero.badge')}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              {t('contact.hero.title1')}{' '}
              <span className="bg-gradient-to-r from-[#EF4444] to-[#F87171] bg-clip-text text-transparent">
                {t('contact.hero.title2')}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-white/90 max-w-2xl" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#F8F7F4]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="fade-in-up">
                <Card className="p-8 md:p-10 bg-white border-2 border-gray-100 rounded-3xl shadow-lg">
                  <h2 className="text-2xl font-bold text-[#003D6B] mb-8">
                    {t('contact.form.title')}
                  </h2>
                  
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#003D6B] mb-2">
                        {t('contact.form.success')}
                      </h3>
                      <p className="text-[#6B7280]">We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#003D6B] mb-2">
                          {t('contact.form.name')}
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contact.form.name_placeholder')}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-[#003D6B] mb-2">
                          {t('contact.form.email')}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contact.form.email_placeholder')}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-[#003D6B] mb-2">
                          {t('contact.form.subject')}
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder={t('contact.form.subject_placeholder')}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-[#003D6B] mb-2">
                          {t('contact.form.message')}
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t('contact.form.message_placeholder')}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all resize-none"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#0055A4] to-[#003D6B] text-white font-bold py-4 rounded-full flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{ boxShadow: '0 8px 24px rgba(0,85,164,0.35)' }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            {t('contact.form.sending')}
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            {t('contact.form.submit')}
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </Card>
              </div>
              
              {/* Contact Info & Legal */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="fade-in-up">
                  <h2 className="text-2xl font-bold text-[#003D6B] mb-6">
                    {t('contact.info.title')}
                  </h2>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <a
                          key={index}
                          href={info.href}
                          className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#0055A4]/30 hover:shadow-lg transition-all duration-300 group"
                        >
                          <div 
                            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                            style={{ 
                              background: `linear-gradient(135deg, ${info.color}, ${info.color}cc)`,
                              boxShadow: `0 8px 20px ${info.color}33`
                            }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-[#6B7280] font-medium">{info.label}</p>
                            <p className="text-lg font-semibold text-[#003D6B] group-hover:text-[#0055A4] transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
                
                {/* Legal Information */}
                <div className="fade-in-up" style={{ animationDelay: '150ms' }}>
                  <h2 className="text-2xl font-bold text-[#003D6B] mb-6">
                    {t('contact.legal.title')}
                  </h2>
                  
                  <Card className="p-6 bg-gradient-to-br from-[#EFF6FF] to-white border-2 border-[#0055A4]/10 rounded-2xl">
                    <div className="space-y-4">
                      {legalInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                          <div key={index} className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-[#0055A4]" />
                            <span className="text-[#6B7280]">{info.label}:</span>
                            <span className="font-semibold text-[#003D6B]">{info.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </div>
                
                {/* Additional Info Card */}
                <Card className="fade-in-up p-6 bg-gradient-to-br from-[#003D6B] to-[#002D4F] rounded-2xl text-white" style={{ animationDelay: '300ms' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#EF4444]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Since 2007</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        ASSO S.L.A.V.É. has been bringing together people from diverse backgrounds around creative, educational, and sustainable projects for over 17 years.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
