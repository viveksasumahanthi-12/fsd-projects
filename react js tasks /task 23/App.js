import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CardSection from './components/CardSection';
import AccordionSection from './components/AccordionSection';
import CarouselSection from './components/CarouselSection';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CardSection />
        <AccordionSection />
        <CarouselSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
