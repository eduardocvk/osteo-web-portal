
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth px-6 sm:px-8 md:px-12 lg:px-16 py-4
        ${isScrolled ? 'bg-osteo-green/95 shadow-soft backdrop-blur-md' : 'bg-osteo-green'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img 
            src={isScrolled ? "public/lovable-uploads/156dd5a9-3266-49ff-bb5f-c42cd9becceb.png" : "public/lovable-uploads/156dd5a9-3266-49ff-bb5f-c42cd9becceb.png"} 
            alt="Eduardo Callejo Osteopatía Logo" 
            className="h-10 mr-2"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <button onClick={() => scrollToSection('about')} className="nav-link text-white hover:text-osteo-light-green">Sobre mí</button>
          <button onClick={() => scrollToSection('services')} className="nav-link text-white hover:text-osteo-light-green">Servicios</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link text-white hover:text-osteo-light-green">Contacto</button>
          <button onClick={() => scrollToSection('booking')} className="bg-white text-osteo-green hover:bg-osteo-light-green hover:text-osteo-dark-green ml-4 px-6 py-2 rounded-full transition-colors font-medium">
            Reserva Cita
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-osteo-green z-50 transition-transform duration-300 ease-smooth md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-6">
            <img 
              src="public/lovable-uploads/156dd5a9-3266-49ff-bb5f-c42cd9becceb.png" 
              alt="Eduardo Callejo Osteopatía Logo" 
              className="h-8"
            />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-8 p-8 h-full">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-xl font-medium text-white hover:text-osteo-light-green transition-colors"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-xl font-medium text-white hover:text-osteo-light-green transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-xl font-medium text-white hover:text-osteo-light-green transition-colors"
            >
              Contacto
            </button>
            <button 
              onClick={() => scrollToSection('booking')} 
              className="bg-white text-osteo-green hover:bg-osteo-light-green hover:text-osteo-dark-green px-8 py-3 rounded-full text-lg transition-colors font-medium"
            >
              Reserva Cita
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
