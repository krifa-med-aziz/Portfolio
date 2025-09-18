"use client";
import { socialLinks } from "@/lib/data";
import { cn, scrollToSection, SectionId } from "@/lib/utils";
import { TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/lib/lenis";

type Tactive = SectionId;
const navLinks: { label: string; href: string; value: Tactive }[] = [
  { label: "Home", href: "/", value: "home" },
  { label: "About", href: "#about", value: "about" },
  { label: "Skills", href: "#skills", value: "skills" },
  { label: "Projects", href: "#projects", value: "projects" },
  { label: "Contact", href: "#contact", value: "contact" },
];

export default function Header() {
  const [active, setActive] = useState<Tactive>("home");
  const [isOpen, setisOpen] = useState(false);
  const lenis = useLenis();

  const handleScrollToSection = (id: Tactive) => {
    scrollToSection(id, lenis, setActive);
  };

  return (
    <>
      <header className="flex bg-[#0d1117] md:px-6 md:py-3 justify-between md:justify-start rounded-4xl items-center md:w-full max-w-[75%] lg:max-w-[55%] min-w-[170px] w-[250px] text-white fixed top-3.5 left-1/2 -translate-x-1/2 shadow-sm flex-col md:flex-row space-y-5 z-200">
        <div className="flex justify-between items-center flex-1 w-full px-5 py-3 md:p-0 mb-0">
          <Link href="/" className="text-xl font-bold text-slate-100">
            KRIFA<span className="text-violet-500">.</span>
          </Link>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setisOpen((prev) => !prev)}
          >
            {isOpen ? <X /> : <TextAlignJustify />}
          </div>
        </div>
        <div className="hidden md:flex w-full items-center">
          <nav className="flex space-x-1 text-sm text-gray-400 w-full justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.value}
                href={link.href}
                aria-label={link.label}
                onClick={() => handleScrollToSection(link.value)}
                className={cn(
                  "hover:text-violet-500 transition p-2 rounded-2xl",
                  active === link.value && "text-violet-500 bg-violet-400/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex space-x-1 text-lg text-gray-400">
            {socialLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="hover:text-violet-500 hover:bg-violet-400/10 p-2 rounded-full transition"
                >
                  <link.icon />
                </Link>
              );
            })}
          </div>
        </div>
        {/* Mobile View */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-[#0d1117] w-full rounded-bl-4xl rounded-br-4xl"
            >
              <nav className="flex flex-col items-center w-full ">
                {navLinks.map((link) => (
                  <Link
                    key={link.value}
                    href={link.href}
                    onClick={() => {
                      handleScrollToSection(link.value);
                      setisOpen(false);
                    }}
                    className={cn(
                      "hover:text-violet-500 transition p-2 rounded-2xl w-full text-center",
                      active === link.value &&
                        "text-violet-500 bg-violet-400/10"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex space-x-2 justify-center py-3 px-1 border-t border-t-purple-500">
                {socialLinks.map((link) => {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      className="hover:text-violet-500 hover:bg-violet-400/10 p-2 rounded-full transition"
                    >
                      <link.icon />
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
