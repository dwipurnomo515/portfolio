import SkillCard from "./skillCard";

export default function Skill() {
  const skillItem = [
    {
      imgSrc: "/img/react.png",
      label: "React",
      desc: "Frontend Framework",
    },
    {
      imgSrc: "/img/js.jpg",
      label: "JavaScript",
      desc: "Programming Language for Web",
    },
    {
      imgSrc: "/img/html.png",
      label: "HTML5",
      desc: "Markup Language",
    },
    {
      imgSrc: "/img/css.png",
      label: "CSS3",
      desc: "Styling Web Pages",
    },
    {
      imgSrc: "/img/tailwind.png",
      label: "TailwindCSS",
      desc: "CSS Framework for Styling",
    },
    {
      imgSrc: "/img/ts.png",
      label: "TypeScript",
      desc: "Typed JavaScript",
    },
    {
      imgSrc: "/img/node.png",
      label: "Node.js",
      desc: "Backend Runtime",
    },
    {
      imgSrc: "/img/express.png",
      label: "Express.js",
      desc: "Web Framework for Node.js",
    },

    {
      imgSrc: "/img/postgree.jpg",
      label: "PostgreSQL",
      desc: "Relational Database",
    },

    {
      imgSrc: "/img/git.png",
      label: "Git",
      desc: "Version Control System",
    },
    {
      imgSrc: "/img/vite.jpg",
      label: "Vite",
      desc: "Frontend Build Tool",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}
