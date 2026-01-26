import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Association from "./pages/Association";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import IntroScreen from "./components/IntroScreen";
import { useIntroAnimation } from "./hooks/useIntroAnimation";

// Import i18n
import "./i18n";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const { showIntro, showContent, handleIntroComplete } = useIntroAnimation(location.pathname);

  return (
    <>
      {/* Intro Screen - Only shows on home page first visit */}
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      
      {/* Main Application Content */}
      <div
        className={`min-h-screen transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/association" element={<Association />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
