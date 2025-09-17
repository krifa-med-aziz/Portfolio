import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Lenis from "lenis";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type SectionId = "home" | "about" | "contact" | "projects" | "skills";

export function scrollToSection(
  id: SectionId,
  lenis?: Lenis | null,
  onNavigate?: (id: SectionId) => void
) {
  const element = document.getElementById(id);

  if (onNavigate) {
    onNavigate(id);
  }

  if (element) {
    if (lenis && lenis.scrollTo) {
      // Use Lenis if available and ready
      lenis.scrollTo(element, { duration: 1.2 });
    } else {
      // Fallback to native smooth scroll
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }
}
