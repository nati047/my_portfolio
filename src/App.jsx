import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { scrollAnimation, toggle } from './scrollAnimation';

function App() {

  useEffect(() => {
    toggle();
    if(window.innerWidth > 600) {
      scrollAnimation();
    }
  }, [])

  return (
    <div className="App">
      <div className="background"></div>
      <Navbar />
      <div className="components">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
