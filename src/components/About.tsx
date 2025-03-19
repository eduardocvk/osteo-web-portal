
import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="animate-on-scroll" 
          >
            <span className="section-subtitle">Sobre mí</span>
            <h2 className="section-title">Eduardo Callejo</h2>
            <div className="w-16 h-1 bg-osteo-blue mx-auto mt-4 mb-6"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={el => elementsRef.current[1] = el}
            className="animate-on-scroll" 
          >
            <div className="relative">
              <img 
                src="https://www.eduardocallejoosteopatia.com/images/perfil.webp" 
                alt="Eduardo Callejo Osteópata" 
                className="rounded-2xl shadow-medium w-full object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-soft p-4">
                <div className="text-osteo-dark-blue font-serif text-lg font-semibold">+10 años</div>
                <div className="text-osteo-blue text-sm">de experiencia</div>
              </div>
            </div>
          </div>

          <div 
            ref={el => elementsRef.current[2] = el}
            className="animate-on-scroll"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-osteo-dark-blue mb-6">
              Osteopatía integral para mejorar tu calidad de vida
            </h3>

            <p className="text-gray-700 mb-6">
              Soy Eduardo Callejo, osteópata y fisioterapeuta con más de 10 años de experiencia. Mi enfoque se basa en un tratamiento integral del paciente, abordando no solo los síntomas sino también el origen de tus dolencias para lograr resultados duraderos.
            </p>

            <p className="text-gray-700 mb-6">
              Mi formación como osteópata me permite abordar cada caso de forma personalizada, adaptando el tratamiento a las necesidades específicas de cada paciente. Trabajo con un enfoque global, considerando todos los aspectos que influyen en tu salud.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-osteo-light-blue flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-osteo-dark-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-osteo-dark-blue">Tratamiento Personalizado</h4>
                  <p className="text-gray-600">Adaptado a tus necesidades</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-osteo-light-blue flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-osteo-dark-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-osteo-dark-blue">Enfoque Global</h4>
                  <p className="text-gray-600">Cuerpo y mente en equilibrio</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-osteo-light-blue flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-osteo-dark-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-osteo-dark-blue">Técnicas Avanzadas</h4>
                  <p className="text-gray-600">Basadas en evidencia científica</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-osteo-light-blue flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-osteo-dark-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-osteo-dark-blue">Formación Continua</h4>
                  <p className="text-gray-600">Siempre actualizado</p>
                </div>
              </div>
            </div>

            <a 
              href="#booking" 
              className="btn btn-primary px-8 py-3 rounded-full inline-flex items-center"
            >
              <span>Solicitar Cita</span>
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

export default About;
