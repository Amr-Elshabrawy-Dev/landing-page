import { useState } from "react";
import { Link } from "react-router";
import LogoSvg from "../../assets/amr.svg?react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  const toggleHandler = () => setToggle(!toggle);

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <div className="logo">
            <LogoSvg className="logo__svg" />
            <span>Logo</span>
          </div>
        </Link>
      </div>
      <nav className={`nav-links ${toggle ? "show" : ""}`}>
        <ul className="links">
          <li>
            <Link className="link home" to="/" onClick={toggleHandler}>
              home
            </Link>
          </li>
          <li>
            <Link className="link startNow-btn" to="/startNow" onClick={toggleHandler}>
              get started now
            </Link>
          </li>
          <li>
            <Link className="link login-btn" to="/login" onClick={toggleHandler}>
              login
            </Link>
          </li>
        </ul>
        <button className="toggle-button close-btn" onClick={toggleHandler}>
          <FaTimes size={20} />
        </button>
      </nav>
      <button className="toggle-button menu-btn" onClick={toggleHandler}>
        <FaBars size={20} />
      </button>
    </div>
  );
};
export default Navbar;
