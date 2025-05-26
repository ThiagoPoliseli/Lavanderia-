import React from 'react';
import { Link } from 'react-router-dom';
import {Award, Clock, ThumbsUp, Shield } from 'lucide-react';
import Hero from '../components/Hero';
import './About.css';

const About: React.FC = () => {

  return (
    <div className="about-page">
      <Hero 
        title="Sobre Nós"
        subtitle="Conheça a história e os valores da Lavanderia Gurucaia"
        backgroundImage="https://images.pexels.com/photos/4700383/pexels-photo-4700383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="section about-intro-section">
        <div className="container">
          <div className="about-intro grid grid-2">
            <div className="about-content">
              <h2>Nossa História</h2>
              <p>
                A Lavanderia Gurucaia iniciou suas atividades em 2018 com uma missão clara: 
                oferecer serviços de lavanderia de alta qualidade com atendimento personalizado 
                e respeito ao meio ambiente.
              </p>
              <p>
                O que começou como uma pequena lavanderia familiar cresceu e se transformou em 
                uma referência local, mantendo os valores de excelência e compromisso com a 
                satisfação dos clientes que nos guiam desde o início.
              </p>
              <p>
                Hoje, contamos com equipamentos modernos e uma equipe altamente treinada para 
                oferecer os melhores serviços de lavanderia, cuidando com atenção de cada peça 
                que nos é confiada.
              </p>
            </div>
            <div className="about-image">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1748263140190!6m8!1m7!1sRxZW16f752zwgoGSrPHseQ!2m2!1d-23.43512598529406!2d-51.92726532531331!3f68.07847258881914!4f-7.56724663513593!5f0.7820865974627469"
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
        </div>
      </section>

      <section className="section values-section bg-light">
        <div className="container">
          <h2 className="section-title">Nossos Valores</h2>
          <p className="section-subtitle">
            Princípios que norteiam nosso trabalho diário
          </p>

          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <Award size={24} />
              </div>
              <h3>Excelência</h3>
              <p>Buscamos a perfeição em cada etapa do nosso trabalho, desde o atendimento até a entrega final.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <Clock size={24} />
              </div>
              <h3>Pontualidade</h3>
              <p>Respeitamos os prazos combinados, valorizando o tempo dos nossos clientes.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <Shield size={24} />
              </div>
              <h3>Confiabilidade</h3>
              <p>Nossos clientes podem confiar que seus itens serão tratados com cuidado e devolvidos em perfeitas condições.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <ThumbsUp size={24} />
              </div>
              <h3>Compromisso</h3>
              <p>Comprometidos com a satisfação total dos nossos clientes e com a qualidade dos nossos serviços.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="mission-vision grid grid-2">
            <div className="mission-card">
              <h2>Nossa Missão</h2>
              <p>
                Oferecer serviços de lavanderia de alta qualidade, proporcionando praticidade, 
                economia de tempo e tranquilidade aos nossos clientes, através de processos 
                eficientes e atendimento personalizado.
              </p>
            </div>
            <div className="vision-card">
              <h2>Nossa Visão</h2>
              <p>
                Ser reconhecida como a melhor lavanderia da região, referência em qualidade, 
                inovação e sustentabilidade, expandindo nossos serviços e mantendo o compromisso 
                com a excelência e satisfação dos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Venha nos conhecer!</h2>
            <p>Estamos prontos para atender suas necessidades de lavanderia com qualidade e eficiência.</p>
            <Link to="/contact" className="btn btn-primary">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;