
import { useEffect, useRef } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    id: 1,
    title: "Teléfono",
    detail: "+34 676 435 634",
    icon: <Phone size={24} className="text-osteo-green" />,
  },
  {
    id: 2,
    title: "Dirección",
    detail: "Plaza de Santa Cristina 4, 28011, Madrid",
    icon: <MapPin size={24} className="text-osteo-green" />,
  },
  {
    id: 3,
    title: "Horario",
    detail: "Lun-Vie: 16:00-20:30",
    icon: <Clock size={24} className="text-osteo-green" />,
  },
];

const Contact = () => {
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
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div
            ref={el => elementsRef.current[0] = el}
            className="animate-on-scroll"
          >
            <span className="section-subtitle">Contacto</span>
            <h2 className="section-title">¿Hablamos?</h2>
            <div className="w-16 h-1 bg-osteo-green mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              Puedes contactar conmigo directamente o reservar tu cita online. Estoy aquí para resolver todas tus dudas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div 
            ref={el => elementsRef.current[1] = el}
            className="lg:col-span-2 animate-on-scroll"
          >
            <div className="bg-white shadow-medium rounded-2xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5811908939074!2d-3.7340123233838694!3d40.43643647143067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229106d32e85f%3A0xe432e281e4632a40!2sPlaza%20de%20Santa%20Cristina%2C%204%2C%2028011%20Madrid!5e0!3m2!1ses!2ses!4v1691251234567!5m2!1ses!2ses" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                className="w-full"
                title="ubicación"
              ></iframe>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-osteo-dark-green mb-4">Información de Contacto</h3>
                
                <div className="space-y-4">
                  {contactInfo.map(item => (
                    <div key={item.id} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-osteo-light-green flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-osteo-dark-green">{item.title}</h4>
                        <p className="text-gray-600">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={el => elementsRef.current[2] = el}
            className="lg:col-span-3 animate-on-scroll"
          >
            <div className="bg-white shadow-medium rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-osteo-dark-green mb-6">Envíame un Mensaje</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-osteo-green focus:border-osteo-green transition-all duration-200 outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-osteo-green focus:border-osteo-green transition-all duration-200 outline-none"
                      placeholder="Tu email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-osteo-green focus:border-osteo-green transition-all duration-200 outline-none"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-osteo-green focus:border-osteo-green transition-all duration-200 outline-none resize-none"
                    placeholder="¿En qué puedo ayudarte?"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full py-3 rounded-lg"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
