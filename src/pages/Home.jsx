import React from 'react';
import Header from '../components/Header';
import Certificates from '../components/Certificados';
import TechStack from '../components/Hard-skills';
import Portfolio from '../components/Projetos';
import ContactForm from '../components/Contato';
import Footer from '../components/Footer';
import SobreMim from '../components/Inicio';
import SobreMim02 from '../components/Sobre-mim';
import Tragetoria from '../components/Tragetoria';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SobreMim />
        <SobreMim02 />
        <Tragetoria />
        <div id="skills">
          <TechStack />
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