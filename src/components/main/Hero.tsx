"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import LightRays from "../ui/LightRays";
import TextType from "../ui/TextType";
import HeroImage from "../HeroImage";
import Image from "next/image";
import { technologies } from "@/lib/data";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { useLenis } from "@/lib/lenis";

export default function Hero() {
  const lenis = useLenis();

  const handleViewWork = () => {
    scrollToSection("projects", lenis);
  };

  const handleContact = () => {
    scrollToSection("contact", lenis);
  };
  return (
    <section id="home" className="bg-[#0d1117] w-full min-h-screen relative">
      <div
        className="z-1"
        style={{ width: "100%", height: "100vh", position: "absolute" }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#360f5a"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div className="min-h-screen w-[95%] px-4 pb-12 container mx-auto flex flex-col-reverse md:flex-row gap-8 lg:gap-15 items-center pt-30  relative z-100">
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1/2 flex flex-col"
        >
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-sky-100">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#4c1d95]">
                Med Aziz Krifa
              </span>
            </h1>
            <TextType
              text={[
                "Full-Stack Web Developer",
                "Building Modern Web Apps",
                "Software Engineering Student",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="w-2 h-2"
              textColors={["#8B949E"]}
              className="md:text-3xl text-xl font-bold mt-5"
            />
          </div>
          <p className="text-base sm:text-lg max-w-xl leading-relaxed text-[#8A939D] my-10 text-center md:text-left">
            I craft responsive web applications where technologies meet
            creativity. Building exceptional digital experiences with modern
            full stack frameworks.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start pt-2 sm:pt-4">
            <Button onClick={handleViewWork}>
              <span>View My Work</span>
              <ArrowRight className="group-hover:translate-x-1 transform transition-all duration-300" />
            </Button>
            <Button variant={"secondary"} onClick={handleContact}>
              Contact Me
            </Button>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6">
            <p className="text-xs sm:text-sm text-[#8A939D] font-medium text-center md:text-left">
              Tech I work with:
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 sm:gap-2 bg-[#14191F] px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-[#30363d] hover:bg-[#0d1117] hover:text-white hover:shadow-md transition-all duration-300 group text-gray-400 font-light"
                  title={tech.name}
                >
                  <Image
                    src={tech.logo}
                    width={20}
                    height={20}
                    alt={tech.name}
                    className="group-hover:scale-[1.1] transition-all duration-300"
                  />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1/2 flex justify-center items-center"
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
}
