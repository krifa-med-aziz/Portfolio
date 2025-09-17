import { IconType } from "react-icons";

export type TProjects = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  github: string;
  demo: string;
};
export type TechSkill = {
  icon: IconType;
  title: string;
  description: string;
  technologies: { icon: IconType; label: string }[];
};
