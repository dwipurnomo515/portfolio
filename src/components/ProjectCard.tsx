import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white/70 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/80 no-underline!"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Tech Stack Badges */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full shadow-sm">
            React
          </span>
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full shadow-sm">
            Next.js
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 mb-3">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 group:hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-indigo-600 group-hover:text-emerald-600 transition-colors duration-300">
            View Project
          </span>
          <svg
            className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
