import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-stack Developer',
      company: 'IDOPPRIL',
      period: '2022 - Presente',
      description: 'Desarrollo y mantenimiento de aplicaciones empresariales utilizando .NET Core y SQL Server. Implementación de nuevas funcionalidades y optimización de procesos existentes. Colaboración en la migración de sistemas legacy a arquitecturas modernas.',
      location: 'Santo Domingo, República Dominicana'
    },
    {
      title: 'Desarrollador Freelance',
      company: 'EV Technology',
      period: '2021 - 2022',
      description: 'Desarrollo de soluciones web personalizadas para clientes. Implementación de APIs RESTful y bases de datos PostgreSQL. Diseño e implementación de interfaces de usuario responsivas y optimizadas.',
      location: 'Remoto'
    }
  ];

  const education = [
    {
      title: 'Ingeniería en Software',
      institution: 'Universidad del Caribe (UNICARIBE)',
      period: '2022 - 2024',
      description: 'Formación en desarrollo de software, arquitectura de sistemas y gestión de proyectos.',
      location: 'Santo Domingo, República Dominicana'
    },
    {
      title: 'Técnologo en Desarrollo de Software',
      institution: 'Instituto Tecnológico de Las Américas (ITLA)',
      period: '2019 - 2022',
      description: 'Especialización en desarrollo web, bases de datos y programación orientada a objetos.',
      location: 'Santo Domingo, República Dominicana'
    }
  ];

  const TimelineItem = ({ item, type }) => (
    <div className="experience__item">
      <div className="experience__content">
        <div className="experience__header">
          <h3 className="experience__title">{item.title}</h3>
          <span className="experience__period">{item.period}</span>
        </div>
        <h4 className="experience__company">
          {type === 'work' ? item.company : item.institution}
        </h4>
        <p className="experience__location">{item.location}</p>
        <p className="experience__description">{item.description}</p>
      </div>
    </div>
  );

  return (
    <div className="experience__container">
      <h2 className="experience__section-title">Experiencia Laboral</h2>
      <div className="experience__timeline">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} item={exp} type="work" />
        ))}
      </div>

      <h2 className="experience__section-title">Educación</h2>
      <div className="experience__timeline">
        {education.map((edu, index) => (
          <TimelineItem key={index} item={edu} type="education" />
        ))}
      </div>
    </div>
  );
};

export default Experience; 