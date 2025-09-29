import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Vue",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "TailwindCSS",
        "Vite",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "PHP",
        "CodeIgniter",
        "Laravel",
        "Golang",
        "MySQL",
        "PostgreSQL",
        "REST APIs",
        "PHPUnit",
      ],
    },
    {
      category: "Tools / DevOps",
      items: ["Git", "Docker", "AWS", "Vercel", "Postman", "Figma"],
    },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-slate-800 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Passionate developer crafting digital experiences that matter
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I&apos;m <strong className="text-indigo-600">Dwi Purnomo</strong>, a
            passionate full-stack developer from Indonesia who loves building
            useful things with code. With a strong focus on clean architecture
            and modern UI/UX, I craft web applications that are both beautiful
            and scalable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I enjoy working with technologies like{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600 font-semibold">
              Laravel
            </code>
            ,{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600 font-semibold">
              React
            </code>
            ,{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600 font-semibold">
              Next.js
            </code>
            ,{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600 font-semibold">
              TypeScript
            </code>
            ,{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600 font-semibold">
              TailwindCSS
            </code>
            ,{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600 font-semibold">
              Node.js
            </code>{" "}
            and{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600 font-semibold">
              Docker
            </code>
            . I&apos;m always curious, learning, and pushing the boundaries of
            modern web development.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Outside of code, I enjoy exploring new technology and collaborating
            with other builders.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-slate-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Skills & Technologies" />
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-emerald-100 text-indigo-700 text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Experience" />
          <div className="space-y-8">
            {/* Current Job */}
            <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Web Developer (IT Support)
                </h3>
                <span className="text-indigo-600 font-semibold">
                  June 2025 - Present
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Working as IT Support with web development responsibilities at
                PT Transforce Digital Indonesia. Tasks include assisting
                merchants with technical issues, developing and maintaining web
                applications using CodeIgniter and Bootstrap, redesigning UI,
                implementing client-requested features, creating APIs, and
                developing backend automation with cron jobs for reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "CodeIgniter",
                  "Bootsrap",
                  "PHP",
                  "MySQL",
                  "JavaScript",
                  "API Development",
                  "Cron Jobs",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside text-gray-600">
                <li>
                  Assisted merchants in troubleshooting technical issues and
                  provided guidance
                </li>
                <li>
                  Redesigned UI to improve user experience and responsiveness
                </li>
                <li>Implemented features based on client requirements</li>
                <li>Developed APIs for internal and external use</li>
                <li>
                  Created backend cron jobs for automated report generation
                </li>
              </ul>
            </div>

            {/* Internship */}
            <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Web Developer Intern
                </h3>
                <span className="text-indigo-600 font-semibold">
                  Jan 2022 - Mar 2022
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Assisted in developing and maintaining web applications at PT
                Sinergi Informatika Semen Indonesia using Laravel and
                TailwindCSS. Responsibilities included testing mobile
                applications to identify bugs and learning to integrate and use
                payment gateway systems. Gained hands-on experience in building
                responsive and user-friendly interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Laravel",
                  "TailwindCSS",
                  "PHP",
                  "JavaScript",
                  "QA Testing",
                  "Payment Gateway",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
