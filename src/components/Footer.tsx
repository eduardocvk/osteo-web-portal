
const Footer = () => {
  return (
    <footer className="bg-osteo-green text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="./lovable-uploads/ff7b84d0-4305-4390-9301-a80d88af0b13.png" 
                alt="Eduardo Callejo Osteopatía Logo" 
                className="h-24"
              />
            </div>
            <p className="text-white/90 mb-6 max-w-md">
              Osteópata especializado en el tratamiento integral de pacientes, 
              enfocado en encontrar y tratar la causa de tu dolor para mejorar tu calidad de vida.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Osteopatía Estructural</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Osteopatía Visceral</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Osteopatía Craneal</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-osteo-light-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/80">eduardocallejoosteopatia@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-osteo-light-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white/80">+34 676 435 634</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-osteo-light-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80">Plaza de Santa Cristina 4, 28011, Madrid</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-osteo-light-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/80">Lun-Vie: 16:00-20:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Eduardo Callejo Osteopatía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
