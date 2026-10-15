import elbuenSabor from "../assets/img/elBuenSabor.png";
import beautyConnect from "../assets/img/BeautyConnect.png";
import pluginTurnos from "../assets/img/PluginTurnos.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export const personalInfo = {
  name: "Florencia Gimenez Morcos",
  email: "florgmzm@gmail.com",
  bio: "Soy una persona con ganas de formar parte de un entorno laboral, con el fin de aprender y formarme cada vez más como persona y como profesional.",
  education: [
    {
      level: "Primario",
      school: "Colegio Bilingüe Portezuelo",
    },
    {
      level: "Secundario",
      school: "Colegio Bilingüe Portezuelo",
    },
    {
      level: "Universitario",
      school: "Tecnicatura Universitaria en Programación",
    },
  ],
  courses: [
    {
      name: "Egg Programación desde cero",
      institution: "Egg",
    },
    {
      name: "Diseño UX: experiencia de usuario UX/UI + Figma 2025",
      institution: "Udemy",
      status: "En curso",
    },
  ],
};

export const skills = {
  programming: ["Java", "JavaScript", "TypeScript"],
  frontend: ["HTML", "CSS", "React"],
  soft: [
    "Orden y organización",
    "Aprendizaje rápido",
    "Resolución de problemas",
    "Trabajo en equipo",
    "Adaptación rápida a formas de trabajo",
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "BeautyConnect",
    description:
      "Aplicación web que conecta clientes con centros de estética, permitiendo consultar servicios y profesionales, leer reseñas y reservar turnos online.",
    image: beautyConnect,
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Firebase Auth", "Java", "Spring Boot", "MySQL", "API REST"],
    demoUrl: "https://beauty-connect.vercel.app/",
    codeUrl: "https://github.com/flopigimenez/BeautyConnect",
  },
  {
    id: 2,
    title: "El Buen Sabor",
    description:
      "Ecommerce de pedidos gastronómicos que permite a los clientes consultar el catálogo de comidas y bebidas y realizar pedidos para retirar en el local o recibir a domicilio.",
    image: elbuenSabor,
    tags: ["React", "TypeScript", "HTML", "CSS", "Bootstrap", "Redux Toolkit", "API REST"],
    codeUrl: "https://github.com/diegoCardenas03/ElBuenSabor",
  },

  {
    id: 3,
    title: "Plugin Turnos",
    description:
      "Plugin para gestión de turnos en aplicaciones web, permite reservar citas online y configurar horarios personalizados para cada profesional",
    image: pluginTurnos,
    tags: ["React", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://psicologaadelaalvarez.com.ar",
  },
];
