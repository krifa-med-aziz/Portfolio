import SectionHeader from "../SectionHeader";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#10141A] py-12 md:py-24 text-center"
    >
      <SectionHeader
        title="My Skills"
        description="I've worked with a variety of technologies in front-end development. Here are some of my key areas of expertise:"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4 md:px-6 lg:px-12">
        {skills.map((skill) => (
          <div
            key={skill.title}
            data-aos="zoom-in"
            className="bg-[#0d1117] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-500/30 aos-init aos-animate"
          >
            <skill.icon className="text-[#8b5cf6] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-sky-100">
                {skill.title}
              </h3>
              <p className="text-sm mb-4 text-[#8b949e]">{skill.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <span
                  key={tech.label}
                  className="text-xs bg-[#8b5cf6]/10 text-[#8b5cf6] px-2 py-1 rounded-full flex items-center gap-1"
                >
                  <tech.icon className="text-[#8b5cf6] text-md" /> {tech.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
