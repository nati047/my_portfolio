import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {  reset } from '../../src/scrollAnimation';

function Navbar() {
  
  return (
    <div className="nav">  
      <div onClick={() => reset()} className="nav-menu">
        <a className="nav-item"  href="#home" >Home</a>
        <a className="nav-item" href="#about" >About</a>
        <a className="nav-item" href="#skills" >Skills</a>
        <a className="nav-item" href="#projects">Projects</a>
        <a className="nav-item" href="#contact">Contact</a>
      </div>
      <div className="socials">
        <a className="socials-icon" href="https://github.com/nati047"><FontAwesomeIcon icon={faGithub} /></a>
        <a className="socials-icon" href="https://www.linkedin.com/in/webdev-nat/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className="socials-icon"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  );
}

export default Navbar