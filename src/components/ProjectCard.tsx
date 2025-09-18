"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { TProjects } from "@/lib/types";
import { FiGithub } from "react-icons/fi";

export default function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  github,
  demo,
}: TProjects) {
  const [expanded, setexpanded] = useState(false);
  return (
    <div
      data-aos="zoom-in-up"
      className="group border border-gray-500/30 rounded-xl bg-transparent hover:shadow-md transition-all overflow-hidden flex flex-col h-full"
    >
      <div className="relative h-60">
        <Image
          src={imageSrc}
          alt="portfolio"
          height={40}
          width={300}
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500 absolute w-full h-full inset-0"
        />
      </div>
      <div className="p-5 text-left flex flex-col flex-grow">
        <div>
          <h4 className="text-lg font-semibold text-sky-100 mb-2">{title}</h4>
          <p
            className={cn("text-sm text-[#8b949e]  mb-2", {
              "line-clamp-3": expanded === false,
            })}
          >
            {description}
          </p>
          <button
            onClick={() => setexpanded((prev) => !prev)}
            className="mb-3 cursor-pointer"
          >
            <small className=" flex justify-center items-center gap-2  text-violet-300 hover:bg-violet-300/10 px-2 py-1 rounded-md">
              {expanded ? "Show less" : "Show more"}
              {expanded ? (
                <FaArrowUp className="text-sm" />
              ) : (
                <FaArrowDown className="text-sm" />
              )}
            </small>
          </button>
        </div>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech, indx) => {
              return (
                <span
                  key={indx}
                  className="text-[11px] px-2 py-1 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6]"
                >
                  {tech}
                </span>
              );
            })}
          </div>
          <div className="flex gap-3 items-center">
            <Link
              href={github}
              target="_blank"
              className="bg-gray-500/10 px-3 py-1 rounded-full text-gray-500 hover:bg-gray-500/20 transition flex items-center justify-center gap-1 text-sm"
            >
              <FiGithub />
              <p>GitHub Repo</p>
            </Link>
            {demo && (
              <Link
                href={demo}
                target="_blank"
                className="bg-gray-500/10 px-3 py-1 rounded-full text-gray-500 hover:bg-gray-500/20 transition flex items-center justify-center gap-1 text-sm"
              >
                <FaExternalLinkAlt />
                <p>Demo</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
