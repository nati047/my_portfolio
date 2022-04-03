import '../styles/About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About () {
  return (
    <div id="about" className="about-container container">
      <div className="about-me">ABOUT&nbsp;ME
        <div className="underline"></div>
      </div>
      {/* <div className="textNphoto"> */}
        {/* <div className="photo-container"></div> */}
        <p className="about-paragraph">
          Hello, I'm Natnael Tekletsadik (you can call me Nat). I am a junior Full-stack web developer. I love turning well crafted code into beautiful apps. 
          When I was first introduced to coding I said this is must be the most awesome thing. I wrote my first calculator app and I felt like I can not only admire technology but also become a creator. For this reason I decided to do what I enjoy everyday and I studied full-stack web development. 
        </p>
      {/* </div> */}
    </div>
  );
}

export default About;