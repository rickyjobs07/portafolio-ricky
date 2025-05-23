import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          © {currentYear} Todos los Derechos Reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 