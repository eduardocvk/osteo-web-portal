import { useEffect, useRef } from 'react';

const BookingSection = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Efecto para las animaciones de scroll
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

  // Aquí metemos el código de SimplyBook "en cuarentena"
  const iframeContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>body { margin: 0; padding: 0; background: transparent; }</style>
      </head>
      <body>
        <script src="//widget.simplybook.it/v2/widget/widget.js" type="text/javascript"></script>
        <script type="text/javascript">
          var widget = new SimplybookWidget({"widget_type":"iframe","url":"https://educallejo.simplybook.it","theme":"dainty","theme_settings":{"timeline_show_end_time":"1","timeline_hide_unavailable":"1","hide_past_days":"0","sb_base_color":"#44acb8","secondary_color":"#e4ebf5","sb_text_color":"#a1a1a1","display_item_mode":"list","body_bg_color":"#ffffff","sb_background_image":"","sb_review_image":"","dark_font_color":"#293b36","light_font_color":"#ffffff","btn_color_1":"#44acb8","sb_company_label_color":"#ffffff","sb_cancellation_color":"#fa4163","hide_img_mode":"0"},"timeline":"flexible_week","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":[]}});
        </script>
      </body>
    </html>
  `;

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
            <div className="w-full min-h-[600px] flex items-center justify-center rounded-xl overflow-hidden">
              {/* Este es nuestro escudo protector contra el código de SimplyBook */}
              <iframe 
                srcDoc={iframeContent}
                style={{ width: '100%', height: '650px', border: 'none' }}
                title="Calendario de reservas SimplyBook"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
