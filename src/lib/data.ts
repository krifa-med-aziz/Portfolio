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
import { Skill, TProjects } from "./types";

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

export const projects: TProjects[] = [
  {
    id: 1,
    imageSrc: "/Portfolio.png",
    title: "Portfolio",
    description:
      " A modern front-end portfolio showcasing projects, skills, andexperiences with a responsive and interactive design. A modernfront-end portfolio showcasing projects, skills, and experienceswith a responsive and interactive design. A modern front-endportfolio showcasing projects, skills, and experiences with aresponsive and interactive design.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/krifa-med-aziz/portfolio",
    demo: "",
  },
  {
    id: 2,
    imageSrc: "/Petsoft.png",
    title: "Petsoft",
    description:
      "Petsoft is a modern pet management application I built to simplify how pet owners keep track of their furry friends. I designed the system so users can securely register, add/edit pet profiles (including photos, age, and notes), and search or filter by pet or owner. On top of that, I integrated Stripe for subscription management so users can access premium features, and used NextAuth.js for secure authentication. I built it with Next.js, TypeScript, Tailwind CSS, and Prisma, focusing on a responsive design and clean UI to make the experience intuitive and reliable.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"],
    github: "https://github.com/krifa-med-aziz/Petsoft",
    demo: "https://petsoft.vercel.app/",
  },
  {
    id: 3,
    imageSrc: "/Evento.png",
    title: "EVENTO",
    description:
      "EVENTO is a modern event discovery app I built to help users easily find, browse, and learn about local events in their city. I designed it so you can search by city, view detailed event info including organizer, location, and description, and navigate through pages of events using pagination. Using Next.js 15 with TypeScript and Prisma (with SQLite), I focused not only on performance and clean architecture, but also on making the UI engaging via Tailwind CSS and Framer Motion animations. The project reflects my passion for combining backend logic, frontend interactivity, and thoughtful UX to create something that feels both useful and polished.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Prisma"],
    github: "https://github.com/krifa-med-aziz/EVENTO",
    demo: "",
  },
  {
    id: 4,
    imageSrc: "/Dynamic-Survey.png",
    title: "Dynamic Survey",
    description:
      "Dynamic Survey is an interactive app I created to simplify gathering customer feedback after-sales services — particularly for vehicle services. Rather than hard-coding questions, everything (question types, order, validation) is driven by data from a JSON file, which makes it flexible and easy to update. I used React with TypeScript, React-Hook-Form for validation, and a stepped navigation with a progress bar to enhance user experience. The design is responsive and smooth, with attention to form usability and state management using Context API. I built this project not only to hone my frontend skills, but also to understand how to deliver survey logic cleanly and maintainably.",
    technologies: ["React", "TailwindCSS", "TypeScript", "Zod"],
    github: "https://github.com/krifa-med-aziz/Dynamic-Survey",
    demo: "https://enquete-de-satisfaction.netlify.app/",
  },
  {
    id: 5,
    imageSrc: "/InkWell.png",
    title: "InkWell",
    description:
      "InkWell is a blogging platform I built to turn Markdown files into fully styled blog posts with minimal setup. The idea came from wanting a clean writing workflow: you write in Markdown (locally or from a GitHub repo), and InkWell handles the rest — parsing, displaying, routing, and styling. I chose React along with TypeScript for structure and safety, and integrated content rendering with Markdown, syntax highlighting, and UI styling to deliver a polished reading experience. Behind the scenes, I focused on responsive design and navigation to make sure readers on mobile and desktop feel equally comfortable.",
    technologies: ["React", "TailwindCSS", "TypeScript", "Vite"],
    github: "https://github.com/krifa-med-aziz/InkWell-Markdown-Blog-Platform",
    demo: "https://inkwellblogplatform.netlify.app/",
  },
  {
    id: 6,
    imageSrc: "/Rmtdev.png",
    title: "RmtDev",
    description:
      "RmtDev is a remote job search platform I built to help developers discover and bookmark their ideal job listings in real time. The idea came out of seeing how hard it is to keep up with remote opportunities and wanting something clean, fast, and responsive. With features like live-search with debounce, sorting by relevance or freshness, bookmarking jobs locally, and detailed job pages (company info, etc.), I focused on making the experience smooth and useful. I built it using React + TypeScript, using modular hooks and Context API, and styled it responsively so it feels great on mobile or desktop.",
    technologies: ["react", "TailwindCSS", "TypeScript", "Context API"],
    github: "https://github.com/krifa-med-aziz/RmtDev",
    demo: "",
  },
  {
    id: 7,
    imageSrc: "/CorpComment.png",
    title: "CorpComment",
    description:
      "CorpComment is a platform I built to make it simple for people to share feedback publicly about companies. The idea came from seeing how feedback is often siloed or hard to find, so I wanted something where you could write genuine thoughts, tag a company, and have others read and engage. Using a clean frontend with React (or Next.js, if that’s what you used), I focused on making the UI intuitive — easy to submit, hashtag companies, and see what others have said. I also paid attention to responsive design so the platform works well on both desktop and mobile.",
    technologies: ["React", "TailwindCSS", "TypeScript", "Zustand"],
    github: "https://github.com/krifa-med-aziz/CorpComment",
    demo: "",
  },
  {
    id: 8,
    imageSrc: "/Trekbag.png",
    title: "Trekbag",
    description:
      "Trekbag is a gear-management web app I built to streamline packing for outdoor trips and adventures. The inspiration came from always forgetting small essentials or overpacking—so I designed Trekbag so users can create custom packing lists, categorize items (clothing, gear, food, etc.), mark items as packed, and share lists with friends. I built it using React + TypeScript with a clean UI and dark/light mode toggle to adapt to different usage contexts. The project reflects my drive to build tools that solve everyday problems with simplicity and reliability, combining frontend UX, data management, and responsive desig",
    technologies: ["React", "Vite", "JavaScript"],
    github: "https://github.com/krifa-med-aziz/Trekbag",
    demo: "",
  },
  {
    id: 9,
    imageSrc: "/WordAnalytics.png",
    title: "Word-Analytics",
    description:
      "Word Analytics is a tool I built to help users better understand their writing through data. The idea came from wanting to see patterns in how words are used — frequency, sentiment, readability — so users can improve clarity, style, or tone. I built it using React with a focus on real-time text analysis, user feedback, and visual insights (charts or graphs). Beyond just coding, I paid attention to usability — making sure results are easy to read, interactions are smooth, and the interface is clean on both mobile and desktop.",
    technologies: ["React", "JavaScript", "Vite"],
    github: "https://github.com/krifa-med-aziz/Word-Analytics",
    demo: "",
  },
  {
    id: 10,
    imageSrc: "/Bankist.png",
    title: "Bankist App",
    description:
      "Bankist is a modern, minimalist banking application I built to give users full control over their finances in one place. I focused on clean UI, smooth animations, and intuitive flows so users can easily log in, view account balances, review transactions, request loans, and even close accounts with confidence. To improve user experience, features like lazy loading, interactive tabs, modals, and a testimonial slider were included to make the app feel dynamic and polished. This project helped me deepen my frontend skills (vanilla JS, HTML/CSS) and taught me a lot about designing user interactions, accessibility, and performance optimizations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/krifa-med-aziz/Bankist-App",
    demo: "",
  },
  {
    id: 11,
    imageSrc: "/Forkify.png",
    title: "Forkify App",
    description:
      "Forkify is a recipe discovery app I developed to make cooking more accessible and fun. Users can search for recipes by keywords, view detailed ingredient lists, adjust serving sizes, and bookmark their favorite recipes for later. I built it using JavaScript, integrating the Forkify API for data fetching. My goal was to deliver a seamless UX with responsive design, smooth state handling, and intuitive navigation so the app feels polished and reliable on any device.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/krifa-med-aziz/forkify-app",
    demo: "",
  },
  {
    id: 12,
    imageSrc: "/Mapty.png",
    title: "Mapty App",
    description:
      "Mapty-App is a workout tracker I built so people can log and visualize their running or cycling activity in a more meaningful way. Instead of just numbers, I wanted users to see their workouts on a map, add context (distance, duration, elevation or cadence), and keep everything persistent via local storage so it doesn’t disappear after a refresh. I used Leaflet.js to integrate maps in a simple, interactive way, and built the UI with plain JavaScript, HTML, and CSS to keep it lean and responsive. This project helped me deepen my understanding of geolocation, event handling, and data storage in the browser.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/krifa-med-aziz/Mapty-App",
    demo: "",
  },
];
