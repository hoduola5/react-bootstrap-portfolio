import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;