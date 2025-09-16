"use client";
import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const onScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={scrolltoTop}
      className={`p-2 rounded-2xl fixed right-[20px] bottom-[20px] bg-[#8b5cf6] text-white cursor-pointer hover:opacity-80 transition-all duration-500 ${
        showButton
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowBigUp />
    </button>
  );
}
