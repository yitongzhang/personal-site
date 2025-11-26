export default function WorkPage() {
  const projects = [
    {
      title: "Agora",
      description: "Governance infrastructure for onchain protocols",
      year: "2023–",
      url: "https://nounsagora.com/",
    },
    {
      title: "Vector DAO",
      description: "Coop-style design agency for web3",
      year: "2022–",
      url: "https://vectordao.com/",
    },
    {
      title: "Coinbase",
      description: "Product design for consumer crypto",
      year: "2018–22",
    },
    {
      title: "Autoflow",
      description: "Auto-layout plugin for Figma",
      year: "2020",
      url: "https://www.flowchart.design/",
    },
    {
      title: "Goodweb.design",
      description: "Marketing page pattern library",
      year: "2019",
      url: "http://goodweb.design/",
    },
  ];

  return (
    <div className="animate-in">
      <h1 className="page-title">Work</h1>
      <div>
        {projects.map((project, index) => (
          <article key={index} className="work-item">
            <div className="flex justify-between items-baseline gap-4">
              {project.url ? (
                <a href={project.url} className="work-title link">
                  {project.title}
                </a>
              ) : (
                <h2 className="work-title">{project.title}</h2>
              )}
              <span className="work-year flex-shrink-0">{project.year}</span>
            </div>
            <p className="work-description">{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
