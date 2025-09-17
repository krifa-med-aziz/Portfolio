"use client";
import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { cn } from "@/lib/utils";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import {
  certifications,
  educations,
  experiences,
  volunteering,
} from "@/lib/data";
import CareerTimeline from "../CareerTimeline";
import AchievementSpotlight from "../AchievementSpotlight";
type TActive = "experience" | "certificates" | "volunteering";

export default function Experience() {
  const [active, setActive] = useState<TActive>("experience");
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#0d1117] py-12 md:py-24 text-center"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <SectionHeader
          title="Experience & Education"
          description="My professional journey, certifications, volunteering, and educational background that have shaped my skills and expertise."
        />
        <div className="w-full flex flex-col sm:flex-row border border-gray-500/30 text-[#8b5cf6] mb-10">
          <button
            onClick={() => setActive("experience")}
            className={cn(
              "bg-[#10141A] py-2 flex-1 hover:bg-[#8b5cf6]/10 cursor-pointer ",
              {
                "bg-[#8b5cf6]/10": active === "experience",
              }
            )}
          >
            Experience & Education
          </button>
          <button
            onClick={() => setActive("certificates")}
            className={cn(
              "bg-[#10141A] py-2 flex-1 hover:bg-[#8b5cf6]/10 cursor-pointer ",
              {
                "bg-[#8b5cf6]/10": active === "certificates",
              }
            )}
          >
            Certificates
          </button>
          <button
            onClick={() => setActive("volunteering")}
            className={cn(
              "bg-[#10141A] py-2 flex-1 hover:bg-[#8b5cf6]/10 cursor-pointer ",
              {
                "bg-[#8b5cf6]/10": active === "volunteering",
              }
            )}
          >
            Volunteering
          </button>
        </div>
        {active === "experience" && (
          <div
            data-aos="zoom-in"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 aos-init aos-animate"
          >
            {/* experience */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8 flex items-center text-sky-100 gap-2">
                <MdWork className="text-[#8b5cf6]" />
                Work Experience
              </h3>
              <div className="relative border-l-2 border-[#8b5cf6]/30 pl-6 sm:pl-8 space-y-8 md:space-y-12">
                {experiences.map((exp) => {
                  return <CareerTimeline key={exp.id} item={exp} />;
                })}
              </div>
            </div>
            {/* education */}
            <div>
              <h3 className="text-xl text-sky-100 sm:text-2xl font-semibold mb-6 md:mb-8 flex items-center gap-2">
                <FaGraduationCap className="text-[#8b5cf6]" />
                Education
              </h3>
              <div className="relative border-l-2 border-[#8b5cf6]/30 pl-6 sm:pl-8 space-y-8 md:space-y-12">
                {educations.map((edu) => {
                  return <CareerTimeline key={edu.id} item={edu} />;
                })}
              </div>
            </div>
          </div>
        )}
        {active === "certificates" && (
          <div data-aos="zoom-in" className=" aos-init aos-animate mt-10">
            {certifications.map((certif) => {
              return (
                <AchievementSpotlight
                  active={active}
                  key={certif.id}
                  item={certif}
                />
              );
            })}
          </div>
        )}
        {active === "volunteering" && (
          <div>
            {volunteering.map((v) => {
              return (
                <AchievementSpotlight active={active} key={v.id} item={v} />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
