import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import logo from "@/assets/logo.png";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F8F7F4] flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center px-4">
          {/* Logo */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white shadow-lg p-4">
            <img src={logo} alt="ASSO S.L.A.V.É." className="w-full h-full object-contain" />
          </div>
          
          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-[#0055A4] to-[#D85D28] bg-clip-text text-transparent mb-4">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-[#003D6B] mb-4">
            Page Not Found
          </h2>
          
          <p className="text-[#6B7280] text-lg max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0055A4] to-[#003D6B] text-white font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: '0 8px 24px rgba(0,85,164,0.35)' }}
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0055A4] text-[#0055A4] font-bold px-8 py-4 rounded-full hover:bg-[#0055A4] hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
