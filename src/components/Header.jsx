import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__container">
        <a href="#about" className="header__logo" onClick={closeMenu}>
          RM
        </a>

        <button 
          className={`header__menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isMenuOpen && (
          <div className="header__overlay" onClick={closeMenu} />
        )}

        <nav 
          ref={menuRef}
          className={`header__nav ${isMenuOpen ? 'active' : ''}`}
        >
          <ul className="header__nav-list">
            <li>
              <a href="#about" onClick={closeMenu}>
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                Experiencia
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 