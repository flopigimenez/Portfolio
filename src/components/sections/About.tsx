import { motion } from "framer-motion";
import { FaGraduationCap, FaBook } from "react-icons/fa";
import { personalInfo } from "../../data/portfolioData";
import "../../styles/About.css";

export default function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre Mí
        </motion.h2>

        <div className="about-grid">
          <div className="about-cards">
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(167, 139, 250, 0.2)" }}
            >
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <h3>Educación</h3>
              <ul>
                {personalInfo.education.map((edu) => (
                  <li key={edu.level}>
                    <strong>{edu.level}:</strong> {edu.school}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(167, 139, 250, 0.2)" }}
            >
              <div className="card-icon">
                <FaBook />
              </div>
              <h3>Cursos</h3>
              <ul>
                {personalInfo.courses.map((course) => (
                  <li key={course.name}>
                    <strong>{course.name}</strong>
                    <span className="course-institution">{course.institution}</span>
                    {course.status && (
                      <span className="status-badge active">{course.status}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
