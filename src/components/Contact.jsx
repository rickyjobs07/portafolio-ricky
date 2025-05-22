import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });

    emailjs.send(
      'service_vxqeexu',
      'template_s8zdoga',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'Ptn7_YLaoOgG5tiTn'
    )
    .then(() => {
      setStatus({ submitted: true, submitting: false, error: null });
      setFormData({ name: '', email: '', message: '' });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    })
    .catch(() => {
      setStatus({ submitted: false, submitting: false, error: 'Error al enviar el mensaje. Intenta de nuevo.' });
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__subtitle">
          ¿Tienes un proyecto en mente o quieres colaborar? ¡Hablemos sobre cómo podemos trabajar juntos!
        </p>

        <div className="contact__content">
          <div className="contact__info">
            <h3>Conectemos</h3>
            <p>
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas
              o oportunidades para ser parte de tu visión. Ya sea que tengas una
              pregunta o simplemente quieras saludar, ¡me encantaría saber de ti!
            </p>
            <div className="contact__details">
              <div className="contact__item">
                <i className="fas fa-envelope"></i>
                <div>
                  <span className="contact__label">Email:</span>
                  <a href="mailto:rickymonterojobs07@gmail.com" className="contact__link">
                    rickymonterojobs07@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact__item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span className="contact__label">Ubicación:</span>
                  <span>Santo Domingo, República Dominicana</span>
                </div>
              </div>
            </div>
          </div>

          <form 
            className="contact__form" 
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contact__form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                aria-required="true"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                aria-required="true"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="¿En qué puedo ayudarte?"
                aria-required="true"
                rows="5"
              ></textarea>
            </div>

            {status.error && (
              <div className="contact__error" role="alert">
                {status.error}
              </div>
            )}

            {status.submitted && (
              <div className="contact__success" role="alert">
                ¡Gracias por tu mensaje! Te responderé lo antes posible.
              </div>
            )}

            <button 
              type="submit" 
              className="contact__submit"
              disabled={status.submitting}
            >
              {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>

      {showToast && (
        <div className="toast toast--success" role="status">
          <span>✅ ¡Mensaje enviado correctamente!</span>
        </div>
      )}
    </section>
  );
};

export default Contact; 