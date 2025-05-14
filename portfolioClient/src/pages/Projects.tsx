import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // This would typically come from your API
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React, TypeScript, and ASP.NET Core",
      technologies: ["React", "TypeScript", "Tailwind CSS", "ASP.NET Core", "C#"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.com"
    },
    // Add more projects here
  ];

  return (
    <div className="bg-white rounded-xl shadow p-10 min-h-[60vh]">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects; 