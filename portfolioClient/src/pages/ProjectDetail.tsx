import { useParams, Link } from 'react-router-dom';

const projects = [
  {
    id: '1',
    title: "Cereal API",
    description: "An API for retrieving information about cereals.",
    technologies: ["Python"],
    githubUrl: "https://github.com/EmilSalomonsen/uge3-cereal-api",
    liveUrl: ""
  },
  {
    id: '2',
    title: "PDF Downloader",
    description: "An PDF downloader that allows users to download PDFs from a given URL.",
    technologies: ["Python"],
    githubUrl: "https://github.com/EmilSalomonsen/uge4-5-pdf-downloader",
    liveUrl: ""
  },
  {
    id: '3',
    title: "Inventory Management",
    description: "An inventory management system that allows users to manage their inventory.",
    technologies: ["Typescript", "React", "Tailwind CSS", "Vite", "Tanstack Query", "shadcn/ui", "C#", "ASP.NET Core", "Docker"],
    githubUrl: "https://github.com/EmilSalomonsen/Spac-Uge-6-7-8-9-Inventory-Management",
    liveUrl: ""
  },
  {
    id: '4',
    title: "Grocery Delivery",
    description: "A grocery delivery app that allows users to order groceries from a given URL.",
    technologies: ["Typescript", "React", "Tailwind CSS", "Vite", "Tanstack Query", "shadcn/ui", "C#", "ASP.NET Core", "Docker"],
    githubUrl: "https://github.com/EmilSalomonsen/SPAC-10-11-GroceryDelivery",
    liveUrl: ""
  },
  {
    id: '5',
    title: "Portfolio Website",
    description: "A portfolio website for displaying my projects and skills.",
    technologies: ["Typescript", "React", "Tailwind CSS", "Vite", "Tanstack Query", "shadcn/ui", "C#", "ASP.NET Core"],
    githubUrl: "https://github.com/EmilSalomonsen/Uge-12-Portfolio-Website",
    liveUrl: ""
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
    <div className="bg-white rounded-xl shadow p-10 min-h-[60vh] flex flex-col gap-8">
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900">{project.title}</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Description of project</h2>
        <p className="mb-4 text-gray-700">{project.description}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Languages and technologies used for the project</h2>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">GitHub link</h2>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">GitHub Repository</a>
      </div>
      {project.liveUrl && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Extra links</h2>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">Live Demo</a>
        </div>
      )}
      <div>
        <Link to="/projects" className="text-blue-600 hover:underline">Back to Projects</Link>
      </div>
    </div>
  );
};

export default ProjectDetail; 