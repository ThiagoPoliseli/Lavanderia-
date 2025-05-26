import React, { FormEvent, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Hero from '../components/Hero';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.send(
        'service_dogdzzn', // Replace with your EmailJS service ID
        'template_mv9ulci', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Lavanderia Gurucaia'
        },
        'KIJqtCQec6_-8_3Cp' // Replace with your EmailJS public key
      );

      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch {
      setError('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const whatsappNumber = '5544997642766';
  const encodedMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Lavanderia Gurucaia.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="contact-page">
      <Hero 
        title="Entre em Contato"
        subtitle="Estamos prontos para atender você e responder suas dúvidas"
        backgroundImage="https://images.pexels.com/photos/5745183/pexels-photo-5745183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <h3>Telefone</h3>
              <p>(44) 99764-2766</p>
              <p>(44) 3047-0062</p>
            </div>
            <div className="contact-info-card">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <h3>E-mail</h3>
              <p>lavanderiagurucaia@outlook.com</p>
            </div>
            <div className="contact-info-card">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <h3>Endereço</h3>
              <p>Av. São Paulo, 2691</p>
              <p>Vila Bosque, Maringá - PR, 87005-040</p>
            </div>
            <div className="contact-info-card">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <h3>Horário de Funcionamento</h3>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-form-section bg-light">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2 className="section-title">Envie uma Mensagem</h2>
              <p className="section-subtitle">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível
              </p>

              {formSubmitted ? (
                <div className="form-success-message">
                  <div className="success-icon">✓</div>
                  <h3>Mensagem Enviada!</h3>
                  <p>Obrigado por entrar em contato. Responderemos em breve.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telefone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Assunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="Orçamento">Orçamento</option>
                      <option value="Dúvida">Dúvida</option>
                      <option value="Elogio">Elogio</option>
                      <option value="Reclamação">Reclamação</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  {error && <div className="form-error">{error}</div>}
                  <button 
                    type="submit" 
                    className="form-submit-btn"
                    disabled={isSubmitting}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
                  </button>
                </form>
              )}
            </div>

            <div className="contact-additional">
              <div className="social-contact">
                <h3>Redes Sociais</h3>
                <p>Acompanhe nossas novidades e promoções através das nossas redes sociais:</p>
                <div className="social-links">
                  <a href="https://www.instagram.com/lavanderiagurucaia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Instagram size={20} />
                    <span>@lavanderiasgurucaia</span>
                  </a>
                  <a href="https://www.instagram.com/lavanderiagurucaia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Facebook size={20} />
                    <span>Lavanderia Gurucaia</span>
                  </a>
                </div>
              </div>

              <div className="whatsapp-contact">
                <h3>WhatsApp</h3>
                <p>Para atendimento mais rápido, entre em contato pelo nosso WhatsApp:</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  <div className="whatsapp-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1z"></path>
                      <path d="M13 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1z"></path>
                      <path d="M9 14a5 5 0 0 0 6 0"></path>
                    </svg>
                  </div>
                  <span>(44) 99764-2766</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.7027188193706!2d-51.9271545!3d-23.4351037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd14154acfd2d%3A0xa55e29a55d42fd0b!2sLavanderia%20Gurucaia!5e0!3m2!1spt-BR!2sbr!4v1747399089099!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Lavanderia Gurucaia"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;