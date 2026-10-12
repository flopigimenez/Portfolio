import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/flopigimenez" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
        <p className="footer-text">
          Hecho con <FaHeart className="heart" /> por {personalInfo.name}
        </p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
