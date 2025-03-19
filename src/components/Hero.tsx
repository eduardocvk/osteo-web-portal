
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    
    const handleScroll = () => {
      if (!heroElement) return;
      const scrollPosition = window.scrollY;
      const parallaxValue = scrollPosition * 0.4;
      
      // Apply parallax effect to background
      heroElement.style.backgroundPositionY = `calc(50% + ${parallaxValue}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center clip-path-wave pt-20 pb-32 px-6 bg-cover bg-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 48, 71, 0.7), rgba(0, 48, 71, 0.7)), url("public/lovable-uploads/d4003df2-a531-443f-b89b-cf2e90f85a11.png")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div 
          className="animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-osteo-blue/20 text-white text-sm font-medium tracking-wider mb-6">
            OSTEOPATÍA · BIENESTAR
          </span>
        </div>
        
        <h1 
          className="text-white font-serif font-bold mb-6 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Recupera tu <span className="text-osteo-yellow">calidad de vida</span> con osteopatía especializada
        </h1>
        
        <p 
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Te ayudo a tratar el origen de tu dolor para que puedas recuperar tu bienestar y vivir sin limitaciones.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <button 
            onClick={scrollToBooking}
            className="btn bg-osteo-yellow hover:bg-osteo-orange text-osteo-dark-blue hover:text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300"
          >
            Reservar Consulta
          </button>
          <a 
            href="#services" 
            className="btn bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 rounded-full text-base font-medium transition-all duration-300"
          >
            Conocer servicios
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-bounce inline-block mb-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
