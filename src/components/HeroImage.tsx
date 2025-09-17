import Image from "next/image";
import React from "react";

export default function HeroImage() {
  return (
    <div className="mb-8 md:mb-0 flex flex-1/2 justify-center">
      <div className="relative group h-full">
        <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-lg bg-purple-500/10 rotate-12 z-10" />
        <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-purple-500/10 -rotate-12 z-10" />
        <div className="relative z-20 w-45 h-45 sm:w-54 sm:h-54  md:w-72 md:h-72 lg:w-90 lg:h-90 rounded-2xl overflow-hidden shadow-2xl border-4 border-muted/10">
          <Image
            src="/photo.jpg"
            alt="my-photo"
            width={312}
            height={312}
            priority
            className="w-full group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg bg-[#1A1C28] border border-[#8b5cf6] group-hover:-translate-y-1 group-hover:translate-x-1 transform transition-transform duration-300 backdrop-blur-sm z-20">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#8b5cf6]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708z"></path>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"></path>
            <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708z"></path>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"></path>
          </svg>
        </div>
        <div className="absolute top-1/2 -left-3 sm:-left-4 md:-left-6 rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg bg-[#1A1C28]  border border-[#8b5cf6] group-hover:-translate-x-1 transform transition-transform duration-300 backdrop-blur-sm z-20">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#8b5cf6]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"></path>
          </svg>
        </div>
        <div className="absolute -bottom-2 right-6 sm:-bottom-4 sm:right-8 rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg bg-[#1A1C28]  border border-[#8b5cf6] group-hover:translate-y-1 transform transition-transform duration-300 backdrop-blur-sm z-20">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#8b5cf6]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
