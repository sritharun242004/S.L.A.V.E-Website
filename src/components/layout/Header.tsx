import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.association'), href: "/association" },
    { name: t('nav.projects'), href: "/projects" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slave-blue-100 glass-morphism shadow-[0_2px_8px_rgba(0,85,164,0.08)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="h-16 w-16 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img 
                src={logo} 
                alt="ASSO S.L.A.V.É. Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-[#003D6B] group-hover:text-[#0055A4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                S.L.A.V.É.
              </span>
              <span className="text-[10px] text-[#EF4444] font-medium hidden sm:block">
                {t('header.tagline')}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-[#0055A4] relative",
                  location.pathname === item.href
                    ? "text-[#0055A4]"
                    : "text-[#003D6B]",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#EF4444] after:transition-all after:duration-300 hover:after:w-full",
                  location.pathname === item.href && "after:w-full"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="language-toggle hidden sm:flex">
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={cn(currentLanguage === 'en' && 'active')}
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage('fr')}
                className={cn(currentLanguage === 'fr' && 'active')}
              >
                FR
              </button>
            </div>

            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="sm:hidden p-2 rounded-full bg-[rgba(0,85,164,0.1)] text-[#0055A4] hover:bg-[rgba(0,85,164,0.2)] transition-colors"
              title="Toggle Language"
            >
              <Globe size={18} />
            </button>

            {/* CTA Button */}
            <button className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-[#0055A4] to-[#003D6B] text-white px-6 py-2.5 text-sm font-medium hover:shadow-[0_8px_24px_rgba(0,85,164,0.4)] hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_rgba(0,85,164,0.3)]">
              <Link to="/contact">{t('nav.contact')}</Link>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#0055A4] hover:text-[#003D6B] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-3 text-base font-medium rounded-lg transition-colors",
                    location.pathname === item.href
                      ? "bg-[rgba(0,85,164,0.1)] text-[#0055A4]"
                      : "text-[#003D6B] hover:bg-[rgba(0,85,164,0.05)] hover:text-[#0055A4]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center justify-center gap-2 pt-4 pb-2 border-t border-gray-100 mt-2">
                <span className="text-sm text-gray-500">Language:</span>
                <div className="language-toggle">
                  <button
                    onClick={() => {
                      i18n.changeLanguage('en');
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(currentLanguage === 'en' && 'active')}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('fr');
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(currentLanguage === 'fr' && 'active')}
                  >
                    FR
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full rounded-full bg-gradient-to-r from-[#0055A4] to-[#003D6B] text-white px-6 py-3 text-base font-medium shadow-[0_4px_14px_rgba(0,85,164,0.3)]">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('nav.contact')}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
