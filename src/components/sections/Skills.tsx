import { motion } from "framer-motion";
import {
  FaJava,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaCheckCircle,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { skills } from "../../data/portfolioData";
import "../../styles/Skills.css";

const techIcons: Record<string, React.ReactNode> = {
  Java: <FaJava />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  React: <FaReact />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="habilidades" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Habilidades
        </motion.h2>

        <div className="skills-grid">
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Lenguajes de Programación</h3>
            <motion.div
              className="skill-items"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.programming.map((skill) => (
                <motion.div
                  key={skill}
                  className="skill-chip tech"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#8b5cf6" }}
                >
                  <span className="skill-icon">{techIcons[skill]}</span>
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Frontend</h3>
            <motion.div
              className="skill-items"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.frontend.map((skill) => (
                <motion.div
                  key={skill}
                  className="skill-chip tech"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#8b5cf6" }}
                >
                  <span className="skill-icon">{techIcons[skill]}</span>
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Habilidades Blandas</h3>
            <motion.div
              className="skill-items"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.soft.map((skill) => (
                <motion.div
                  key={skill}
                  className="skill-chip soft"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="soft-icon" />
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
