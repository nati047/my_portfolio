import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLocationDot, faMobileScreenButton} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Contact () {
  return(
   <div id="contact" className="contact-container container">
     <div className="contact">Contact
       <div className="c-underline"></div>
     </div>
     <div className="c-methods">
       <div className="all-contacts">
          <FontAwesomeIcon className="email" icon={ faAt } /> <br />
          <div >isaacnatnael@gmail.com</div>
       </div>
       <div className="all-contacts">
         <FontAwesomeIcon className="phone" icon={faTelegram} /><br />
         <div >@isaacnt</div>
       </div>
       <div className="all-contacts">
         <FontAwesomeIcon  className="location" icon={faLocationDot} /><br />
         <div >Toronto, ON, Canada</div>
       </div>
       <a href="https://github.com/nati047" className="all-contacts">
         <FontAwesomeIcon className="github" icon={faGithub} /><br />
         <div >@nati047</div>
       </a>
       <a href="https://www.linkedin.com/in/webdev-nat/" className="all-contacts">
         <FontAwesomeIcon className="linkedin" icon={faLinkedin} /><br />
         <div >webdev-nat</div>
       </a>
     </div>
     <div className="thanks">Thanks for checking out my website!</div>
   </div>
  );
}

export default Contact;