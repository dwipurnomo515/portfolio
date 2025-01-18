import ProjectCard from "./projectCard";

export default function Work() {
  const works = [
    {
      imgSrc: "/img/p1.PNG",
      title: "E-commerce app",
      tags: ["React", "Node.js"],
      projectLink: "https://lakoe-frontend-beta.vercel.app/",
    },

    {
      imgSrc: "/img/p1.PNG",
      title: "E-commerce app",
      tags: ["React", "Node.js"],
      projectLink: "https://lakoe-frontend-beta.vercel.app/",
    },

    {
      imgSrc: "/img/p1.PNG",
      title: "E-commerce app",
      tags: ["React", "Node.js"],
      projectLink: "https://lakoe-frontend-beta.vercel.app/",
    },
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
