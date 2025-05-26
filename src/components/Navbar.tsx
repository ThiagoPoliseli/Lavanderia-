import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <NavLink to="/" className="logo">
          <Droplets size={28} />
          <span>Gurucaia</span>
        </NavLink>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                Serviços
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                Sobre Nós
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;