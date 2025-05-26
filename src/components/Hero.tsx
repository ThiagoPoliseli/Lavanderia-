import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Nossos Serviços',
  ctaLink = '/services',
  backgroundImage = 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {ctaText && ctaLink && (
            <Link to={ctaLink} className="hero-cta">
              <span>{ctaText}</span>
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;