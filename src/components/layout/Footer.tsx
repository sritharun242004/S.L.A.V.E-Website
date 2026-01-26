import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.association'), href: "/association" },
    { name: t('nav.projects'), href: "/projects" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#003D6B] via-[#002D4F] to-[#001E33] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={logo} 
                alt="ASSO S.L.A.V.É." 
                className="h-16 w-16 object-contain bg-white rounded-xl p-2"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">ASSO S.L.A.V.É.</h3>
                <p className="text-sm text-[#EF4444] font-medium">
                  {t('header.tagline')}
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md mb-6">
              {t('footer.description')}
            </p>
            
            {/* Social Links placeholder - can be added later */}
            <div className="flex gap-4">
              {/* Add social media icons here when needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              {t('footer.quick_links')}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#EF4444] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-[#EF4444] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#EF4444] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              {t('footer.contact_us')}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#EF4444] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+33642001280" 
                  className="text-white/80 hover:text-[#EF4444] transition-colors flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+33 6 42 00 12 80</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:asso.slave@gmail.com" 
                  className="text-white/80 hover:text-[#EF4444] transition-colors flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>asso.slave@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="text-white/80 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Université Bordeaux Montaigne<br />Bordeaux, France</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span>Reg: W332004231</span>
              <span>•</span>
              <span>SIRET: 928 819 077 00019</span>
              <span>•</span>
              <span>Since 2007</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
