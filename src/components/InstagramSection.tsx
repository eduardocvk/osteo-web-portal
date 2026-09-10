import { ArrowUpRight, Instagram } from 'lucide-react';

const posts = [
  {
    title: 'El diafragma: mucho más que respirar',
    category: 'Respiración y bienestar',
    image: '/instagram/diafragma.jpg',
    href: 'https://www.instagram.com/p/Da-cwgfjCez/',
  },
  {
    title: 'El túnel carpiano que no mejora',
    category: 'Mano y brazo',
    image: '/instagram/tunel-carpiano.jpg',
    href: 'https://www.instagram.com/p/Dcs1GaLChh6/',
  },
  {
    title: 'Dolor lumbar izquierdo que no cede',
    category: 'Espalda y digestión',
    image: '/instagram/intestino-lumbares.jpg',
    href: 'https://www.instagram.com/p/DcYGmFZgVCK/',
  },
  {
    title: '¿Sensación de ir en un barco?',
    category: 'Mareos y cervicales',
    image: '/instagram/mareos-c0-c1.jpg',
    href: 'https://www.instagram.com/p/DcIlPmckp56/',
  },
  {
    title: 'El lumbago que no te deja enderezarte',
    category: 'Zona lumbar',
    image: '/instagram/rinon-psoas.jpg',
    href: 'https://www.instagram.com/p/Db2Yz4Dkg7i/',
  },
  {
    title: 'El síndrome de la cintilla iliotibial',
    category: 'Deporte y movimiento',
    image: '/instagram/cintilla-iliotibial.jpg',
    href: 'https://www.instagram.com/p/DZ9hEI6FCPQ/',
  },
];

const InstagramSection = () => (
  <section id="instagram" className="section bg-osteo-light-gray">
    <div>
      <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl animate-on-scroll">
          <p className="section-subtitle !mb-3 !text-left">DIVULGACIÓN Y BIENESTAR</p>
          <h2 className="section-title !mb-4 !text-left">Aprende a entender tu cuerpo</h2>
          <p className="max-w-xl text-base text-osteo-text/70 md:text-lg">
            Ideas sencillas sobre dolor, movimiento y bienestar para ayudarte a conocer mejor las señales de tu cuerpo.
          </p>
        </div>

        <a
          href="https://www.instagram.com/osteopatiaeducallejo/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-2 rounded-full border border-osteo-green/25 bg-white px-5 py-3 font-medium text-osteo-dark-green shadow-soft transition-all hover:-translate-y-0.5 hover:border-osteo-green hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-osteo-green focus-visible:ring-offset-2"
        >
          <Instagram className="h-5 w-5" aria-hidden="true" />
          @osteopatiaeducallejo
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>

      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-6">
        {posts.map((post, index) => (
          <a
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${post.title}. Ver publicación en Instagram`}
            className="group relative w-[82vw] max-w-[360px] flex-none snap-center overflow-hidden rounded-[1.4rem] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-osteo-green focus-visible:ring-offset-4 focus-visible:ring-offset-osteo-light-gray sm:w-auto sm:max-w-none animate-on-scroll"
            style={{ transitionDelay: `${Math.min(index, 2) * 70}ms` }}
          >
            <div className="aspect-[4/5] overflow-hidden bg-[#eee8dc]">
              <img
                src={post.image}
                alt=""
                width="720"
                height="900"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.025]"
              />
            </div>
            <div className="flex items-start justify-between gap-4 p-5">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-osteo-green">
                  {post.category}
                </p>
                <h3 className="!mb-0 font-sans text-lg font-semibold leading-snug text-osteo-text">
                  {post.title}
                </h3>
              </div>
              <span className="mt-0.5 rounded-full bg-osteo-light-gray p-2 text-osteo-dark-green transition-colors group-hover:bg-osteo-green group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-osteo-text/55">
        Contenido divulgativo. No sustituye una valoración sanitaria individual ni permite establecer un diagnóstico.
      </p>
    </div>
  </section>
);

export default InstagramSection;
