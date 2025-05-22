import React from 'react';
import imgEcommerce from '../assets/e-commerce.jpg';
import imgApi from '../assets/api-servicios.jpg';
import imgErp from '../assets/gestion-empresarial.png';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Gestión Empresarial',
      description: 'Desarrollo de un sistema integral para la gestión de recursos humanos, inventario y facturación. Implementación de reportes personalizados y dashboard interactivo.',
      technologies: ['.NET Core', 'SQL Server', 'Entity Framework', 'React', 'Azure'],
      image: imgErp,
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'API de Servicios Financieros',
      description: 'Diseño e implementación de una API RESTful para servicios financieros, incluyendo autenticación JWT, encriptación de datos sensibles y documentación con Swagger.',
      technologies: ['.NET Core', 'PostgreSQL', 'Docker', 'Azure DevOps'],
      image: imgApi,
      github: '#',
      demo: '#'
    },
    {
      title: 'Plataforma de E-commerce',
      description: 'Desarrollo de una plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración. Optimización de rendimiento y SEO.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
      image: imgEcommerce,
      github: '#',
      demo: '#'
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="projects__card">
      <div className="projects__image-container">
        <img 
          src={project.image} 
          alt={project.title} 
          className="projects__image"
        />
        {project.featured && (
          <span className="projects__featured">Destacado</span>
        )}
      </div>
      
      <div className="projects__content">
        <h3 className="projects__card-title">{project.title}</h3>
        <p className="projects__description">{project.description}</p>
        
        <div className="projects__technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="projects__tech">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="projects__links">
          <a 
            href={project.github} 
            className="projects__link projects__link--github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            Ver código
          </a>
          <a 
            href={project.demo} 
            className="projects__link projects__link--demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>
            Ver demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="projects__container">
      <h2 className="projects__title">Proyectos</h2>
      <p className="projects__subtitle">
        Una selección de mis proyectos más destacados, demostrando mi experiencia 
        en diferentes tecnologías y enfoques de desarrollo.
      </p>
      
      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects; 