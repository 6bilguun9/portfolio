import "/src/styles/otherHeader.css";
import { Link } from "react-router-dom";
import HedrBtn from "/src/components/HedrBtn";

function OtherHeader() {
  return (
    <div>
      <header className="other-header">
        <div className="other-buttons">
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

export default OtherHeader;
