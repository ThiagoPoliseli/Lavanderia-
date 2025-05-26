import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Lavagem de Roupas em geral',
      description: 'Lavagem completa, secagem e dobra das suas roupas com produtos de alta qualidade, garantindo frescor e cuidado.',
      imageUrl: 'https://images.pexels.com/photos/8346226/pexels-photo-8346226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o serviço de Lavagem de Roupas em Geral.'
    },
    {
      id: 2,
      title: 'Passadoria',
      description: 'Serviço profissional de passar roupas, garantindo peças impecáveis, sem rugas e prontas para uso.',
      imageUrl: 'https://images.pexels.com/photos/5202928/pexels-photo-5202928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o serviço de Passadoria.'
    },
    {
      id: 3,
      title: 'Lavagem de Tapetes',
      description: 'Limpeza profunda de tapetes com remoção de manchas e odores, restaurando a aparência original.',
      imageUrl: 'https://images.pexels.com/photos/1421253/pexels-photo-1421253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o serviço de Lavagem de Tapetes.'
    },
    {
      id: 4,
      title: 'Lavagem de Cortinas',
      description: 'Limpeza especializada de cortinas, preservando tecidos delicados e garantindo durabilidade.',
      imageUrl: 'https://images.pexels.com/photos/462197/pexels-photo-462197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o serviço de Lavagem de Cortinas.'
    },
    {
      id: 5,
      title: 'Limpeza de Calçados',
      description: 'Limpeza profissional de calçados, removendo manchas e odores para deixá-los como novos.',
      imageUrl: 'https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o serviço de Limpeza de Calçados.'
    },
    {
      id: 6,
      title: 'Lavagem de Vestidos',
      description: 'Limpeza delicada de vestidos, incluindo peças de festa e noiva, preservando tecidos e detalhes.',
      imageUrl: 'https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o serviço de Lavagem de Vestidos.'
    },
    {
      id: 7,
      title: 'Lavagem de carrinhos e bebê conforto',
      description: 'Higienização completa de carrinhos e bebê conforto, removendo sujeiras e garantindo um ambiente seguro para seu bebê.',
      imageUrl: 'assets/carrinho.png',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o serviço de Lavagem de Carrinhos e Bebê Conforto.'
    },
    {
      id: 8,
      title: 'Lavagem de Edredons e Cobertores',
      description: 'Limpeza profunda de edredons e cobertores, garantindo conforto e remoção de ácaros e sujeiras.',
      imageUrl: 'assets/edredom.jpg',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o serviço de Lavagem de Edredons e Cobertores.'
    },
    {
      id: 9,
      title: 'Lavagem de Roupas Sociais',
      description: 'Limpeza especializada de roupas sociais, como ternos e vestidos de gala, mantendo a elegância das peças.',
      imageUrl: 'https://images.pexels.com/photos/2767159/pexels-photo-2767159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o serviço de Lavagem de Roupas Sociais.'
    },
    {
      id: 10,
      title: 'Higienização de Sofá e Estofados',
      description: 'Higienização profissional de sofás e estofados, removendo manchas, odores e ácaros para um ambiente mais saudável.',
      imageUrl: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o serviço de Higienização de Sofá e Estofados.'
    }
  ];


  return (
    <div className="services-page">
      <Hero 
        title="Nossos Serviços"
        subtitle="Conheça todos os serviços oferecidos pela Lavanderia Gurucaia para atender suas necessidades"
        backgroundImage="https://images.pexels.com/photos/4700611/pexels-photo-4700611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="section services-list-section">
        <div className="container">
          <div className="services-intro">
            <h2>Serviços Completos de Lavanderia</h2>
            <p>
              Na Lavanderia Gurucaia, oferecemos uma ampla gama de serviços para cuidar de todos os seus itens, 
              desde roupas do dia a dia até peças especiais que exigem cuidados específicos. Nossos profissionais 
              são treinados para lidar com diferentes tipos de tecidos e itens, garantindo o melhor resultado para 
              cada peça.
            </p>
          </div>

          <div className="grid grid-3">
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                whatsappMessage={service.whatsappMessage}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section service-process-section bg-light">
        <div className="container">
          <h2 className="section-title">Nosso Processo</h2>
          <p className="section-subtitle">
            Cada item recebe um tratamento personalizado seguindo um rigoroso processo de qualidade
          </p>

          <div className="service-process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Inspeção Inicial</h3>
                <p>Cada peça é cuidadosamente analisada para identificar manchas, danos ou necessidades especiais.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Seleção de Tratamento</h3>
                <p>Escolhemos o método ideal de lavagem específico para cada tipo de tecido e necessidade.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Tratamento de Manchas</h3>
                <p>Utilizamos técnicas e produtos específicos para remover manchas difíceis antes da lavagem.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Lavagem</h3>
                <p>Processo de lavagem com produtos de alta qualidade e tecnologia moderna.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>Secagem</h3>
                <p>Secagem controlada respeitando as características de cada peça para evitar danos.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">06</div>
              <div className="step-content">
                <h3>Acabamento</h3>
                <p>Passadoria e dobra cuidadosa, garantindo a apresentação perfeita de cada item.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Respostas para as dúvidas mais comuns sobre nossos serviços
          </p>

          <div className="faq-list">
            <div className="faq-item">
              <h3>Qual é o prazo de entrega?</h3>
              <p>O prazo padrão é de 2 a 3 dias úteis para serviços regulares. Serviços expressos podem estar disponíveis mediante consulta.</p>
            </div>
            <div className="faq-item">
              <h3>Vocês fazem entregas?</h3>
              <p>Sim, oferecemos serviço de retirada e entrega em determinadas regiões. Entre em contato para verificar disponibilidade na sua área.</p>
            </div>
            <div className="faq-item">
              <h3>Como é calculado o valor da lavagem?</h3>
              <p>O valor varia de acordo com o tipo de peça, serviço solicitado e quantidade. Entre em contato para um orçamento personalizado.</p>
            </div>
            <div className="faq-item">
              <h3>Quais formas de pagamento são aceitas?</h3>
              <p>Aceitamos dinheiro, cartões de crédito e débito, PIX e transferências bancárias.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;