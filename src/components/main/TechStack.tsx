import React from "react";
import SectionHeader from "../SectionHeader";
import { techStacks } from "@/lib/data";

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="min-h-screen bg-[#10141A] py-12 md:py-24 text-center"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <SectionHeader
          title="Tech Stack I Use"
          description="Here are the main technologies and tools I use to build high-quality, scalable projects."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((techStack, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              className="bg-[#0d1117] p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-500/30 hover:-translate-y-1 transition-all duration-300 aos-init aos-animate"
            >
              <div className="text-center">
                <techStack.icon className="text-[#8b5cf6] text-4xl" />
                <h3 className="text-xl font-semibold mb-2 text-sky-100">
                  {techStack.title}
                </h3>
                <p className="text-sm mb-4 text-[#8b949e]">
                  {techStack.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {techStack.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#8b5cf6]/10 text-[#8b5cf6] px-2 py-1 rounded-full flex items-center gap-1"
                  >
                    <tech.icon />
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
