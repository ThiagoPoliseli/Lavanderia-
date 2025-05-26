import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ThumbsUp, Clock, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import './Home.css';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(6); // Start at first real testimonial (index 6 due to cloning)

  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'Cliente desde 2021',
      testimonial: 'Serviço excelente! Minhas roupas sempre voltam impecáveis e o atendimento é muito bom.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      role: 'Cliente desde 2020',
      testimonial: 'Ótimo serviço de lavagem de tapetes. Removeram manchas que eu achava que nunca sairiam!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Mariana Santos',
      role: 'Cliente desde 2022',
      testimonial: 'Muito satisfeita com o serviço de passar roupas. Rápido, eficiente e com qualidade.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Pedro Costa',
      role: 'Cliente desde 2019',
      testimonial: 'A melhor lavanderia da região! Atendimento personalizado e preços justos.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Julia Mendes',
      role: 'Cliente desde 2023',
      testimonial: 'Excelente trabalho com minhas cortinas. Ficaram como novas!',
      rating: 5,
    },
    {
      id: 6,
      name: 'Ricardo Almeida',
      role: 'Cliente desde 2021',
      testimonial: 'Profissionalismo e pontualidade. Recomendo para todos!',
      rating: 5,
    },
  ];

  // Clone last and first testimonials for infinite loop
  const extendedTestimonials = [
    testimonials[testimonials.length - 1], // Clone last testimonial at start
    ...testimonials,
    testimonials[0], // Clone first testimonial at end
  ];

  const nextTestimonial = React.useCallback(() => {
    setCurrentTestimonial((prev) => {
      if (prev === extendedTestimonials.length - 1) {
        // Jump to first real testimonial (index 1) without transition
        setTimeout(() => setCurrentTestimonial(1), 0);
        return 1;
      }
      return prev + 1;
    });
  }, [extendedTestimonials.length]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => {
      if (prev === 0) {
        // Jump to last real testimonial (index testimonials.length) without transition
        setTimeout(() => setCurrentTestimonial(testimonials.length), 0);
        return testimonials.length;
      }
      return prev - 1;
    });
  };

  return (
    <div className="home-page">
      <Hero
        title="Lavanderia Gurucaia"
        subtitle="Deixe suas roupas nas mãos de quem entende. Oferecemos serviços de lavanderia profissional com qualidade e cuidado."
      />

      <section className="section features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <ThumbsUp size={24} />
              </div>
              <h3>Qualidade Garantida</h3>
              <p>Serviço de excelência com produtos de alta qualidade</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Clock size={24} />
              </div>
              <h3>Entrega Rápida</h3>
              <p>Seu pedido pronto no prazo combinado</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Shield size={24} />
              </div>
              <h3>Cuidado Especial</h3>
              <p>Tratamento adequado para cada tipo de tecido</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Como Funciona</h2>
          <p className="section-subtitle">
            Nosso processo é simples e eficiente, garantindo qualidade em cada etapa
          </p>

          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <div className="process-step-content">
                <h3>Agendamento</h3>
                <p>Entre em contato via WhatsApp ou telefone</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <div className="process-step-content">
                <h3>Coleta</h3>
                <p>Recolhemos suas roupas ou recebemos na loja</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <div className="process-step-content">
                <h3>Processamento</h3>
                <p>Lavagem e/ou passadoria profissional</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <div className="process-step-content">
                <h3>Entrega</h3>
                <p>Devolução no prazo combinado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section bg-light">
        <div className="container">
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
          <p className="section-subtitle">
            A satisfação dos nossos clientes é a nossa melhor recomendação
          </p>

          <div className="testimonials-container">
            <button className="testimonial-arrow prev" onClick={prevTestimonial}>
              <ChevronLeft size={24} />
            </button>

            <div
              className="testimonials-slider"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
                transition:
                  currentTestimonial === 0 || currentTestimonial === extendedTestimonials.length - 1
                    ? 'none'
                    : 'transform 0.5s ease',
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < testimonial.rating ? '#f59e0b' : 'none'}
                        color={i < testimonial.rating ? '#f59e0b' : '#d1d5db'}
                      />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.testimonial}"</p>
                  <p className="testimonial-author">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              ))}
            </div>

            <button className="testimonial-arrow next" onClick={nextTestimonial}>
              <ChevronRight size={24} />
            </button>

            <div className="testimonial-nav">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === (currentTestimonial - 1) % testimonials.length ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para experimentar nossos serviços?</h2>
            <p>Fale conosco agora mesmo e descubra como podemos ajudar com suas necessidades de lavanderia.</p>
            <Link to="/contact" className="btn btn-primary">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;