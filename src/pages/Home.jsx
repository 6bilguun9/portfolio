import "/src/styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profile from "/src/assets/Subject.png";
function Home() {
  return (
    <div className="container">
      <div className="main">
        <div className="info">
          <div className="overlay"></div>
          <div className="text-container">
            <h1 className="intro">Hi, I am</h1>
            <h1 className="name">Bilguun Batsukh</h1>
          </div>
          <div className="icons">
            <a href="https://github.com/6bilguun9">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/bilguun-batsukh-b772b4274/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:batsukhbilguun999@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src={profile} alt="" className="profile" />
        </div>
      </div>
      <div className="about-me">
        <div className="text-container">
          <h1 className="">About Me</h1>
          <p className="about-me-text">
            I am a dedicated computer science student at NOVA, recognized as a
            Presidential Scholar and Dean’s List honoree, with a strong
            foundation in front-end development, UX/UI design, and real-time
            application development. My experience includes contributing to
            innovative solutions during a United Nations Hackathon. I am
            passionate about building user-centered, scalable solutions and
            driving innovation in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
