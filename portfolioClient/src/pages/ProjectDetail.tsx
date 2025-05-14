import { useParams, Link } from 'react-router-dom';

const projects = [
  {
    id: '1',
    title: "Portfolio Website",
    description: "A personal portfolio website built with React, TypeScript, and ASP.NET Core.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "ASP.NET Core", "C#"],
    githubUrl: "https://github.com/EmilSalomonsen/uge3-cereal-api",
    liveUrl: "https://your-portfolio.com"
  },
  {
    id: '2',
    title: "E-commerce Shop",
    description: "A full-stack e-commerce shop with shopping cart and admin dashboard.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/EmilSalomonsen/uge4-5-pdf-downloader",
    liveUrl: "https://your-ecommerce.com"
  },
  {
    id: '3',
    title: "Blog Platform",
    description: "A modern blog platform with markdown support and user authentication.",
    technologies: ["React", "Next.js", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/EmilSalomonsen/Spac-Uge-6-7-8-9-Inventory-Management",
    liveUrl: "https://your-blog.com"
  },
  {
    id: '4',
    title: "Task Manager",
    description: "A productivity app for managing daily tasks and todos.",
    technologies: ["React", "Redux", "TypeScript", "Firebase"],
    githubUrl: "https://github.com/EmilSalomonsen/SPAC-10-11-GroceryDelivery",
    liveUrl: "https://your-tasks.com"
  },
  {
    id: '5',
    title: "Weather Dashboard",
    description: "A dashboard for checking weather forecasts using public APIs.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather.com"
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="bg-white rounded-xl shadow p-10 min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Project not found</h1>
        <Link to="/projects" className="text-blue-600 hover:underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-10 min-h-[60vh]">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{project.title}</h1>
      <p className="mb-4 text-gray-700">{project.description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4 mb-4">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub Repository</a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">Live Demo</a>
        )}
      </div>
      <Link to="/projects" className="text-blue-600 hover:underline">Back to Projects</Link>
    </div>
  );
};

export default ProjectDetail; 