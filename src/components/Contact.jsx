import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLocationDot, faMobileScreenButton} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact () {
  return(
   <div id="contact" className="contact-container">
     <div className="contact">Contact
       <div className="c-underline"></div>
     </div>
     <div className="c-methods">
       <div className="all-contacts">
          <FontAwesomeIcon icon={ faAt } /> 
          <div className="email">isaacnatnael@gmail.com</div>
       </div>
       <div className="all-contacts">
         <FontAwesomeIcon icon={faMobileScreenButton} />
         <div className="phone">+16479049791</div>
       </div>
       <div className="all-contacts">
         <FontAwesomeIcon icon={faLocationDot} />
         <div className="location">Toronto, ON, Canada</div>
       </div>
       <a href="https://github.com/nati047" className="all-contacts">
         <FontAwesomeIcon icon={faGithub} />
         <div className="github">@nati047</div>
       </a>
       <a href="https://www.linkedin.com/in/webdev-nat/" className="all-contacts">
         <FontAwesomeIcon icon={faLinkedin} />
         <div className="linkedin">webdev-nat</div>
       </a>
     </div>
   </div>
  );
}

export default Contact;