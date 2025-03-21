
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import BookingSection from '../components/BookingSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Setup scroll animation observer
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    // Lazy loading for images
    const lazyLoadImages = () => {
      const lazyImages = document.querySelectorAll('.lazy-image');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.addEventListener('load', () => {
                img.classList.add('loaded');
              });
              imageObserver.unobserve(img);
            }
          }
        });
      });
      
      lazyImages.forEach(image => {
        imageObserver.observe(image);
      });
    };
    
    animateOnScroll();
    lazyLoadImages();
    
    // Update document title
    document.title = 'Eduardo Callejo | Osteopatía en Madrid';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Osteopatía especializada en Madrid. Tratamientos personalizados para mejorar tu calidad de vida. Reserva tu cita online.');
    }
    
    // Add preload for critical images - fix paths for GitHub Pages
    const preloadImages = [
      './lovable-uploads/156dd5a9-3266-49ff-bb5f-c42cd9becceb.png',
      './lovable-uploads/b5c22267-f7a1-4ba2-a30a-65be8b1e73a7.png',
      './lovable-uploads/d4003df2-a531-443f-b89b-cf2e90f85a11.png'
    ];
    
    preloadImages.forEach(imageUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageUrl;
      document.head.appendChild(link);
    });
    
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
        <BookingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
