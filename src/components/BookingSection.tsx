
import { useEffect, useRef } from 'react';

const BookingSection = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="booking" className="section bg-osteo-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div
            ref={el => elementsRef.current[0] = el}
            className="animate-on-scroll"
          >
            <span className="section-subtitle">Reservas</span>
            <h2 className="section-title">Reserva tu Cita</h2>
            <div className="w-16 h-1 bg-osteo-blue mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              Utiliza nuestro sistema de reservas online para encontrar el día y la hora que mejor se adapte a tu agenda.
            </p>
          </div>
        </div>

        <div 
          ref={el => elementsRef.current[1] = el}
          className="animate-on-scroll"
        >
          <div className="bg-white shadow-medium rounded-2xl p-8">
            {/* Esta sección es donde se incluirá el script de reservas */}
            <div className="booking-container flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-xl font-semibold text-osteo-dark-blue mb-4">Sistema de Reservas</h3>
                <p className="text-gray-600 mb-6">
                  Aquí se integrará el sistema de reservas. Proximamente estará disponible.
                </p>
                <div className="animate-pulse inline-block">
                  <div className="h-8 w-40 bg-osteo-light-blue rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
