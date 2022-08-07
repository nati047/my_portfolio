import '../styles/Home.css';
import mypic2 from '../images/mypic2.jpg';
import mypic from '../images/mypic.jpg';

function Home() {
  return (
    <div className="home ">
      <div id="home" className="grid-home container">
        <div className="photo-container">
          <img src={mypic} className="mypic photo" alt="" />
        </div>
        <div className="home-main">
          <div className="hi">Hi,</div>
          <div className="name-container">
            <div className="im-name">I'm&nbsp;Natnael&nbsp;Tekletsadik</div>
          </div>
          <div className="developer">Full-stack Web Developer</div>
        </div>

        <div className="home-qoute">
          <div className="qoute">Welcome to My Portfolio!</div>
        </div>

      </div>

    </div>
  );
}

export default Home;
