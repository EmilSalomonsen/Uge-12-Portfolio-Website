const About = () => {
  return (
    <div className="bg-white rounded-xl shadow p-10 min-h-[60vh]">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">About Me</h1>
      <div>
        <p className="text-lg mb-6 text-gray-700">
          [Your introduction here]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Frontend Development (React, TypeScript)</li>
              <li>Backend Development (C#, ASP.NET Core)</li>
              <li>Database Management</li>
              <li>Version Control (Git)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interests</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Web Development</li>
              <li>Software Architecture</li>
              <li>Problem Solving</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 