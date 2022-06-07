import '../styles/About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mypic from '../images/mypic.jpg';

function About () {
  return (
    <div id="about" className="about-container container">
      <div className="about-me">ABOUT&nbsp;ME
        <div className="underline"></div>
      </div>
      {/* <div className="textNphoto">
        <div className="photo-container">
          <img className="mypic" src={mypic} alt="" />
        </div> */}
        <p className="about-paragraph">
          Hello, I'm Natnael Tekletsadik (call me Nat). I am a junior Full-stack web developer. I love turning well crafted code into beautiful and useful apps.
          when I wrote my first calculator app, I felt like I can do anything. I can not only admire technology but also become a creator. For this reason I decided to do what I enjoy everyday and I studied full-stack web development. But, my journey just began.When i'm not infront of my screen I enjoy watching and playing soccer. 
          Right now I'm looking for fulltime web developer positions. If you want to have a conversation I'm a text away. Enjoy checking out my projects! 
        </p>
      {/* </div> */}
    </div>
  );
}

export default About;