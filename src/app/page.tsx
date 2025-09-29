"use client";

import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import TechStackSection from "@/components/TechStackSection";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-[-32px] md:mt-[-65px]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50"></div>
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-violet-200 rounded-full opacity-20 animate-pulse delay-2000"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              Dwi Purnomo
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-light text-slate-600 mb-8">
            <span className="inline-block animate-bounce">👋</span> Full-Stack
            Developer
          </div>

          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12">
            Crafting{" "}
            <span className="font-semibold text-indigo-600">
              modern web experiences
            </span>{" "}
            with clean architecture, blazing performance, and beautiful
            interfaces that users love.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View My Work
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>

            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => {
            const section = document.getElementById("projects");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className=" hidden md:flex cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <svg
            className="w-6 h-6 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 py-10 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Featured Projects" />
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            modern web development
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <TechStackSection />
    </div>
  );
}
