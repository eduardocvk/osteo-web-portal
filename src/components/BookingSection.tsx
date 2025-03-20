
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

    // Clean up existing widget scripts to prevent duplication
    const existingWidgetScripts = document.querySelectorAll('script[src*="widget.simplybook.it"]');
    existingWidgetScripts.forEach(script => script.remove());
    
    const existingInitScripts = document.querySelectorAll('script');
    existingInitScripts.forEach(script => {
      if (script.textContent && script.textContent.includes('SimplybookWidget')) {
        script.remove();
      }
    });

    // Add SimplyBook widget script
    const script1 = document.createElement('script');
    script1.src = "//widget.simplybook.it/v2/widget/widget.js";
    script1.type = "text/javascript";
    document.head.appendChild(script1);

    script1.onload = () => {
      // Wait for the booking container to be available
      setTimeout(() => {
        const bookingContainer = document.getElementById('booking-container');
        if (bookingContainer) {
          const script2 = document.createElement('script');
          script2.type = "text/javascript";
          script2.textContent = `
            var widget = new SimplybookWidget({
              "widget_type": "button",
              "url": "https://educallejo.simplybook.it",
              "theme": "dainty",
              "theme_settings": {
                "timeline_show_end_time": "1",
                "timeline_hide_unavailable": "1",
                "hide_past_days": "0",
                "sb_base_color": "#1dc495",
                "secondary_color": "#e4ebf5",
                "sb_text_color": "#a1a1a1",
                "display_item_mode": "block",
                "body_bg_color": "#ffffff",
                "sb_background_image": "",
                "sb_review_image": "",
                "dark_font_color": "#293b36",
                "light_font_color": "#ffffff",
                "btn_color_1": "#1dc495",
                "sb_company_label_color": "#ffffff",
                "sb_cancellation_color": "#ff7a93",
                "hide_img_mode": "0"
              },
              "timeline": "flexible_week",
              "datepicker": "top_calendar",
              "is_rtl": false,
              "container_id": "booking-container",
              "app_config": {
                "clear_session": 0,
                "allow_switch_to_ada": 0,
                "predefined": []
              }
            });
          `;
          document.head.appendChild(script2);
        }
      }, 500); // Small delay to ensure DOM is ready
    };

    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
      
      // Remove the scripts when component unmounts
      const simplyWidgetScripts = document.querySelectorAll('script[src*="widget.simplybook.it"]');
      simplyWidgetScripts.forEach(script => script.remove());
      
      // Remove any script that contains the SimplybookWidget initialization
      const scriptElements = document.querySelectorAll('script');
      scriptElements.forEach(script => {
        if (script.textContent && script.textContent.includes('SimplybookWidget')) {
          script.remove();
        }
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
            <div id="booking-container" className="w-full min-h-[600px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
