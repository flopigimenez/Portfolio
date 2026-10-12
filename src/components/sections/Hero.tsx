import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../../data/portfolioData";
import "../../styles/Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>

      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hola, soy
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#proyectos" className="btn btn-primary">
            Ver Proyectos
          </a>
          <a href="#contacto" className="btn btn-outline">
            Contacto
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.2, color: "#c4b5fd" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Email"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://github.com/flopigimenez"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#c4b5fd" }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span />
      </motion.div>
    </section>
  );
}
