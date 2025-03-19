
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
        ${isScrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="font-serif text-2xl font-bold text-osteo-dark-blue hover:text-osteo-blue transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Eduardo Callejo
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <button onClick={() => scrollToSection('about')} className="nav-link">Sobre mí</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Servicios</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contacto</button>
          <button onClick={() => scrollToSection('booking')} className="btn btn-primary ml-4 px-6 py-2 rounded-full">
            Reservar Cita
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="w-6 h-6 text-osteo-dark-blue" /> : <Menu className="w-6 h-6 text-osteo-dark-blue" />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-smooth md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-6">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-osteo-dark-blue" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-8 p-8 h-full">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-xl font-medium text-osteo-dark-blue hover:text-osteo-blue transition-colors"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-xl font-medium text-osteo-dark-blue hover:text-osteo-blue transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-xl font-medium text-osteo-dark-blue hover:text-osteo-blue transition-colors"
            >
              Contacto
            </button>
            <button 
              onClick={() => scrollToSection('booking')} 
              className="btn btn-primary px-8 py-3 rounded-full text-lg"
            >
              Reservar Cita
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
