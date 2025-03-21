
import { useRef } from 'react';

const BookingSection = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

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
            <div className="w-16 h-1 bg-osteo-green mx-auto mt-4 mb-6"></div>
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
            <div id="booking-container" className="w-full min-h-[600px] flex items-center justify-center">
              <p className="text-gray-500 text-lg">Sistema de reservas temporalmente no disponible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
