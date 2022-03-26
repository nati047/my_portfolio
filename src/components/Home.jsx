import '../styles/Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';



function Home() {
  return (
    <div className="home">
      <div className="nav">  {/* @todo make navbar component*/}
        <div className="nav-menu">
          <a className="nav-item" href="#home" >Home</a>
          <a className="nav-item" href="#about" >About</a>
          <a className="nav-item" href="#skills" >Skills</a>
          <a className="nav-item" href="#projects">Projects</a>
        </div>
        <div className="socials">
          <a className="socials-icon" href="https://github.com/nati047"><FontAwesomeIcon icon={faGithub} /></a>
          <a className="socials-icon" href="https://www.linkedin.com/in/webdev-nat/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className="socials-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>


      <div id="home" className="grid-home">
        <div className="home-main">
          <div className="hi">Hi,</div>
          <div className="name-container">
            <div className="im-name">I'm&nbsp;Natnael&nbsp;Tekletsadik</div>
          </div>
          <div className="developer">Full-stack Web Developer</div>
        </div>

        <div className="home-qoute">
          <div className="qoute">eat&nbsp;&nbsp;sleep&nbsp;&nbsp;code!</div>
        </div>

      </div>

    </div>
  );
}

export default Home;
