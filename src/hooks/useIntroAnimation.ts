import { useState, useEffect } from 'react';

export const useIntroAnimation = (pathname: string = '/') => {
  const [showIntro, setShowIntro] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if intro has been shown this session
    const introShown = sessionStorage.getItem('introShown');
    
    // Only show intro on home page and if not shown this session
    const isHomePage = pathname === '/' || pathname === '/home';
    
    if (!introShown && isHomePage) {
      // Show intro immediately
      setShowIntro(true);
      sessionStorage.setItem('introShown', 'true');
      // Don't show content yet - wait for intro to complete
      setShowContent(false);
    } else {
      // Intro already shown or not on home page - show content immediately
      setShowContent(true);
      setShowIntro(false);
    }
  }, [pathname]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  return { showIntro, showContent, handleIntroComplete };
};

