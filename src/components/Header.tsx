"use client";
import { TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Tactive = "home" | "about" | "contact" | "projects" | "skills";
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
  const activeStyle = "text-violet-500 bg-violet-400/10";
  return (
    <>
      <header
        className={`flex bg-slate-900 md:px-6 md:py-3 justify-between md:justify-start rounded-4xl items-center md:w-full max-w-[75%] lg:max-w-[55%] min-w-[170px] w-[250px] text-white absolute top-3.5 left-1/2 -translate-x-1/2 shadow-sm flex-col md:flex-row space-y-5`}
      >
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
                onClick={() => setActive(link.value)}
                className={`hover:text-violet-500 transition p-2 rounded-2xl ${
                  active === link.value ? activeStyle : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex space-x-1 text-lg text-gray-400">
            <Link
              href="https://github.com/krifa-med-aziz"
              target="_blank"
              className="hover:text-violet-500 hover:bg-violet-400/10 p-2 rounded-full transition"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohamed-aziz-krifa-87bb02295/"
              target="_blank"
              className="hover:text-violet-500 hover:bg-violet-400/10  p-2 rounded-full transition"
            >
              <FaLinkedin />
            </Link>
            <a
              href="mailto:krifaaziz10@gmail.com"
              target="_blank"
              className="hover:text-violet-500 hover:bg-violet-400/10 p-2 rounded-full transition"
            >
              <MdEmail />
            </a>
            <Link
              href="https://www.instagram.com/med_aziz_krifa/"
              target="_blank"
              className="hover:text-violet-500 hover:bg-violet-400/10 p-2  rounded-full transition"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-900 w-full rounded-bl-4xl rounded-br-4xl">
            <nav className="flex flex-col items-center w-full ">
              {navLinks.map((link) => (
                <Link
                  key={link.value}
                  href={link.href}
                  onClick={() => setActive(link.value)}
                  className={`hover:text-violet-500 transition p-2 text-center w-full ${
                    active === link.value ? activeStyle : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex justify-center py-3 px-1 border border-t-gray-400">
              <Link
                href="https://github.com/krifa-med-aziz"
                target="_blank"
                className="hover:text-violet-500 hover:bg-violet-400/10 p-2 rounded-full transition"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohamed-aziz-krifa-87bb02295/"
                target="_blank"
                className="hover:text-violet-500 hover:bg-violet-400/10  p-2 rounded-full transition"
              >
                <FaLinkedin />
              </Link>
              <a
                href="mailto:krifaaziz10@gmail.com"
                target="_blank"
                className="hover:text-violet-500 hover:bg-violet-400/10 p-2 rounded-full transition"
              >
                <MdEmail />
              </a>
              <Link
                href="https://www.instagram.com/med_aziz_krifa/"
                target="_blank"
                className="hover:text-violet-500 hover:bg-violet-400/10 p-2  rounded-full transition"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
