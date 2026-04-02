import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ClientsList from './components/ClientsList'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetId === "home" ? 0 : targetElement.offsetTop - 80, 
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="app-main">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <ClientsList />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
