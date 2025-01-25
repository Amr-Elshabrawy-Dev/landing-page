import {
  FaEnvelope,
  FaGithubAlt,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import LogoSvg from "../../assets/amr.svg?react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer__copyright">
          <span>&copy;</span>
          <span>Created by AMR Elshabrawy 2025</span>
          <LogoSvg className="logo__svg" />
        </div>
        <div className="footer__socials">
          <span>
            <a
              href="https://github.com/Amr-Elshabrawy-Dev"
              target="_blank"
              rel="noreferrer"
              title="github"
            >
              <FaGithubAlt />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/amr-elshabrawy-dev"
              target="_blank"
              rel="noreferrer"
              title="linkedin"
            >
              <FaLinkedin />
            </a>
          </span>
          <span>
            <a
              href="https://www.x.com/@AmrElshabr43803"
              target="_blank"
              rel="noreferrer"
              title="twitter"
            >
              <FaXTwitter />
            </a>
          </span>
          <span>
            <a
              href="mailto:amrelshabrawy.dev@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="email"
            >
              <FaEnvelope />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
