import '../styles/Projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import image1 from '../images/My-urls.png';
import dog from '../images/dog.jpg';
import backsteen from '../images/backsteen.png';
import tinyApp from '../images/tinyapp.png';
import scheduler from '../images/scheduler.png';
import tweeter from '../images/tweeter.png';
function Projects() {
  return (
    <div id="projects" className="projects-container container">
      <div className="projects">PROJECTS
        <div className="p-underline"></div>
      </div>
      <div className="projects-flex">
        <div className="project-card">
          <div className="image-wrapper">
            <img className="project-image" src={backsteen} />
          </div>
          <div className="project-description">
            <div className="project-name">BACKSTEEN</div>
            <div className="about-project">Backsteen is a multiplayer brick breaker game where players can play against each other remotely.They can also see their opponent's screen while playing, in a split screen format.
            </div>
            <p>Tech-stack: HTML5, Canvas, React, NodeJS, Expressjs, socket.io</p>
            <div className="project-links">
              <a href="https://github.com/nati047/backsteen" ><FontAwesomeIcon icon={faGithub} /></a>
              <a href="http://backsteen.herokuapp.com/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="image-wrapper">
            <img className="project-image" src={tinyApp} />
          </div>
          <div className="project-description">
            <div className="project-name">TINY APP</div>
            <div className="about-project">Tiny app allows users to shorten long urls. Users can also store short urls for future use.</div>
            <p>Tech-stack: NodeJS, Expressjs, Ejs, Bootstrap</p>
            <div className="project-links">
              <a href="https://github.com/nati047/tinyapp" ><FontAwesomeIcon icon={faGithub} /></a>
              <a href=""><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="image-wrapper">
            <img className="project-image" src={scheduler} />
          </div>
          <div className="project-description">
            <div className="project-name">SCHEDULER</div>
            <div className="about-project">Scheduler is a react application where students can easily make, edit and delete appointment with interviewers.</div><br/>
            <p>Tech-stack: React, NodeJS, Expressjs, Storybook, Cypress</p>
            <div className="project-links">
              <a href="https://github.com/nati047/scheduler"><FontAwesomeIcon icon={faGithub} /></a>
              <a><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="image-wrapper">
            <img className="project-image" src={tweeter} />
          </div>
          <div className="project-description">
            <div className="project-name">TWEETER</div>
            <div className="about-project">A tweeter like application where user's can share what's on their mind on desktop or smaller screens.</div>
            <p>Tech-stack: NodeJS, Expressjs, CSS3</p>
            <div className="project-links">
              <a href="https://github.com/nati047/tweeter" ><FontAwesomeIcon icon={faGithub} /></a>
              <a><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;