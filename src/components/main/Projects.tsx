"use client";
import { useState } from "react";
import SectionHeader from "../SectionHeader";
import ProjectCard from "../ProjectCard";
import { Button } from "../ui/button";
import { projects } from "@/lib/data";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleToggleProjects = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(6);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, projects.length));
    }
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const isShowingAll = visibleCount >= projects.length;
  const buttonText = isShowingAll ? "Show Less" : "Show More";

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0d1117] py-12 md:py-24 text-center"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Projects"
          description="A selection of featured projects I've worked on, along with other projects demonstrating my skills."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                demo={project.demo}
                github={project.github}
                imageSrc={project.imageSrc}
                technologies={project.technologies}
                id={project.id}
              />
            );
          })}
        </div>
        {projects.length > 6 && (
          <Button
            className="mt-8 flex gap-1 items-center mx-auto"
            onClick={handleToggleProjects}
          >
            {buttonText}
            {isShowingAll ? <FaArrowUp /> : <FaArrowDown />}
          </Button>
        )}
      </div>
    </section>
  );
}
