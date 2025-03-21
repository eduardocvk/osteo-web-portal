
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="https://wa.me/34676435634"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-medium transition-all duration-300 ease-smooth ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute w-full h-full rounded-full animate-pulse-soft opacity-30"></div>
      <img 
        src="public/lovable-uploads/7d88020a-241f-4d9f-8935-fced3d1adfdc.png" 
        alt="WhatsApp" 
        className="w-16 h-16" 
      />
      <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 bg-osteo-dark-blue text-white text-xs font-bold rounded-full transform translate-x-1 -translate-y-1">1</span>
    </a>
  );
};

export default WhatsAppButton;
