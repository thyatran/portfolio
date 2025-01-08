import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Art Auction App",
      description: "An online art auction.",
      techStack: ["Java", "JSP", "JavaScript"],
      image: "/art-brush.png",
      githubLink: "https://github.com/PrabhnoorKhatkar/CS157A-Team10",
    },
    {
      title: "Chat App",
      description: "A chat app",
      techStack: ["Java", "React.js", "MySQL"],
      image: "/chat-app.png",
      githubLink: "https://github.com/thyatran/chat-app",
    },
  ];
  return (
    <div className="flex flex-col items-center p-6 space-y-8">
      {/* SECTION TITLE */}
      <div class="flex items-center space-x-2 w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-600">\ Projects</h1>
        <span className="border-t border-gray-300 flex-1"></span>
      </div>

      {/* Project cards */}
      <div className="flex flex-col w-full max-w-4xl space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 h-40 object-cover rounded-lg mr-5"
            />
            {/* CONTENT */}
            <div className="flex flex-col w-full md:w-2/3 space-y-2">
              <h2 className="text-xl font-bold text-gray-600">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm">{project.description}</p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
