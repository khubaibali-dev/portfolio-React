import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Chatbot from "../images/aibot.png";
const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI Dashboard & ChatBot",
      description:
        "A smart AI-powered dashboard and chatbot designed for businesses to automate customer support, analyze interactions, and manage data in real-time. Built using React, TypeScript, Tailwind CSS, and Python for seamless frontend and backend integration.",
      image: Chatbot,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Python"],
      liveUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7354833262789255168/",
    },
   {
  title: "Company Data Management System",
  description:
    "A full-stack management dashboard tailored for internal company operations. Includes modules for handling client records, internal communication, and performance analytics. Built with React, TypeScript, Flask, and MySQL, the system ensures secure and scalable data management.",
  image:
    "https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Replace with your actual image if available
  technologies: ["React", "TypeScript", "Tailwind CSS", "Flask", "MySQL"],
  // liveUrl: "https://your-demo-url.com", // Replace with real/demo URL
}

  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                     
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
