import '../styles/Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home () {
  return (
    <div id="home" className="grid-home">
      <div className="nav">
        <a href="#home" className="nav-item">Home</a>
        <a className="nav-item">About</a>
        <a className="nav-item">Skills</a>
        <a className="nav-item">Projects</a>
      </div>

      <div className="socials">
        <a href="https://github.com/nati047"><FontAwesomeIcon icon={ faGithub } /></a>
        <a href="https://www.linkedin.com/in/webdev-nat/"><FontAwesomeIcon icon={ faLinkedin } /></a>
        <FontAwesomeIcon icon={ faInstagram } />
      </div>

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
  );
}

export default Home;
