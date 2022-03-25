import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import scrollAnimation from './scrollAnimation';

function App() {

  useEffect(() => {
    scrollAnimation();
  }, [])

  return (
    <div className="App">

      {/* <div class="name scroll">
        <h1 class="N ">N</h1>
        <h1 class="A">A</h1>
        <h1 class="T">T</h1>
        <h1 class="I">I</h1>
      </div>
      <div class="name second">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quibusdam!
      </div>
      <div class="name two">
        <h1 class="N ">N</h1>
        <h1 class="A">A</h1>
        <h1 class="T">T</h1>
        <h1 class="I">I</h1>
      </div>
      <div class="name three">
        <h1 class="N ">N</h1>
        <h1 class="A">A</h1>
        <h1 class="T">T</h1>
        <h1 class="I">I</h1>
      </div> */}

      {/* <div class="square-wrapper page show-in ">
    <div class="square"></div>
  </div>

  <div class="square-wrapper2 page ">
    <div class="square2">2nd square</div>
  </div>  */}

      {/* <div class="name third">
        <h1 class="N ">N</h1>
        <h1 class="A">A</h1>
        <h1 class="T">T</h1>
        <h1 class="I">I</h1>
      </div> */}

      {/* <div class="name last">
        <h1 class="N ">N</h1>
        <h1 class="A">A</h1>
        <h1 class="T">T</h1>
        <h1 class="I">I</h1>
      </div> */}
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
