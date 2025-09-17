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

export type TCareer = {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
};

export type TAchievement = {
  id: string;
  title: string;
  company: string;
  date: string;
  link: string;
};
