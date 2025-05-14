interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          GitHub Repository
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 