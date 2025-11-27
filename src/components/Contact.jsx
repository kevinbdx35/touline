import EmailLink from './EmailLink';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardRef, cardVisible] = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 animate-on-scroll ${headerVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question, une commande personnalisée ou simplement envie d'échanger ? N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div ref={cardRef} className={`bg-white rounded-2xl shadow-xl p-12 text-center animate-on-scroll ${cardVisible ? 'animate-slide-up' : ''}`}>
            <div className="text-6xl mb-6">📧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Email</h3>
            <EmailLink className="text-3xl text-blue-600 hover:text-blue-700 transition font-semibold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
