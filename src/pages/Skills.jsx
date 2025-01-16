import "/src/styles/skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <div>
        <h1 className="skills-text">USING NOW:</h1>
        <div className="figure-container">
          <div className="figure-sub-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
              alt=""
              className="skills react"
            />
            <img
              src="https://www.svgrepo.com/show/303388/java-4-logo.svg"
              alt=""
              className="skills java"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"
              alt=""
              className="skills figma"
            />
          </div>
          <div className="figure-sub-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
              className="skills js"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425"
              alt=""
              className="skills html"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png?20160530175649"
              alt=""
              className="skills css"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="skills-text">LEARNING:</h1>
        <div className="learning-container">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256"
            alt=""
            className="skills node"
          />
          <img
            src="https://www.cdnlogo.com/logos/m/78/mysql.svg"
            className="skills sql"
            alt=""
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp"
            alt=""
            className="skills mongo"
          />
        </div>
      </div>
      <div className="other-skills">
        <h1 className="skills-text">OTHER SKILLS:</h1>
        <div className="other-skills-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
            alt=""
            className="skills cpp"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
            alt=""
            className="skills python"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
