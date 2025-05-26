import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, Droplets } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              <Droplets size={28} />
              <span>Gurucaia</span>
            </Link>
            <p>
              Oferecemos serviços de lavanderia de alta qualidade, atendendo todas as suas 
              necessidades com eficiência e cuidado.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/lavanderiagurucaia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.instagram.com/lavanderiagurucaia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Navegação</h3>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/services">Serviços</Link></li>
              <li><Link to="/about">Sobre Nós</Link></li>
              <li><Link to="/contact">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>Serviços</h3>
            <ul>
              <li>Lavagem de Roupas</li>
              <li>Passadoria</li>
              <li>Lavagem de Tapetes</li>
              <li>Lavagem de Cortinas</li>
              <li>Limpeza de Calçados</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contato</h3>
            <ul>
              <li>
                <MapPin size={16} />
                <span>Av. São Paulo, 2691 - Maringá</span>
              </li>
              <li>
                <Phone size={16} />
                <span>(44) 99764-2766</span>
              </li>
              <li>
                <Mail size={16} />
                <span>lavanderiagurucaia@outlook.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Lavanderia Gurucaia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;