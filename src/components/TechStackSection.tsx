"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaDocker,
} from "react-icons/fa";
import {
  SiExpress,
  SiGoland,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiCodeigniter,
  SiBootstrap,
} from "react-icons/si";

import SectionTitle from "./SectionTitle";

const techStack = [
  { name: "PHP", icon: <FaPhp /> },
  { name: "CodeIgniter", icon: <SiCodeigniter /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Golang", icon: <SiGoland /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Vue", icon: <FaVuejs /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Postman", icon: <SiPostman /> },
];

export default function TechStackSection() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });

  // Autoplay
  useEffect(() => {
    if (!embla) return;
    const play = () => embla.scrollNext();
    const interval = setInterval(play, 2000);
    return () => clearInterval(interval);
  }, [embla]);

  return (
    <section className="px-4 py-20 bg-gradient-to-r from-slate-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Tech Stack" />

        {/* Embla Carousel Structure */}
        <div className="overflow-hidden mt-10" ref={emblaRef}>
          <div className="flex gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex-shrink-0 w-32 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center text-3xl text-indigo-600 bg-white shadow-md border border-gray-100 rounded-xl group-hover:scale-110 transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="mt-2 text-sm font-medium text-slate-700">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
