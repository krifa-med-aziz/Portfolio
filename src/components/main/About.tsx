import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-[#131523] to-[#0d1117] py-12 md:py-24 text-center"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div data-aos="fade-up" className="mb-16 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-sky-100">
            About <span className="text-[#8b5cf6]">Me</span>
          </h1>
          <p className="text-[#8b949e] mt-3 md:mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Full-Stack Developer passionate about crafting beautiful and
            scalable digital solutions
          </p>
        </div>
        {/* about me */}
        <div
          data-aos="fade-right"
          className="bg-transparent backdrop-blur-sm p-5 md:p-8 rounded-2xl  border border-gray-500/30 shadow-xl mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-20 h-20 md:w-55 md:h-28 rounded-2xl flex items-center justify-center text-4xl md:text-5xl bg-gradient-to-r from-[#8b5cf6] to-[#4c1d95]">
              👨‍💻
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-sky-100 mb-3 md:mb-4">
                Hello, I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#4c1d95]">
                  Med Aziz Krifa
                </span>
              </h3>
              <div className="text-[#8b949e] leading-relaxed text-sm md:text-base mb-3">
                I&apos;m a passionate{" "}
                <span className="text-[#8b5cf6] font-semibold">
                  Fullstack Software Engineer Student{" "}
                </span>
                in{" "}
                <Link
                  href="https://issatso.rnu.tn/"
                  target="_blank"
                  className="italic relative"
                >
                  ISSATSO
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#8b5cf6] " />
                </Link>{" "}
                (2023–2028) with experience in building modern web applications.
                With a strong foundation in web development, my journey in tech
                has since expanded to include both frontend and backend
                technologies.
              </div>
              <p className="text-[#8b949e] leading-relaxed text-sm md:text-base">
                Beyond my studies, I actively engage within the tech community
                through{" "}
                <span className="italic">Google Developer Student Clubs</span>,
                where I contribute both to technical activities and
                organizational activities. This experience allows me to
                collaborate with like-minded peers, enhance my skills, and
                contribute to impactful initiatives.
              </p>
            </div>
          </div>
        </div>
        {/* Personal info */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-sky-100 mb-6 md:mb-8 text-center">
            Personal Info
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div
              data-aos="fade-down"
              className="flex flex-col items-center justify-center gap-2 md:gap-3 p-4 md:p-6 rounded-2xl hover:shadow-lg transition aos-init aos-animate border border-gray-500/30 bg-transparent hover:border-[#8b5cf6]"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#8b5cf6]/10 text-xl md:text-2xl text-primary ">
                👨‍💻
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm text-[#8b949e]">Name</p>
                <p className="font-semibold text-white text-sm md:text-base">
                  Med Aziz Krifa
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="flex flex-col items-center justify-center gap-2 md:gap-3 p-4 md:p-6 rounded-2xl hover:shadow-lg transition aos-init aos-animate border border-gray-500/30 bg-transparent hover:border-[#8b5cf6]"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#8b5cf6]/10 text-xl md:text-2xl text-primary ">
                ✉️
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm text-[#8b949e]">Email</p>
                <p className="font-semibold text-white text-sm md:text-base">
                  krifaaziz10@gmail.com
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="flex flex-col items-center justify-center gap-2 md:gap-3 p-4 md:p-6 rounded-2xl hover:shadow-lg transition aos-init aos-animate border border-gray-500/30 bg-transparent hover:border-[#8b5cf6]"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#8b5cf6]/10 text-xl md:text-2xl text-primary ">
                📍
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm text-[#8b949e]">Location</p>
                <p className="font-semibold text-white text-sm md:text-base">
                  Sousse, Tunisia
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="flex flex-col items-center justify-center gap-2 md:gap-3 p-4 md:p-6 rounded-2xl hover:shadow-lg transition aos-init aos-animate border border-gray-500/30 bg-transparent hover:border-[#8b5cf6]"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#8b5cf6]/10 text-xl md:text-2xl text-primary ">
                🔍
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm text-[#8b949e]">Status</p>
                <p className="font-semibold text-white text-sm md:text-base">
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Technical skills */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 aos-init aos-animate">
          <h3 className="text-xl md:text-2xl font-bold text-sky-100 mb-6 md:mb-8 text-center">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <span className="px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full border border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/20 transition">
              React &amp; Next.js
            </span>
            <span className="px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full border border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/20 transition">
              JavaScript / TypeScript
            </span>
            <span className="px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full border border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/20 transition">
              Tailwind CSS
            </span>
            <span className="px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full border border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/20 transition">
              Supabase / REST APIs
            </span>
          </div>
        </div>
        {/* Development Philosophy */}
        <div data-aos="fade-up" className="aos-init aos-animate">
          <h3 className="text-xl md:text-2xl font-bold text-sky-100 mb-6 md:mb-8 text-center">
            Development Philosophy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="p-4 md:p-6 bg-transparent rounded-xl border border-gray-500/30 hover:shadow-lg transition">
              <h4 className="flex items-center justify-center gap-2 text-base md:text-lg font-semibold text-[#8b5cf6] mb-2 md:mb-3">
                <span>⚡</span> Performance First
              </h4>
              <p className="text-[#8b949e] text-xs md:text-sm leading-relaxed">
                Optimized, scalable, and lightning-fast applications.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-transparent rounded-xl border border-gray-500/30  hover:shadow-lg transition">
              <h4 className="flex items-center justify-center gap-2 text-base md:text-lg font-semibold text-[#8b5cf6] mb-2 md:mb-3">
                <span>♿</span>Accessibility Matters
              </h4>
              <p className="text-[#8b949e] text-xs md:text-sm leading-relaxed">
                Building for everyone, regardless of ability.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-transparent rounded-xl border border-gray-500/30  hover:shadow-lg transition">
              <h4 className="flex items-center justify-center gap-2 text-base md:text-lg font-semibold text-[#8b5cf6] mb-2 md:mb-3">
                <span>🔧</span>Clean Code
              </h4>
              <p className="text-[#8b949e] text-xs md:text-sm leading-relaxed">
                Maintainable, readable, and developer-friendly code.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-transparent rounded-xl border border-gray-500/30  hover:shadow-lg transition">
              <h4 className="flex items-center justify-center gap-2 text-base md:text-lg font-semibold text-[#8b5cf6] mb-2 md:mb-3">
                <span>🎨</span> User-Centered Design
              </h4>
              <p className="text-[#8b949e] text-xs md:text-sm leading-relaxed">
                Interfaces that delight and solve real problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
