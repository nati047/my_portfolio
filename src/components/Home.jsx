import '../styles/Home.css';

function Home () {
  return (
    <div className="grid-home">
      <div className="nav">
        <a className="nav-item">home</a>
        <a className="nav-item">about</a>
        <a className="nav-item">skills</a>
        <a className="nav-item">projects</a>
      </div>
      <div className="socials"></div>
      <div className="home-main">
        <div className="hi">Hi,</div>
        <div className="im-name">I'm Natnael Tekletsadik</div>
        <div className="developer">Full-stack Web Developer</div>
      </div>
      <div className="home-qoute">
        <div className="qoute">eat, sleep, code</div>
      </div>
    </div>
  );
}

export default Home;
