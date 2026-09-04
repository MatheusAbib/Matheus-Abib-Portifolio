import React from 'react';
import Header from '../components/Header';
import Certificates from '../components/Certificados';
import HardSkills from '../components/Hard-skills';
import Portfolio from '../components/Projetos';
import ContactForm from '../components/Contato';
import Footer from '../components/Footer';
import SobreMim from '../components/Sobre-mim';
import Tragetoria from '../components/Tragetoria';
import Inicio from '../components/Inicio';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Inicio />
        <SobreMim />
        <Tragetoria />
        <div id="skills">
          <HardSkills />
        </div>
        <Certificates />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Home;