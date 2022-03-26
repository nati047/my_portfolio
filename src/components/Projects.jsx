import '../styles/Projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image1 from '../images/My-urls.png';
import dog from '../images/dog.jpg';
function Projects() {
  return (
    <div id="projects" className="projects-container">
      <div className="projects">PROJECTS
        <div className="p-underline"></div>
      </div>
      <div className="projects-grid">
        <div className="project-card">
          <div className="image-wrapper">
            <img className="project-image" src={image1} />
          </div>
          <div className="project-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est numquam fugit quo rerum impedit blanditiis tempora magnam aliquid unde labore!
          </div>
        </div>
        <div className="project-card">
          <div className="image-wrapper">
            <img className="project-image" src={dog} />
          </div>
          <div className="project-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est numquam fugit quo rerum impedit blanditiis tempora magnam aliquid unde labore!
          </div>
        </div>
        <div className="project-card">
          <div className="image-wrapper">
            <img className="project-image" src={dog} />
          </div>
          <div className="project-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est numquam fugit quo rerum impedit blanditiis tempora magnam aliquid unde labore!
          </div>
        </div>
        <div className="project-card">
          <div className="image-wrapper">
            <img className="project-image" src={image1} />
          </div>
          <div className="project-description">
            <div className="project-name">TINY APP</div>
            <div className="about-project">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, asperiores.</div>
            <div className="project-links">
              <a><FontAwesomeIcon icon={faGithub} /></a>
              <a><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;