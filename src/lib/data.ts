import { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiEslint,
  SiPrettier,
  SiPrisma,
  SiStyledcomponents,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import {
  RiCodeSSlashLine,
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";

export const technologies = [
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TailwindCSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

export const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/krifa-med-aziz",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mohamed-aziz-krifa-87bb02295/",
    icon: FaLinkedin,
  },
  { name: "Mail", href: "mailto:krifaaziz10@gmail.com", icon: MdEmail },
  {
    name: "Instagram",
    href: "https://www.instagram.com/med_aziz_krifa/",
    icon: FaInstagram,
  },
];

export type Skill = {
  icon: IconType;
  title: string;
  description: string;
  technologies: { icon: IconType; label: string }[];
};

export const skills: Skill[] = [
  {
    icon: FaReact,
    title: "Front-End Development",
    description:
      "Building responsive and optimized web applications with modern frameworks.",
    technologies: [
      {
        icon: FaHtml5,
        label: "HTML5",
      },
      {
        icon: FaCss3Alt,
        label: "CSS",
      },
      {
        icon: IoLogoJavascript,
        label: "JavaScript",
      },
      {
        icon: SiTypescript,
        label: "TypeScript",
      },
      {
        icon: RiNextjsFill,
        label: "Next.js",
      },
      {
        icon: FaReact,
        label: "React",
      },
    ],
  },
  {
    icon: RiCodeSSlashLine,
    title: "Styling & UI Frameworks",
    description:
      "Crafting modern and maintainable UI components with efficient styling techniques.",
    technologies: [
      {
        icon: RiTailwindCssFill,
        label: "TailWind CSS",
      },
      {
        icon: FaCss3Alt,
        label: "CSS Modules",
      },
      {
        icon: SiStyledcomponents,
        label: "Styled Components",
      },
      {
        icon: IoLogoFigma,
        label: "Figma",
      },
    ],
  },
  {
    icon: FaDatabase,
    title: "State Management",
    description:
      "Handling application state efficiently for scalable applications.",
    technologies: [
      {
        icon: FaReact,
        label: "Context API",
      },
      {
        icon: FaDatabase,
        label: "Zustand",
      },
    ],
  },
  {
    icon: AiFillCode,
    title: "Back-End Integration",
    description:
      "Connecting front-end applications to databases and back-end services.",
    technologies: [
      {
        icon: AiFillCode,
        label: "REST APIs",
      },
      {
        icon: SiPrisma,
        label: "Prisma",
      },
      {
        icon: RiSupabaseFill,
        label: "SupaBase",
      },
    ],
  },
  {
    icon: AiFillCode,
    title: "Development Tools",
    description:
      "Optimizing workflows with modern development and build tools.",
    technologies: [
      {
        icon: SiWebpack,
        label: "Webpack",
      },
      {
        icon: SiEslint,
        label: "ESLint",
      },
      {
        icon: SiPrettier,
        label: "Prettier",
      },
    ],
  },
  {
    icon: FaGitAlt,
    title: "Version Control & Deployment",
    description:
      "Managing code collaboration and deploying applications efficiently.",
    technologies: [
      {
        icon: FaGitAlt,
        label: "Git",
      },
      {
        icon: FaGithub,
        label: "GitHub",
      },
      {
        icon: IoLogoVercel,
        label: "Vercel",
      },
    ],
  },
];
