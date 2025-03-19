
import { useEffect, useRef } from 'react';

const services = [
  {
    id: 1,
    title: "Osteopatía Estructural",
    description: "Tratamiento de problemas musculoesqueléticos, incluyendo dolor de espalda, cervicales, articulaciones y músculo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-osteo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Osteopatía Visceral",
    description: "Mejora de la función de órganos internos, tratamiento de problemas digestivos, respiratorios y otros trastornos funcionales.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-osteo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Osteopatía Craneal",
    description: "Tratamiento de cefaleas, migrañas, problemas de ATM, vértigos y otros trastornos relacionados con el sistema nervioso.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-osteo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Fisioterapia",
    description: "Rehabilitación de lesiones, tratamiento post-quirúrgico, y recuperación funcional para mejorar la movilidad y aliviar el dolor.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-osteo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Punción Seca",
    description: "Técnica mínimamente invasiva para el tratamiento de puntos gatillo y dolor muscular crónico.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-osteo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Asesoramiento Ergonómico",
    description: "Consejos personalizados para mejorar la postura y prevenir lesiones en el trabajo y actividades diarias.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-osteo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Services = () => {
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
    <section id="services" className="section bg-osteo-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div
            ref={el => elementsRef.current[0] = el}
            className="animate-on-scroll"
          >
            <span className="section-subtitle">Servicios</span>
            <h2 className="section-title">Cómo Puedo Ayudarte</h2>
            <div className="w-16 h-1 bg-osteo-blue mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              Ofrezco una variedad de servicios terapéuticos centrados en el alivio del dolor y la mejora de la funcionalidad, 
              siempre desde un enfoque personalizado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => elementsRef.current[index + 1] = el}
              className="card card-hover animate-on-scroll bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-osteo-dark-blue mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          ref={el => elementsRef.current[7] = el}
          className="mt-16 text-center animate-on-scroll"
        >
          <div className="inline-block p-8 rounded-2xl bg-white shadow-soft">
            <h3 className="text-2xl font-semibold text-osteo-dark-blue mb-4">¿No estás seguro de qué tratamiento necesitas?</h3>
            <p className="text-gray-700 mb-6">
              Contacta conmigo para una consulta inicial donde evaluaré tu caso y te recomendaré el enfoque más adecuado para ti.
            </p>
            <a 
              href="#contact" 
              className="btn btn-primary px-8 py-3 rounded-full inline-flex items-center"
            >
              <span>Contactar</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
