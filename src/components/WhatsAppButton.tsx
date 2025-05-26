import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5544997642766'; // Replace with your actual WhatsApp number
  const message = 'Olá! Gostaria de saber mais sobre os serviços da Lavanderia Gurucaia.';
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button 
      className="whatsapp-button" 
      onClick={handleClick}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} />
      <span>Fale Conosco</span>
    </button>
  );
};

export default WhatsAppButton;