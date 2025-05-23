import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './styles/main.css';

const App = () => {
  return (
    <div className="app">
      <ThemeToggle />
      <Header />
      
      <main>
        <section id="about" className="about">
          <div className="container">
            <About />
          </div>
        </section>

        <section id="experience" className="experience">
          <div className="container">
            <Experience />
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
