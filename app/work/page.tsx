export default function WorkPage() {
  const projects = [
    {
      title: "Personal Blog",
      description: "A minimal blog built with Next.js and Tailwind CSS",
      year: "2024",
    },
    {
      title: "Task Manager",
      description: "A simple task management application with React",
      year: "2023",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather data visualization",
      year: "2023",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Work</h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <article key={index}>
            <div className="flex justify-between items-baseline mb-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <span className="text-sm text-gray-500">{project.year}</span>
            </div>
            <p className="text-gray-600">{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
