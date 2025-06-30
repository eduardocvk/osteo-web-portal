
import { useEffect, useRef, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "¿Cómo me preparo para la sesión?",
    answer: [
      "Ven con ropa cómoda. La sesión se realizará normalmente en ropa interior. Si tienes alguna dificultad con esto, cuéntame y buscaremos una solución.",
      "A ser posible, no te apliques cremas en la piel antes de venir.",
      "Si tienes pruebas de imagen o informes médicos relacionados, tráelos si puedes."
    ]
  },
  {
    id: 2,
    question: "¿Cuántas sesiones voy a necesitar?",
    answer: [
      "El número de sesiones va a depender del tipo de lesión que tengas, el tiempo que lleves con las molestias y la respuesta de tu cuerpo al tratamiento. Mi objetivo es que notes cambios desde la primera sesión, pero es probable que necesites más sesiones, cada vez más espaciadas en el tiempo."
    ]
  },
  {
    id: 3,
    question: "¿Cuánto dura la sesión?",
    answer: [
      "La sesión durará entre 60 y 75 minutos. Probablemente la primera sesión sea un poco más larga."
    ]
  },
  {
    id: 4,
    question: "¿Me va a doler el tratamiento?",
    answer: [
      "Los tratamientos osteopáticos que realizo no deben ser dolorosos en ningún caso. En momentos puntuales utilizaré alguna técnica que genere algo más de molestia, pero será breve, solo si es soportable, y siempre avisaré antes."
    ]
  },
  {
    id: 5,
    question: "¿Qué efectos puedo tener después de una sesión?",
    answer: [
      "Después de una sesión de osteopatía es normal que sientas cansancio, que aparezca alguna molestia diferente, pero todo esto durará poco más de 24 horas. A partir de ahí deberías empezar a sentir alivio y una mejora notable."
    ]
  },
  {
    id: 6,
    question: "¿Qué medios puedo utilizar para pagar la sesión?",
    answer: [
      "Puedes pagar en efectivo o por Bizum."
    ]
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

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
    <section id="faq" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div
            ref={el => elementsRef.current[0] = el}
            className="animate-on-scroll"
          >
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <div className="w-16 h-1 bg-osteo-green mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              Resuelve tus dudas más comunes sobre los tratamientos de osteopatía
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              ref={el => elementsRef.current[index + 1] = el}
              className="animate-on-scroll mb-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Collapsible 
                open={openItems.includes(faq.id)}
                onOpenChange={() => toggleItem(faq.id)}
              >
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between w-full p-6 bg-osteo-light-gray rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <h3 className="text-left text-lg font-semibold text-osteo-dark-green">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-osteo-green transition-transform duration-200 ${
                        openItems.includes(faq.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 py-4 bg-white border border-gray-200 border-t-0 rounded-b-lg">
                    {faq.answer.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>

        <div 
          ref={el => elementsRef.current[faqData.length + 1] = el}
          className="mt-16 text-center animate-on-scroll"
        >
          <div className="inline-block p-8 rounded-2xl bg-osteo-light-gray">
            <h3 className="text-2xl font-semibold text-osteo-dark-green mb-4">¿Tienes más preguntas?</h3>
            <p className="text-gray-700 mb-6">
              No dudes en contactarme para resolver cualquier duda adicional que puedas tener.
            </p>
            <a 
              href="https://wa.me/34676435634" 
              className="btn btn-primary px-8 py-3 rounded-full inline-flex items-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>Contactar por WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 ml-2">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
