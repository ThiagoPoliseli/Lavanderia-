import React from 'react';
import { MessageCircle } from 'lucide-react';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  whatsappMessage: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  whatsappMessage 
}) => {
  const phoneNumber = '5544997642766'; // Replace with your actual WhatsApp number
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button 
          className="service-card-button" 
          onClick={handleWhatsAppClick}
        >
          <MessageCircle size={18} />
          <span>Consultar via WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;