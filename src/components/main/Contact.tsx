import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#10141A] py-12 md:py-24 text-center"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <SectionHeader
          title="Let's Connect"
          description="Have a project in mind or want to discuss opportunities? I'm always open to talking about creative ideas and new projects."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-transparent border border-gray-500/30 rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105 text-sky-100">
            <div className="flex items-center justify-center mb-3">
              <FaLocationDot className="text-[#8b5cf6] text-2xl" />
            </div>
            <h4 className="font-semibold text-text-primary">Location</h4>
            <p className="text-sm text-[#8b949e]">Sousse, Tunisia</p>
          </div>
          <div className="bg-transparent border border-gray-500/30 rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105 text-sky-100">
            <div className="flex items-center justify-center mb-3">
              <MdEmail className="text-[#8b5cf6] text-2xl" />
            </div>
            <h4 className="font-semibold text-text-primary">Email</h4>
            <p className="text-sm text-[#8b949e]">krifaaziz10@gmail.com</p>
          </div>
          <div className="bg-transparent border border-gray-500/30 rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105 text-sky-100">
            <div className="flex items-center justify-center mb-3">
              <FaPhone className="text-[#8b5cf6] text-2xl" />
            </div>
            <h4 className="font-semibold text-text-primary">Phone</h4>
            <p className="text-sm text-[#8b949e]">+216 93354707</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mb-12">
          <Link
            target="_blank"
            aria-label="GitHub"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500/30 bg-transparent text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white transition"
            href="https://github.com/krifa-med-aziz"
          >
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            aria-label="Instagram"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500/30 bg-transparent text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white transition"
            href="https://www.instagram.com/med_aziz_krifa/"
          >
            <AiFillInstagram />
          </Link>
          <Link
            target="_blank"
            aria-label="Linkedin"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500/30 bg-transparent text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white transition"
            href="https://www.linkedin.com/in/mohamed-aziz-krifa-87bb02295/"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            aria-label="Whatsapp"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500/30 bg-transparent text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white transition"
            href="https://wa.me/21693354707"
          >
            <FaWhatsapp />
          </Link>
        </div>
        <Link
          href="mailto:krifaaziz10@gmail.com"
          className="inline-block px-6 py-3 rounded-lg bg-[#8b5cf6] text-white font-medium shadow hover:bg-[#8b5cf6] /90 transition"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
