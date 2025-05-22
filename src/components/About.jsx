import React from 'react';
import profileImg from '../assets/rickymontero.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">Sobre Mí</h2>
        <div className="about__content">
          <div className="about__image-container">
            <img 
              src={profileImg}
              alt="Ricky Montero" 
              className="about__image"
            />
          </div>
          <div className="about__text">
            <h1 className="about__title">Ricky Montero Terrero</h1>
            <h2 className="about__subtitle">Ingeniero en Software</h2>
            
            <p className="about__intro">
              Soy un desarrollador de software apasionado por crear soluciones tecnológicas 
              que marcan la diferencia. Mi enfoque combina la eficiencia técnica con una 
              profunda comprensión de las necesidades del usuario.
            </p>
            
            <p className="about__description">
              Con más de 2 años de experiencia en desarrollo web y backend, me especializo 
              en construir aplicaciones robustas y escalables. Mi experiencia abarca desde 
              el desarrollo de APIs RESTful hasta la implementación de interfaces de usuario 
              intuitivas, siempre buscando el equilibrio perfecto entre rendimiento y 
              experiencia de usuario.
            </p>
            
            <p className="about__description">
              Me destaco por mi capacidad para aprender rápidamente nuevas tecnologías y 
              adaptarme a diferentes entornos de trabajo. Mi objetivo es contribuir a 
              proyectos que generen un impacto positivo, utilizando las mejores prácticas 
              de desarrollo y manteniendo un código limpio y mantenible.
            </p>

            <div className="about__skills">
              <h3>Tecnologías Principales</h3>
              <ul className="about__skills-list">
                <li>.NET Core</li>
                <li>Entity Framework</li>
                <li>JavaScript</li>
                <li>SQL Server</li>
                <li>PostgreSQL</li>
                <li>Azure DevOps</li>
                <li>React</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 