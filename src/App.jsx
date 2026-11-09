import { useMemo } from 'react';
import { SECTION_IDS } from './data/profile';
import { LocaleProvider } from './context/Locale';
import { useActiveSection } from './hooks/useActiveSection';
import { useReveal } from './hooks/useReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Work from './components/Work';
import Experience from './components/Experience';
import Lab from './components/Lab';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';

function Shell() {
  const sectionIds = useMemo(() => SECTION_IDS, []);
  const active = useActiveSection(sectionIds);
  useReveal();

  return (
    <>
      <Header active={active} />
      <main id="contenido">
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Experience />
        <Lab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <Shell />
    </LocaleProvider>
  );
}
