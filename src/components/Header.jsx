import "/src/styles/header.css";
import HedrBtn from "/src/components/hedrBtn";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="big-container">
      <header className="header">
        <div className="buttons">
          <Link to="/">
            <HedrBtn name="Home" />
          </Link>
          <Link to="/skills">
            <HedrBtn name="Skills" />
          </Link>
          <HedrBtn name="CV" />
          <Link to="/contact">
            <HedrBtn name="Contact Me" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
