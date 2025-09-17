"use client";
import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { cn } from "@/lib/utils";
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
        <div className="w-full flex flex-col sm:flex-row border border-gray-500/30 text-[#8b5cf6]">
          <button
            onClick={() => setActive("experience")}
            className={cn(
              "bg-[#10141A] py-2 flex-1 hover:bg-[#10141A]/30 cursor-pointer transition",
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
              "bg-[#10141A] py-2 flex-1 hover:bg-[#10141A]/30 cursor-pointer transition",
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
              "bg-[#10141A] py-2 flex-1 hover:bg-[#10141A]/30 cursor-pointer transition",
              {
                "bg-[#8b5cf6]/10": active === "volunteering",
              }
            )}
          >
            Volunteering
          </button>
        </div>
      </div>
    </section>
  );
}
